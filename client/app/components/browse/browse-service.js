
export const browseService = ($http) => {

  const fetch = (success, failure) => {
    $http.get('http://localhost:3000/0')
        .success(success)
        .error(failure);
  };

  return {
    fetch
  };
};

browseService.$inject = ['$http'];
