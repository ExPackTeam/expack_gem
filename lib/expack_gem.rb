# frozen_string_literal: true

require_relative "expack_gem/version"
module ExpackGem
  class Error < StandardError; end
  class << self 
    def load!
      if rails?
        register_rails_engine
      elsif hanami?
        register_hanami
      elsif sprockets?
        register_sprocket
      elsif defined?(::Sass) && ::Sass.respond_to?(:load_paths)
        # The deprecated `sass` gem:
        ::Sass.load_paths << stylesheets_path
      elsif defined?(Sass::Rails) && Sass::Rails.respond_to?(:add_sass_load_path)
        # The `sass-rails` gem is present
         Sass::Rails.add_sass_load_path(stylesheets_path)
      end
    end
  end
end
