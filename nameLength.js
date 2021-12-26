"use strict"

/*  const obj = {
    name: [], // ['name', length][]
    set name,
    get name,
  }

  console.log(obj.name)

  obj.name = 'Hovhannes, Sona';

  console.log(obj.name) // [['Hovhannes', 9], ['Sona', 4]]
*/

const obj = {
  _name: [],
  
  get name() {
    if(obj._name.length === 0) {
      return `Inside is empty`;
    }
    return obj._name;
  },
  set name(value) {
    const tmp = value.split(", ");
    for(let i = 0; i < tmp.length; i++) {
    obj._name.push([tmp[i], tmp[i].length]);
    }
    return obj._name;
  },
}

obj.name = "Hovhannes, Sona"

console.log(obj.name)
