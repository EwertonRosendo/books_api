module Mutations
  module Books
    class UpdateBook < ::Mutations::BaseMutation
      argument :id, ID, required: true
      argument :title, String, required: false
      argument :description, String, required: false
      argument :author, String, required: false
      argument :publisher, String, required: false
      argument :published_at, String, required: false
      argument :url_image, String, required: false

      type Types::BookType

      def resolve(id:, title:, description:, author:, publisher:, url_image:, published_at:)
        thisAuthor = Author.find_or_create_author(author)
        Book.find_by(:id => id).update!(id: id, title: title, description: description, author: thisAuthor,
                                        published_at: published_at, publisher: publisher, url_image: url_image)
      end
    end
  end
end
