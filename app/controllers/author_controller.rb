# frozen_string_literal: true

require 'json'
class AuthorController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    render json: Author.all
  end

  def show
    author = Author.find_by(id: params[:id])
    render json: { name: author.name }
  end
end
