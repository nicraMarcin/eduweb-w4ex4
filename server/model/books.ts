import * as BookModel from './book'

export class Books {
    private booksList: Array<BookModel.Book>;
    constructor(books: Array<BookModel.Book> = []) {
        this.booksList = new Array<BookModel.Book>();
        books.forEach(
            (book) => this.booksList.push(book)
        );
    }
    public list(): Array<BookModel.Book> {
        return this.booksList;
    }
    public add(bookTitle: string, bookAuthor: string, bookPublicationDate: number): Array<BookModel.Book> {

        let bookIds: Array<number> = this.booksList.map(
            (book) => book.getId()
        );
        let bookId: number = Math.max(...bookIds) + 1;

        let book = new BookModel.Book(bookId, bookTitle, bookAuthor, bookPublicationDate);

        this.booksList.push(book);
        return this.booksList;
    }
    public delete(bookId: number): Boolean
    {
      let deleted: Boolean = false;
      this.booksList = this.booksList.filter(
        (book: BookModel.Book) => {
          deleted = deleted || book.getId() === bookId;
          return book.getId() !== bookId
        }
      )
      return deleted;
    }
    public fetch(bookId: number): BookModel.Book {
        return bookId && this.booksList.filter(
            (book: BookModel.Book) => book.getId() === bookId
        ).shift();
    }
    public find(bookQuery: string): BookModel.Book {
      let bookId: number = parseInt(bookQuery);
      bookQuery = bookQuery.toLowerCase();
      return this.booksList.filter(
          (book: BookModel.Book) => book.getId() === bookId
          || book.getTitle().toLowerCase() === bookQuery
          || book.getAuthor().toLowerCase() === bookQuery
      ).shift();
    }
}
