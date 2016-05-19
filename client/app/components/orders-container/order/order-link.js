export const orderLink = function orderLink(scope) {
  let imageMap = {
    'CC9': 'img/redMKZ.png',
    'unfound': 'img/kitty.jpg'
  };

  function buildImageUrl (order) {
    let salesCode = 'unfound';
    if (order &&
        order.vehicleSpecification &&
        order.vehicleSpecification.vehicleLine &&
        order.vehicleSpecification.vehicleLine.Code) {

      salesCode = order.vehicleSpecification.vehicleLine.Code;
    }
    return imageMap[salesCode] || 'img/kitty.jpg';
  }

  scope.$watch('order', function(newValue, oldValue) {
    scope.image = buildImageUrl(newValue);
  });
};
