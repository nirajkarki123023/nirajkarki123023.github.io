const jsonData = `[
    {
      "title": "The Stand",
      "author": "Stephen King",
      "price": 19.99,
      "image": "TheStand.webp"
    },
    {
      "title": "Jurassic Park",
      "author": "Michael Crichton",
      "price": 8.99,
      "image": "JurassicPark.webp"
    },
    {
      "title": "Killing Floor",
      "author": "Lee Child",
      "price": 11.99,
      "image": "KillingFloor.webp"
    }
  ]`;
  
  const mediaItems = JSON.parse(jsonData);
  
  class Book {
    #price;
  
    constructor(title, author, price, image) {
      this.title = title;
      this.author = author;
      this.image = image;
      this.price = price;
    }
  
    get price() {
      return this.#price;
    }
  
    set price(value) {
      this.#price = value < 0 ? 0 : value;
    }
  
    toString() {
      return `${this.title} by ${this.author} - $${this.price.toFixed(2)}`;
    }
  
    createHTMLElement() {
      const container = document.createElement("div");
  
      const img = document.createElement("img");
      img.src = this.image;
      img.alt = this.title;
      img.width = 150;
  
      const titleEl = document.createElement("h2");
      titleEl.textContent = this.title;
  
      const authorEl = document.createElement("p");
      authorEl.textContent = `Author: ${this.author}`;
  
      const priceEl = document.createElement("p");
      priceEl.textContent = `Price: $${this.price.toFixed(2)}`;
  
      container.appendChild(img);
      container.appendChild(titleEl);
      container.appendChild(authorEl);
      container.appendChild(priceEl);
  
      return container;
    }
  }
  
  const mediaContainer = document.getElementById("media-container");
  
  mediaItems.forEach(item => {
    const book = new Book(item.title, item.author, item.price, item.image);
    const mediaElement = book.createHTMLElement();
    mediaContainer.appendChild(mediaElement);
  });
  