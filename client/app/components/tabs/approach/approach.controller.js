let ApproachController = ($scope, $http) => {
  $http.get('/db.json')
      .success(response => {
        console.log(response);
      })
      .error(console.log('error'));
};

ApproachController.$inject = ['$scope', '$http'];

export {ApproachController};


