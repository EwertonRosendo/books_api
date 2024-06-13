require "net/http"
require "json"


class HomesController < ApplicationController
  #before_action :set_home, only: %i[ show edit update destroy ]

  # GET /homes or /homes.json
  def index
    @homes = Home.all
  end

  # GET /homes/1 or /homes/1.json
  def show
    #author = params[:author]
    #title = params[:title]
    #publisher = params[:publisher]

    #url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}&inpublisher:#{publisher}&inauthor:#{author}&startIndex=0&maxResults=10&key=AIzaSyDXXnIr_YKRWAmhO5c0arzwTNj2Dys2h_k"
    url = "https://www.googleapis.com/books/v1/volumes?q=title:ruby&key=AIzaSyDXXnIr_YKRWAmhO5c0arzwTNj2Dys2h_k"
    
    uri = URI(url)
    response = JSON.parse(Net::HTTP.get(uri))
    list_books = []
    response["items"].each_with_index do |item, index|
      
      authors = ""
      
      item["volumeInfo"]["authors"].each do |author|
        authors += author+"   "
      end
      thumbnail = item.dig("volumeInfo", "imageLinks", "thumbnail") ? item["volumeInfo"]["imageLinks"]["thumbnail"] : "https://media.baamboozle.com/uploads/images/8842/1650077126_214183.jpeg"


      book = {
        "title": item["volumeInfo"]["title"],
        "subtitle": item["volumeInfo"]["subtitle"],
        "description": item["volumeInfo"]["description"],
        "authors": authors,
        "publishedDate": item["volumeInfo"]["publishedDate"],
        "publisher": item["volumeInfo"]["publisher"],
        "thumbnail": thumbnail,
      }

      list_books.push(book)
    end

    render json: list_books
  end

  def update

  end
  def destroy

  end
  
end
