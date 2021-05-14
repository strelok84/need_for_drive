const url='https://api-factory.simbirsoft.com/';
const apiUrl = 'https://api-factory.simbirsoft1.com/api/';

const request =(entity) => fetch(apiUrl+entity,{headers: {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b'}})

const listApi={
    getCity() {
        return request('db/city/');
      }
}    

export {listApi, url}
