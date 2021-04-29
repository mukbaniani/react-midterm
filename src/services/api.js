const baseUrl = 'https://fakerapi.it/api/v1/companies?_quantity=';
export class API_SERVICE {
  static getPosList({ number, callback }) {
    fetch(`${baseUrl}${number}`)
      .then((response) => response.json())
      .then((result) => {
        callback(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.trace(error);
      });
  }
}

export default API_SERVICE;
