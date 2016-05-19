export const orderLink = function orderLink(scope) {
  let imageMap = {
    'CC9': './artifacts/redMKZ.png',
    'unfound': './artifacts/cat.png'
  };

  function buildImageUrl (order) {
    let salesCode = 'unfound';
    if (order &&
        order.vehicleSpecification &&
        order.vehicleSpecification.vehicleLine &&
        order.vehicleSpecification.vehicleLine.Code) {

      salesCode = order.vehicleSpecification.vehicleLine.Code;
    }
    return imageMap[salesCode];
  }

  scope.$watch('order', function(newValue, oldValue) {
    scope.image = buildImageUrl(newValue);
  });

};
