class open {
  constructor(write, author) {
    this_write = write;
    this_author = author;
  }
}

note = new open("note", "Oscar Nguyen");

document.writeln(note.write);
