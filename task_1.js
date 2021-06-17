function getKeysValues(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`Ключ - ${key}, значение - ${obj[key]}`);
    }
  }
}

let obj = {
    a: 1,
    b: 2,
    c: 3
};

getKeysValues(obj);