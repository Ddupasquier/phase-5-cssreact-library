Rails.application.routes.draw do
  resources :pending_components
  get 'sessions/create'
  get 'sessions/destroy'
  
  resources :user_favorites, only: [:index, :show]
  resources :comments, only: [:index, :show]
  resources :components, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create, :update]
  resources :pending_components, only: [:index, :show, :create, :destroy]
  
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  delete "/moveanddelete/:id", to: "pending_components#moveanddelete"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
