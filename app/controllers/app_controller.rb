require "net/http"
require "json"

class AppController < ApplicationController
  
  def main

  end
  
  def books
    
  end

  def books_by_id
    
  end
    
  def index_json
    
    title = params[:title] ? params[:title] : "Harry%20Potter"

    puts title
    url = "https://www.googleapis.com/books/v1/volumes?q=intitle:#{title}&key=AIzaSyDXXnIr_YKRWAmhO5c0arzwTNj2Dys2h_k"
    
    uri = URI(url)
    response = JSON.parse(Net::HTTP.get(uri))

    if response["items"] != nil
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
      return render json: list_books
    end

    puts ("no BOOKS")

    return render json: {status: 404}, status: 404
    
  end

  # GET /homes/1 or /homes/1.json
  def show
    
  end

  def update

  end
  def destroy

  end
end