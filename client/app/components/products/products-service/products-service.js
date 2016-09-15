import angular from 'angular';

export const productsService = ($http, $mdDialog) => {
  const fetch = (success, failure) => {
    $http.get('/db.json')
        .success(response => {
          success(response.event);
        })
        .error(failure);
  };

  return {
    fetch
  };
};

productsService.$inject = ['$http', '$mdDialog'];
