require 'rails_helper' 
describe Book do 

author = Author.find_or_create_author("Machado de Assis")
book = Book.new(
    title: "Dom Casmurro", 
    author: author, 
    description: "Em Dom Casmurro, o narrador Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história do amor e das desventuras que viveu com Capitu, uma das personagens mais enigmáticas e intrigantes da literatura brasileira. Nas páginas deste romance, encontra-se a versão de um homem perturbado pelo ciúme, que revela aos poucos sua psicologia complexa e enreda o leitor em sua narrativa ambígua acerca do acontecimento ou não do adultério da mulher com olhos de ressaca, uma das maiores polêmicas da literatura brasileira. ",
    publisher: "Amazon",
    published_at: "21/06/2024",
    url_image: "https://m.media-amazon.com/images/I/61Z2bMhGicL._SL1360_.jpg"
        )


        it "Book's author must be in downcase" do
    assert_equal(author[:name], "machado de assis")
end

it "date format must be changed to yyyy-MM-dd" do
    assert_equal(book[:published_at], Date.new(2024, 06, 21))
end

 it "must not be created without an author" do
    book = Book.new(:title => "book withdout author", :publisher => "withdout author")
    expect(book).to be_invalid
 end
 
 it "must not be created without a title" do
    author = Author.find_or_create_author("ewerton rosendo")
    book = Book.new(:author => author, :publisher => "withdout title")
    expect(book).to be_invalid
 end

 it "must create a book" do
    author = Author.find_or_create_author("ewerton rosendo")
    book = Book.new(
        title: "rspec book", 
        author: author,
        description: "rspec é a good thing to learn"
        )
    expect(book).to be_valid
 end




end