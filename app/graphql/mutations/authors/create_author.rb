module Mutations
    module Authors
      class CreateAuthor < ::Mutations::BaseMutation
        argument :name, String, required: true
        argument :biography, String, required: true
  
        type Types::AuthorType
  
        def resolve(name:, biography:)
          Author.create(name: name, biography: biography)
        end
      end
    end
  end