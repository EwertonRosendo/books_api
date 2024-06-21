# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_author, mutation: Mutations::Authors::CreateAuthor
  end
end
