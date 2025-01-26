class StreamingController < ApplicationController

  include ActionController::Live

  def stream_chat
    response.headers['Content-Type'] = 'text/event-stream'
    response.headers['Last-Modified'] = Time.now.httpdate
    
    sse = SSE.new(response.stream)
    parser = EventStreamParser::Parser.new
   
    HTTParty.post(
      'https://api.openai.com/v1/chat/completions',
      stream_body: true,
      headers: {
        'Authorization' => "Bearer #{ENV['OPENAI_API_KEY']}",
        'Content-Type' => 'application/json'
      },
      body: {
        model: 'gpt-4',
        messages: [{ role: 'user', content: 'Tell me a 200 word story about a cat' }],
        stream: true
      }.to_json
    ) do |chunk|
      parser.feed(chunk) do |type, data, id|
        next if data == '[DONE]'
        json = JSON.parse(data)
        content = json.dig('choices', 0, 'delta', 'content')
        if content 
          sse.write(content)
        end
      end
    end
   
    sse.write('done', event: 'complete')
  ensure
    sse.close
  end

end