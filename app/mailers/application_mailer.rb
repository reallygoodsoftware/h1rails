class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'

  def from_message_template(identifier,recipient,replacements={})
    @message_template = MessageTemplate.find_by_identifier(identifier)
    if @message_template.nil?
      raise "Message template not found for identifier: #{identifier}"
    end
    @replacements   = replacements.transform_keys(&:to_s) # Liquid needs hash keys as strings, not symbols
    @body           = Liquid::Template.parse(@message_template.body).render(@replacements)
    mail(
      to:       recipient,
      subject:  @message_template.subject,
      body:     @body
    )
  end

end
