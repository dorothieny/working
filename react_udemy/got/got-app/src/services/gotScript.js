export default class GotService {
  constructor() {
      this._apiBase = 'https://www.anapioficeandfire.com/api';
  }

  getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`);
      }
      return await res.json();
  }

  getAllBooks = async() => {
    const books = await this.getResource(`/books/`);
     return books.map(item => this._resetBook(item));
     }
 
  
  getBook = async(id) => {
      const book = await this.getResource(`/books/${id}`);
      return this._resetBook(book);
  }
  
  getAllCharacters = async() =>{
     const characters = await this.getResource(`/characters?page=5&pageSize=10`);
      return characters.map(item => this._resetChar(item));
      }
  
  getCharacter = async(id) => {
      const character = await this.getResource(`/characters/${id}`);
      return this._resetChar(character);
  }
  
  getAllHouses = async() => {
    const res = await this.getResource(`/houses/`);
    return res.map(item => this._resetBook(item));
  }
  
 getHouse = async(id) => {
      const item = await this.getResource(`/houses/${id}`);
      return this._resetHouse(item);
  }

  
  isSet(data) {
    if (data) {
        return data
    } else {
        return '___'
    }
}

   exactId =(item)=>{
    const reg = /\d/gi;
    const red = item.url.match(reg);
    const id = red.join('');
    return id
   }

  _resetChar =(char)=>{
    char = {
        id: this.exactId(char),
        name: this.isSet(char.name),
        gender: this.isSet(char.gender),
        born: this.isSet(char.born),
        died: this.isSet(char.died), 
        culture: this.isSet(char.culture)
    }
    return char
  }

  _resetBook =(book)=>{
    book = {
        id: this.exactId(book),
        name: this.isSet(book.name),
        numberOfPages: this.isSet(book.numberOfPages),
        publisher: this.isSet(book.publisher),
        released:this.isSet(book.released) 
    }
    return book
  }
  _resetHouse =(house)=>{
    house = {
        id: this.exactId(house),
        name: this.isSet(house.name),
        region: this.isSet(house.region),
        words: this.isSet(house.words),
        titles: this.isSet(house.titles),
        overlord: this.isSet(house.overlord),
        ancestralWeapons:this.isSet(house.ancestralWeapons)
    }
    return house
  }

}