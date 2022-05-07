import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 4; i++) {
    let name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
}

//Context/Situation where we are running the development in isolation.
//we are using our local html
//which definitely has ele with an ID specified
//and we want to render the element immediately
if(process.env.NODE_ENV === 'development'){
  const el = document.querySelector('#dev-product');
  if(el){
    mount(el);
  }
}

//context/situation where running in production / devlopment mode
//through the CONTAINER APP
// in which the remote doesnt doesn't sure if there is a ELEMENT with an ID
//we dont want to render the app immediately
export { mount };
