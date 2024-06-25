# frozen_string_literal: true

require 'net/http'
require 'json'

class AppController < ApplicationController
  def index
    title = params[:title] || 'Harry%20Potter'

    url = "https://www.googleapis.com/books/v1/volumes?q=intitle:#{title}&key=AIzaSyDXXnIr_YKRWAmhO5c0arzwTNj2Dys2h_k"

    uri = URI(url)
    response = JSON.parse(Net::HTTP.get(uri))

    unless response['items'].nil?
      list_books = []

      response['items'].each_with_index do |item, _index|
        authors = ''

        item['volumeInfo']['authors'].each do |author|
          authors += "#{author}   "
        end
        thumbnail = if item.dig('volumeInfo', 'imageLinks',
                                'thumbnail')
                      item['volumeInfo']['imageLinks']['thumbnail']
                    else
                      'https://media.baamboozle.com/uploads/images/8842/1650077126_214183.jpeg'
                    end

        book = {
          "title": item['volumeInfo']['title'],
          "subtitle": item['volumeInfo']['subtitle'],
          "description": item['volumeInfo']['description'],
          "authors": authors,
          "publishedDate": item['volumeInfo']['publishedDate'],
          "publisher": item['volumeInfo']['publisher'],
          "thumbnail": thumbnail
        }

        list_books.push(book)
      end
    end
    respond_to do |format|
      format.html
      format.json{ render json: list_books }
    end
  end
end
