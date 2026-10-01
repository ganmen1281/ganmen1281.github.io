# frozen_string_literal: true

require "pathname"
require "uri"

ROOT = Pathname.new(__dir__).join("..").expand_path
SITE = ROOT.join("_site")

abort "_site がありません。先に bundle exec jekyll build を実行してください。" unless SITE.directory?

errors = []
warnings = []

posts = ROOT.join("_posts").children.select(&:file?)
original_images = ROOT.join("assets/img").children.select(&:file?).reject { |path| %w[favicon.svg favicon-g.svg favicon-g.png apple-touch-icon.png og.png og-type.png].include?(path.basename.to_s) }
audio = ROOT.join("assets/audio").children.select(&:file?)
thumbnails = ROOT.join("assets/img/thumbnails").children.select(&:file?)

errors << "記事数が51ではありません: #{posts.size}" unless posts.size == 51
errors << "既存画像数が82ではありません: #{original_images.size}" unless original_images.size == 82
errors << "既存音声数が1ではありません: #{audio.size}" unless audio.size == 1

required_pages = %w[index.html works/index.html kakidame/index.html monthly/index.html about/index.html contact/index.html 404.html]
required_pages.each do |relative|
  errors << "主要ページがありません: #{relative}" unless SITE.join(relative).file?
end

html_files = SITE.glob("**/*.html")
missing_internal = []
empty_alts = []
external_urls = []

html_files.each do |html_path|
  html = html_path.read(encoding: "UTF-8")

  html.scan(/<(?:a|img|script|link|iframe)\b[^>]*(?:href|src)=["']([^"']+)["']/i).flatten.each do |raw|
    next if raw.empty? || raw.start_with?("#", "mailto:", "tel:", "data:", "javascript:")
    if raw.match?(%r{\Ahttps?://}i) || raw.start_with?("//")
      normalized = raw.start_with?("//") ? "https:#{raw}" : raw
      errors << "外部URLに空白があります: #{html_path.relative_path_from(SITE)} -> #{raw}" if raw.match?(/[[:space:]]/)
      begin
        uri = URI.parse(URI::DEFAULT_PARSER.escape(normalized))
        errors << "外部URLの形式が不正です: #{html_path.relative_path_from(SITE)} -> #{raw}" if uri.host.nil?
      rescue URI::InvalidURIError
        errors << "外部URLを解釈できません: #{html_path.relative_path_from(SITE)} -> #{raw}"
      end
      external_urls << raw
      next
    end

    clean = URI::DEFAULT_PARSER.unescape(raw.split(/[?#]/, 2).first)
    target = if clean.start_with?("/")
               SITE.join(clean.delete_prefix("/"))
             else
               html_path.dirname.join(clean).cleanpath
             end
    target = target.join("index.html") if clean.end_with?("/")
    missing_internal << [html_path.relative_path_from(SITE), raw] unless target.file?
  rescue ArgumentError
    warnings << "URLを解釈できません: #{html_path.relative_path_from(SITE)} -> #{raw}"
  end

  html.scan(/<img\b[^>]*>/i).each do |tag|
    alt = tag[/\balt=["']([^"']*)["']/i, 1]
    empty_alts << html_path.relative_path_from(SITE) if alt.nil?
  end
end

missing_internal.uniq.each { |page, url| errors << "内部リンク切れ: #{page} -> #{url}" }
empty_alts.uniq.each { |page| warnings << "空のaltがあります: #{page}" }

root_html = SITE.join("index.html").read(encoding: "UTF-8")
errors << "トップのOGP画像が設定されていません" unless root_html.include?("/assets/img/og-type.png")
errors << "faviconが設定されていません" unless root_html.include?("/assets/img/favicon-g.svg")
errors << "Worksカードが27件ではありません" unless SITE.join("works/index.html").read(encoding: "UTF-8").scan(/class="work-card"/).size == 27
errors << "Worksカードに表示用テキストが残っています" if SITE.join("works/index.html").read(encoding: "UTF-8").include?('work-card__content')
errors << "詳細ページに先頭サムネイルが残っています" if html_files.any? { |path| path.read(encoding: "UTF-8").include?('post__hero') }
errors << "記事末尾の簡易プロフィールが残っています" if html_files.any? { |path| path.read(encoding: "UTF-8").include?('author-box') }
errors << "About記事に一覧リンクが残っています" if SITE.join("2025/05/31/intro.html").read(encoding: "UTF-8").include?('post__back')
errors << "About記事にお問い合わせが残っています" if SITE.join("2025/05/31/intro.html").read(encoding: "UTF-8").include?('お問い合わせ')
contact_html = SITE.join("contact/index.html").read(encoding: "UTF-8")
errors << "Contactページにメールアドレスがありません" unless contact_html.include?("ganmen1281douga@gmail.com")
errors << "ContactページにDiscord連絡先がありません" unless contact_html.include?("ganmen_")
errors << "ContactページにGitHubカードが残っています" if contact_html.include?('<p class="eyebrow">GitHub</p>')
errors << "Contactページに案内文がありません" unless contact_html.include?("なんでもお待ちしています") && contact_html.include?("ご予算の目安")
errors << "画像に白黒フィルターが残っています" if SITE.join("assets/css/style.css").read(encoding: "UTF-8").match?(/grayscale\s*\(/)
home_nav = root_html[/<nav class="home-splash__nav".*?<\/nav>/m].to_s
errors << "トップページのメニューにページ内リンクが残っています" if home_nav.match?(/href=["']#/)
errors << "トップページにWorks一覧が残っています" if root_html.include?('class="works-grid')
errors << "トップページにフッターが残っています" if root_html.include?('class="site-footer')
errors << "トップページにUpdates導線が残っています" if home_nav.include?('Updates')
errors << "トップページの最右メニューがContactではありません" unless home_nav.scan(/<a\b[^>]*>(.*?)<\/a>/m).flatten.last.to_s.strip == "Contact"
errors << "削除したUpdatesページが生成されています" if SITE.join("updates/index.html").exist?

puts "Source posts: #{posts.size}"
puts "Original images: #{original_images.size}"
puts "Optimized thumbnails: #{thumbnails.size}"
puts "Audio files: #{audio.size}"
puts "Generated HTML: #{html_files.size}"
puts "Unique external URLs: #{external_urls.uniq.size}"
puts "Warnings: #{warnings.size}"
warnings.each { |warning| puts "WARN: #{warning}" }

if errors.empty?
  puts "OK: コンテンツ数、内部リンク、外部URL形式を確認しました。"
else
  errors.each { |error| warn "ERROR: #{error}" }
  exit 1
end
