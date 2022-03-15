Rails.application.routes.draw do
  resources :user_components
  resources :user_favorites
  resources :comments
  resources :components
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
