const fetch = require("cross-fetch");
const IMAGE_URL = "https://api-factory.simbirsoft1.com/";
const APIURL = "https://api-factory.simbirsoft1.com/api";

async function getData(url) {
  let request = () => {
    return fetch(url, {
      headers: { "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b" },
    });
  };
  let response = await request(url);
  let data = await response.json();  
  return data;
}

const data = {
  getCity() {
    return getData(APIURL + "/db/city/");
  },
  getPoint(){
    return getData(APIURL + '/db/point/');
  },
  getCar(){
    return getData(APIURL + '/db/car/');
  },
  getCategory(){
    return getData(APIURL + '/db/category/');
  },
  getRate(){
    return getData(APIURL + '/db/rate');
  },
  getOrderStatus(){
    return getData(APIURL + '/db/orderStatus');
  },
  getOrder(id){
    return getData(APIURL + `/db/order/${id}`);
  }
};

export { data };
