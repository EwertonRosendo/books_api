require "rails_helper"
RSpec.describe Book do
  author = Author.where(name: "Machado de Assis").first_or_create!
  book = Book.new(
    title: "Dom Casmurro",
    author: author,
    description: "Em Dom Casmurro, o narrador Bento Santiago
    retoma a infância que passou na Rua de Matacavalos e
    conta a história do amor e das desventuras que viveu com
    Capitu, uma das personagens mais enigmáticas e intrigantes
    da literatura brasileira. Nas páginas deste romance,
    encontra-se a versão de um homem perturbado pelo ciúme, que
    revela aos poucos sua psicologia complexa e enreda o leitor
    em sua narrativa ambígua acerca do acontecimento ou não do
    adultério da mulher com olhos de ressaca, uma das maiores
    polêmicas da literatura brasileira. ",
    publisher: "Amazon",
    published_at: "21/06/2024",
    url_image: "https://m.media-amazon.com/images/I/61Z2bMhGicL._SL1360_.jpg"
  )

  it "date format must be changed to yyyy-MM-dd" do
    assert_equal(book[:published_at], Date.new(2024, 06, 21))
  end

  it "must not be created without an author" do
    book = Book.new(title: "book withdout author", publisher: "withdout author")
    expect(book).to be_invalid
  end

  it "must not be created without a title" do
    author = Author.where(name: "ewerton rosendo").first_or_create!
    book = Book.new(author: author, publisher: "withdout title")
    expect(book).to be_invalid
  end

  it "must create a book" do
    author = Author.where(name: "ewerton rosendo").first_or_create!
    book = Book.new(
      title: "rspec book",
      author: author,
      description: "rspec é a good thing to learn"
    )
    expect(book).to be_valid
  end
end
