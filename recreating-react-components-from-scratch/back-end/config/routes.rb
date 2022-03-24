Rails.application.routes.draw do
  resources :pending_contributors
  resources :pending_components
  get 'sessions/create'
  get 'sessions/destroy'
  
  resources :user_favorites, only: [:index, :show, :create]
  # resources :comments, only: [:index, :show]
  resources :components, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create, :update]
  resources :pending_components, only: [:index, :show, :create, :destroy]
  resources :pending_contributors, only: [:index, :show, :create, :destroy]
  
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  patch "/update_contrib/:id", to: "users#update_contrib"
  delete "/moveanddelete/:id", to: "pending_components#moveanddelete"
  get "/current_user_fav", to: "user_favorites#current_user_fav"
  get "/current_user_components", to: "components#current_user_components"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
