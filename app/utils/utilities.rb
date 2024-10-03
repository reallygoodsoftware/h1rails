module Utilities
  
  def self.markdown_to_html(content)
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

  def self.markdown_file_to_html(filename)
    content = File.read(filename)
    markdown_to_html(content)
  end

end