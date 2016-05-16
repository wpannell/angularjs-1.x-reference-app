import angular from 'angular';

export const browseService = ($http) => {

  const get = (success, failure) => {
    $http.get('http://localhost:3000/0')
        .success(success)
        .error(failure);
  };

  return {
    get
  };
};

browseService.$inject = ['$http'];
