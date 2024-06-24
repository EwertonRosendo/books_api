# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_book, mutation: Mutations::Books::CreateBook
    field :update_book, mutation: Mutations::Books::UpdateBook

    field :create_author, mutation: Mutations::Authors::CreateAuthor
  end
end
