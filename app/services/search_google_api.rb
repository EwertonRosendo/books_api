require 'net/http'
require 'json'

class SearchGoogleApi
    def initialize(title)
        @title = title
      end

    def searchBookOnGoogle(local_title)
        
        url = "https://www.googleapis.com/books/v1/volumes?q=intitle:#{local_title}&key=AIzaSyDXXnIr_YKRWAmhO5c0arzwTNj2Dys2h_k"
        uri = URI(url)

        response = JSON.parse(Net::HTTP.get(uri))
        list_books = []
        if response["items"] != nil
            response["items"].each do |item|
                
                book = {
                    "title": item["volumeInfo"]["title"],
                    "subtitle": item["volumeInfo"]["subtitle"],
                    "description": item["volumeInfo"]["description"],
                    "authors": item["volumeInfo"]["authors"],
                    "publishedDate": item["volumeInfo"]["publishedDate"],
                    "publisher": item["volumeInfo"]["publisher"],
                    "thumbnail": item["volumeInfo"]["imageLinks"]["thumbnail"],
                }

                list_books.push(book)
            end

            return list_books
        end
    end
end