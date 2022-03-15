Rails.application.routes.draw do
  resources :user_components, only: [:index, :show]
  resources :user_favorites, only: [:index, :show]
  resources :comments, only: [:index, :show]
  resources :components, only: [:index, :show]
  resources :users, only: [:index, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
