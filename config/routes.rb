Rails.application.routes.draw do
  root 'generators#index'
  resources :images

end
