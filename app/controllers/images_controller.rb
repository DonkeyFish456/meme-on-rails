class ImagesController < ApplicationController

def index
  @images = Image.all
  render json: @images
end

def show
  @image = Image.find(params[:id])
end

def new
  @image = Image.new
end

def create
  @image = Image.new
  @image.url = params[:image][:name]

  if @image.save
    redirect_to images_path
  else
    render :new
  end
end

def edit
end

def update
end

def detroy
end

end
