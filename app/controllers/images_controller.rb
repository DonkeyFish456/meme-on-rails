class ImagesController < ApplicationController
  skip_before_action :verify_authenticity_token

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
  @image = Image.new(image_params)

  # @upload = Cloudinary::Uploader.upload(params[:image][:file])#, :public_id => params[:image][:file].original_filename)
  #
  # @image.url = @upload['public_id'] + '.' + @upload['format']

  if @image.save
    render json: @image
  else
    render json: @image.errors, status: :unprocessable_entity
  end
end

def edit
end

def update
end

def detroy
end

private

def image_params
  params.permit(:url)
end

end
