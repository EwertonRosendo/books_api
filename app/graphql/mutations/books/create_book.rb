module Mutations
  module Books
    class CreateBook < ::Mutations::BaseMutation
      argument :title, String, required: true
      argument :description, String, required: true
      argument :author, String, required: true
      argument :publisher, String, required: true
      argument :published_at, String, required: true
      argument :url_image, String, required: true

      type Types::BookType

      def resolve(title:, description:, author:, publisher:, url_image:, published_at:)
        thisAuthor = Author.find_or_create_author(author)

        Book.create(title: title, description: description, author: thisAuthor, published_at: published_at,
                    publisher: publisher, url_image: url_image)
      end
    end
  end
end
