function ProductsController($http) {
  let vm = this;
  vm.title = 'hello world';

  $http.get('/products.json').then(
      response => { console.log(JSON.stringify(response.data)); }
  );
}

ProductsController.$inject = ['$http'];

export {ProductsController};


