'use strict';
const uuid = require('uuid').v4;

class Clothes {
  constructor() {
    this.db = [];
  }


  create(clothesObj) {
    const clothes = {
      id: uuid(),
      data: clothesObj,
    };
    this.db.push(clothes);
    return clothes;
  }

  read(id) {
    if (id) {
      return this.db.find (record => record.id === id);
    } else {
      return this.db;
    }
  }

  update (id,clothesObj){
    for (let i=0; i<this.db.length; i++){
      if (this.db[i].id === id){
        this.db[i].data = clothesObj;
        return this.db[i];
      }
    }
  }

  delete (id){
    this.db = this.db.filter (record => record.id !== id);
    return this.db;
  }
}

module.exports = Clothes;
