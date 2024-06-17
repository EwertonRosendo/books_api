require "net/http"
require "json"

class AppController < ApplicationController
  protect_from_forgery with: :null_session
  def main

  end
  
  def books
    
  end

  def books_by_id
    
  end
    
  def index_json
    #author = params[:author]
    #title = params[:title]
    #publisher = params[:publisher]

    #url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}&inpublisher:#{publisher}&inauthor:#{author}&startIndex=0&maxResults=10&key=AIzaSyDXXnIr_YKRWAmhO5c0arzwTNj2Dys2h_k"
    title = params[:title] ? params[:title] : "react"
    puts title
    url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}&key=AIzaSyDXXnIr_YKRWAmhO5c0arzwTNj2Dys2h_k"
    
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

  # GET /homes/1 or /homes/1.json
  def show
    
  end

  def update

  end
  def destroy

  end
end
