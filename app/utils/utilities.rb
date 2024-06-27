module Utilities
  
  def self.markdown_to_html(filename)
    content = File.read(filename)
    markdown = Redcarpet::Markdown.new(
      Redcarpet::Render::HTML.new(
        hard_wrap: false,
        link_attributes: { target: '_blank' },
        fenced_code_blocks: true,
      ),
      autolink: true, 
      space_after_headers: true,
      fenced_code_blocks: true,
      tables: true 
    )
    markdown.render(content)
  end
  
  def self.markdown_menu(active_file)
    content = markdown_to_html("docs/menu.md")
    content = rewrite_menu_links(content, active_file)
    content
  end

  def self.rewrite_menu_links(html_content, current_file)
    doc = Nokogiri::HTML(html_content)
    
    # Rewrite links
    doc.css('a').each do |link|
      href = link['href']
      if href && href.end_with?('.md')
        link['href'] = "/docs?file=#{href}"
        link.remove_attribute('target')
      end

      # Check if the link is the current file and add 'active' class
      if href == current_file
        existing_class = link['class']
        link['class'] = existing_class ? "#{existing_class} active" : "active"
      end
    end

    doc.to_html
  end

end