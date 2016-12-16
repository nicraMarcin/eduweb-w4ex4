import * as express from 'express';
import * as Book from '../model/book';
import * as BooksModel from '../model/books';

export class Books {
    private bookList: BooksModel.Books;
    public static routes(): express.Router {
        let router: express.Router = express.Router();
        let booksRoute: Books = new Books();
        router.get('/books/', booksRoute.index.bind(booksRoute));
        router.post('/books/', booksRoute.create.bind(booksRoute));
        router.put('/books/:book_id', booksRoute.update.bind(booksRoute));
        router.delete('/books/:book_id', booksRoute.delete.bind(booksRoute));
        router.get('/books/:book', booksRoute.find.bind(booksRoute));
        router.post('/books/delete/:book_id', booksRoute.delete.bind(booksRoute));
        router.post('/books/update/:book_id', booksRoute.update.bind(booksRoute));
        return router;
    }

    constructor() {
        this.bookList = new BooksModel.Books([
            new Book.Book(1, 'In Search of Lost Time', 'Marcel Proust', 1913),
            new Book.Book(2, 'Ulysses', 'James Joyce', 1904),
            new Book.Book(3, 'Moby Dick', 'Herman Melville', 1851),
            new Book.Book(4, 'Nineteen Eighty Four', 'George Orwell', 1949)
        ])
    }

    public index(request: express.Request, response: express.Response) {
        response.json(this.bookList.list());
    }
    public create(request: express.Request, response: express.Response) {
        let bookTitle: string = request.body.book_title;
        let bookAuthor: string = request.body.book_author;
        let bookPublicationDate: number = request.body.book_pdate;
        if (!bookTitle) {
            response.status(500).send('Book title not found');
            return;
        }
        if (!bookAuthor) {
            response.status(500).send('Book author not found');
            return;
        }
        if (!bookPublicationDate) {
            response.status(500).send('Book publication date not found');
            return;
        }
        response.json(this.bookList.add(bookTitle, bookAuthor, bookPublicationDate));
    }
    public update(request: express.Request, response: express.Response)
    {
        let bookId: number = parseInt(request.params.book_id);
        let book: Book.Book = this.bookList.fetch(bookId);
        let bookTitle: string = request.body.book_title;
        let bookAuthor: string = request.body.book_author;
        let bookPublicationDate: number = request.body.book_pdate;

        if (!book) {
            response.status(404).send('Book not found');
            return;
        }

        if(bookTitle !== undefined)
        {
          book.setTitle(bookTitle);
        }
        if(bookAuthor !== undefined)
        {
          book.setAuthor(bookAuthor);
        }
        if(bookPublicationDate !== undefined)
        {
          book.setPublicationDate(bookPublicationDate);
        }

        response.json(book);
    }
    public delete(request: express.Request, response: express.Response) {
        let bookId: number = parseInt(request.params.book_id);
        let wasDeleted: Boolean = this.bookList.delete(bookId);

        if (!wasDeleted) {
            response.status(404).send('Book not found');
            return;
        }
        else
        {
          response.json({success: true});
        }

    }
    public find(request: express.Request, response: express.Response) {
        let bookQuery: string = request.params.book;
        let book: Book.Book = this.bookList.find(bookQuery);

        if (!book) {
            response.status(404).send('Book not found');
            return;
        }
        response.json(book);

    }
}
