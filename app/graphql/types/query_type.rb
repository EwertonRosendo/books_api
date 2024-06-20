# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :books,
    [Types::BookType],
    null: false,
    description: "Return a list of books"

    def books
      Book.all
    end
  end
end
