Book.destroy_all
Author.delete_all

authorc1 = Author.create!(name: "Ewerton Rosendo", biography: "sudo apt install node yarn ruby rails gem")
authorc2 = Author.create!(name: "Davi Vieira", biography: "sudo windows ufrpe saudades ete na verdade nao")

book = Book.create!(title: "aprendendo go lang", description: "o metodo mais facil para aprender go lang é ..", published_at: Time.now, publisher: "Saraiva", author: authorc1)
book = Book.create!(title: "ruby do jeito mais dificil", description: "o metodo mais facil para aprender go lang é ..", published_at: Time.now, publisher: "Saraiva", author: authorc1)
book = Book.create!(title: "aprendendo cmo fazer cafe", description: "o metodo mais facil para aprender go lang é ..", published_at: Time.now, publisher: "Saraiva", author: authorc1)
book = Book.create!(title: "aaorebde a ficar maluco", description: "o metodo mais facil para aprender go lang é ..", published_at: Time.now, publisher: "Saraiva", author: authorc1)

book = Book.create!(title: "aprendendo cmo fazer cafe", description: "o metodo mais facil para aprender go lang é ..", published_at: Time.now, publisher: "Saraiva", author: authorc2)
book = Book.create!(title: "aaorebde a ficar maluco", description: "o metodo mais facil para aprender go lang é ..", published_at: Time.now, publisher: "Saraiva", author: authorc2)

puts "Table: Author, Size: #{Author.all.size}"
puts "Table: Book, Size: #{Book.all.size}"

Book.all.each do |book|
    puts "-----------------"
    puts "Title: #{book.title}"
    puts "description: #{book.description}"
    puts "Published_at: #{book.published_at}"
    puts "Publisher: #{book.publisher}"
    puts "Author: #{book.author.name}"
    puts "----------------"
end