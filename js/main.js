// for (key in vergilSparda) {
//   console.log(`
//     Key = ${key}
//     Value = ${vergilSparda[key]}
//     dataType = ${typeof vergilSparda[key]}`);
// }

const textProperties = {
  fontSize: "24px",
  color: "turquoise",
  fontStyle: "Roboto",
  backGroundColor: "white",
};

const car = {
  brand: "Reno",
  model: "Megane 2",
  engine: "petrol",
  horsepower: 163,
  maximumSpeed: 160,
};

const vergilSparda = {
  firstName: "Vergil",
  secondName: "Sparda",
  job: "Alpha and Omega",
  age: 500,
  favWeapon: "Yamato",
  showInfo() {
    return this;
  },
};

const keys = Object.keys(vergilSparda);
// console.log(keys);
// console.log(typeof keys);
// console.log("============");
const values = Object.values(vergilSparda);
// console.log(values);
// console.log(typeof values);
// console.log("============");
const items = Object.entries(textProperties);
console.log(items);
// console.log(typeof entries);
console.log("============");
// for (const key of keys) {
//   console.log(`Value = ${vergilSparda[key]}`);
// }

for (const item of items) {
  const key = item[0];
  const value = item[1];

  console.log(`
    Поточний Ключ 
    &${key}&
     : 
     Поточне Значення&
     ${value}&`);
}
