module SvgHelper
  # Thread-safe, process-local cache
  SVG_CACHE = Concurrent::Map.new

  def inline_svg(name, **options)
    svg = SVG_CACHE.compute_if_absent(name) do
      path = Rails.root.join('app', 'assets', "#{name}")
      raise "SVG not found: #{path}" unless File.exist?(path)

      # Read once, freeze forever
      File.read(path).freeze
    end

    # Fast-path: no extra attrs – just return the cached, raw string
    return svg.html_safe if options.blank?

    # One-off attribute merge (cheap Nokogiri parse)
    with_attrs(svg, options).html_safe
  end

  private

  def with_attrs(svg_string, attrs)
    frag = Nokogiri::HTML::DocumentFragment.parse(svg_string.dup)
    node = frag.at_css('svg')

    attrs.each { |k, v| node[k.to_s.tr('_', '-')] = v }
    frag.to_html
  end
end