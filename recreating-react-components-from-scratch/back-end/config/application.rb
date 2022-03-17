require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module BackEnd
  class Application < Rails::Application
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore
    config.action_dispatch.cookies_same_site_protection = :strict
    config.load_defaults 7.0
  end
end
