class CoverSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :publisher, :published_at, :description, :author, :url_image, :cover, :cover_url
end
