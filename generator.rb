# h1rails_template.rb
require 'open-uri'
require 'fileutils'

# Define the GitHub repo URL and branch
REPO_URL = "https://github.com/reallygoodsoftware/h1rails"
BRANCH = "main" # Change this if you want to use a different branch

# Directories to copy from the repo
DIRECTORIES_TO_COPY = [
  "app/admin",
  "app/assets/icons", # Add icons
  "app/controllers/api/v1",
  "app/controllers/h1rails",
  "app/controllers/users/",
  "app/models",
  "app/utils",
  "app/views/h1rails",
  "app/views/shared",
  "app/views/users",
  "app/views/app",
  "app/views/active_admin/common",
  "config/routes",
  "db/migrate",
  "public"
]

FILES_TO_COPY = [
  ".cursorrules", 
  "app/assets/javascripts/active_admin.js",
  "app/assets/stylesheets/active_admin.scss",
  "app/controllers/concerns/h1_rails.rb",
  "app/controllers/application_controller.rb",
  "app/controllers/app_controller.rb",
  "app/helpers/h1_helper.rb",
  "app/views/layouts/application.html.erb",
  "config/routes.rb",
  "config/initializers/active_admin.rb",
  "config/initializers/countries.rb",
  "config/initializers/devise.rb",
  "config/initializers/warden.rb"
]
  

gems_to_add = [
  { name: "passenger", version: "~> 5.0" },
  { name: "activeadmin", version: "~> 3.2" },
  { name: "arctic_admin", version: "4.3.1" },
  { name: "sassc-rails", version: "~> 2.1" },
  { name: "devise", version: "~> 4.9" },
  { name: "delayed", version: "0.5.5" },
  { name: "httparty", version: "0.23.1" },
  { name: "aws-sdk-s3", version: "1.167.0" },
  { name: "inline_svg", version: "1.9.0" }
]

# Add each gem to the Gemfile
gems_to_add.each do |gem_info|
  if File.readlines("Gemfile").grep(/gem ['"]#{gem_info[:name]}['"]/).empty?
    # Gem not in Gemfile, safe to add
    gem gem_info[:name], gem_info[:version]
    puts "Added gem '#{gem_info[:name]}' (#{gem_info[:version]}) to Gemfile"
  else
    puts "Gem '#{gem_info[:name]}' already exists in Gemfile, skipping"
  end
end

# APPEND to the readme at the top that this was generated from H1 Rails 
File.write("README.md", "This Rails application was generated from h1 Rails")


# Method to download a file from GitHub
def download_file(path)
  file_url = "#{REPO_URL}/raw/#{BRANCH}/#{path}"
  begin
    URI.open(file_url).read
  rescue OpenURI::HTTPError => e
    puts "Error downloading file #{path}: #{e.message}"
    nil
  end
end

# Method to download a directory listing from GitHub API
def list_directory_files(path)
  # GitHub API requires authentication for some operations,
  # but for public repos we can use the raw content listing
  puts "Downloading directory listing for #{path}..."
  
  # This is a simplified approach - in a real implementation,
  # you might want to use the GitHub API with proper authentication
  
  # For now, we'll use a workaround by checking common files
  # that might exist in the directory
  []
end

# Clone the repo to a temporary directory
puts "Cloning #{REPO_URL} to temporary directory..."
require 'tmpdir'
temp_dir = Dir.mktmpdir("h1rails-template")

inside temp_dir do
  run "git clone #{REPO_URL} ."
end

# Copy the directories from the temp directory to the new Rails app
DIRECTORIES_TO_COPY.each do |directory|
  source_path = File.join(temp_dir, directory)
  if File.directory?(source_path)
    puts "Copying directory: #{directory}"
    directory(source_path, directory)
  else
    puts "Directory not found in repo: #{directory}"
  end
end

FILES_TO_COPY.each do |file|
  source_path = File.join(temp_dir, file)
  if File.file?(source_path)
    puts "Copying file: #{file}"
    FileUtils.mkdir_p(File.dirname(file)) # Create directory structure if needed
    FileUtils.cp(source_path, file)
  else
    puts "File not found in repo: #{file}"
  end
end

# Clean up
FileUtils.remove_entry(temp_dir)

# Additional setup
after_bundle do
  # Run any necessary migrations
  rails_command "db:migrate"
  
  # Initialize git repository
  git :init
  git add: "."
  git commit: "-m 'Initial commit with h1rails template'"
  
  puts "Successfully initialized Rails application with directories from h1rails!"
end