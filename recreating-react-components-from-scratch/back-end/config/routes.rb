Rails.application.routes.draw do
  get 'sessions/create'
  get 'sessions/destroy'
  resources :user_components, only: [:index, :show]
  resources :user_favorites, only: [:index, :show]
  resources :comments, only: [:index, :show]
  resources :components, only: [:index, :show]
  resources :users, only: [:index, :show, :create, :update]
  
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
