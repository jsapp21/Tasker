Rails.application.routes.draw do
  resources :notes, only: [ :index, :create, :update, :destroy]
  resources :users, only: [ :create ]
  patch '/complete', to: 'notes#complete'
  post "/login", to: "users#login"
end
