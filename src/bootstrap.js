import faker from 'faker';

let products = '';

for (let i = 0; i < 4; i++){
  let name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

document.querySelector('#dev-product').innerHTML = products;
