class LivecodeController < ApplicationController
  
  skip_before_action :verify_authenticity_token, only: [:save_file]
  
   def get_file
    # Get the file path from the request parameters
    file_path = params[:path]
    
    # Check if the file path was provided
    unless file_path.present?
      return render json: { error: "No file path provided" }, status: :bad_request
    end
    
    # For security, you may want to restrict which files can be accessed
    # This is a simple check to prevent directory traversal
    if file_path.include?("..") || !file_path.match?(/^[\w\.\/\-_]+$/)
      return render json: { error: "Invalid file path" }, status: :forbidden
    end
    
    # Determine the base path for your editable files
    # Modify this to match your application's file structure
    base_path = Rails.root.join("app", "views")
    
    # Construct the full file path
    full_path = base_path.join(file_path)
    
    # Check if the file exists
    unless File.exist?(full_path)
      return render json: { error: "File not found" }, status: :not_found
    end
    
    # Read the file content
    begin
      file_content = File.read(full_path)
      render plain: file_content
    rescue => e
      render json: { error: "Error reading file: #{e.message}" }, status: :internal_server_error
    end
  end
  
  def save_file
    # Get the file path from the request parameters
    file_path = params[:path]
    
    # Check if the file path was provided
    unless file_path.present?
      return render json: { error: "No file path provided" }, status: :bad_request
    end
    
    # For security, you may want to restrict which files can be accessed
    # This is a simple check to prevent directory traversal
    if file_path.include?("..") || !file_path.match?(/^[\w\.\/\-_]+$/)
      return render json: { error: "Invalid file path" }, status: :forbidden
    end
    
    # Determine the base path for your editable files
    base_path = Rails.root.join("app", "views")
    
    # Construct the full file path
    full_path = base_path.join(file_path)
    
    # Check if the file exists
    unless File.exist?(full_path)
      return render json: { error: "File not found" }, status: :not_found
    end
    
    # Get the file content from the request body
    file_content = request.body.read
    
    # Write the file content
    begin
      # Optionally, create a backup of the file before saving
      backup_path = "#{full_path}.bak"
      FileUtils.cp(full_path, backup_path) if File.exist?(full_path)
      
      # Write the new content to the file
      File.write(full_path, file_content)
      
      render json: { success: true, message: "File saved successfully" }
    rescue => e
      render json: { error: "Error saving file: #{e.message}" }, status: :internal_server_error
    end
  end
end