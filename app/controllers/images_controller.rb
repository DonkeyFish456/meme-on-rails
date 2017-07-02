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

  @upload = Cloudinary::Uploader.upload(params[:image][:file])#, :public_id => params[:image][:file].original_filename)



  @image.url = @upload['public_id'] + '.' + @upload['format']
  # @image.url = params[:image][:file].original_filename



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
