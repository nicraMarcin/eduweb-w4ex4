export class Book {
    private id: number;
    constructor(id: number, public title: string, public author: string, public publicationDate: number) {
        this.id = id;
    }
    public getId() {
        return this.id;
    }
    public getTitle() {
        return this.title;
    }
    public getAuthor() {
        return this.author;
    }
    public getPublicationDate() {
        return this.publicationDate;
    }
    public setTitle(title: string)
    {
      this.title = title;
    }
    public setAuthor(author: string)
    {
      this.author = author;
    }
    public setPublicationDate(publicationDate: number)
    {
      this.publicationDate = publicationDate;
    }
}
