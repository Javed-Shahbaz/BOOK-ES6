class Library {
  constructor() {
    this.bookList = [];
    this.add = (Obj) => {
      this.bookList.push(Obj);
    };
    this.remove = (Obj) => {
      this.bookList.splice(Obj, 1);
    };
  }
}

const library = new Library();
export default library;