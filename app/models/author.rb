class Author < ApplicationRecord
    has_many :books

    def self.find_or_create_author(name)
        unless Author.find_by(:name => name)
            Author.create(
                :name => name, 
                :biography => "Author without description.."
                ) 
        end
        
        author = Author.find_by(:name => name)

        author
    end
end
