class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this.title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  set isCheckedOut(checkedOut) {
    this.isCheckedOut = checkedOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    let summedRatings = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    return summedRatings / this._ratings.length;
  }

  addRating(rating) {
    if (typeof rating !== "number" || rating < 1 || rating > 5) {
      console.log("Please enter a number between 1 and 5.")
    } else {
        this._ratings.push(Math.floor(rating));
    }
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this.pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist, numberOfSongs) {
    super(title);
    this._artist = artist;
    this._numberOfSongs = numberOfSongs;
  }

  get artist() {
    return this._artist;
  }

  get numberOfSongs() {
    return this._numberOfSongs;
  }
}

//Adding a sample book, changing the checkout status and adding customer ratings.
const historyOfEverything = new Book("Bill Bryson", "A Short History Of Nearly Everything", 544);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything.isCheckedOut);

//Adding a sample film, changing the checkout status and adding customer ratings.
const speed = new Movie("Jan de Bont", "Speed", "116");
//speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());
console.log(speed.isCheckedOut);

//Adding a sample CD, changing the checkout status and adding customer ratings.
const unpluggedEricC = new CD("Unplugged", "Eric Clapton", 14);
unpluggedEricC.toggleCheckOutStatus();
unpluggedEricC.addRating(5);
unpluggedEricC.addRating(4);
unpluggedEricC.addRating(5);

console.log(unpluggedEricC.getAverageRating());
console.log(unpluggedEricC.isCheckedOut);
