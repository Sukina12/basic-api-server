'use strict';
const uuid = require('uuid').v4;

class Food {
  constructor() {
    this.db = [];
  }


  create(foodObj) {
    const food = {
      id: uuid(),
      data: foodObj,
    };
    this.db.push(food);
    return food;
  }

  read(id) {
    if (id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  update(id, foodObj) {
    for (let i = 0; i < this.db.length; i++) {
      if (this.db[i].id === id) {
        this.db[i].data = foodObj;
        return this.db[i];
      }
    }
  }

  delete(id) {
    this.db = this.db.filter(record => record.id !== id);
    return this.db;
  }
}

module.exports = Food;
