function OrderController() {
  let orderVm = this;

  orderVm.labels = {
    vehicleLine: 'Vehicle Line',
    modelYear: 'Model Year',
    mpv: 'Model',
    paint: 'Paint',
    trim: 'Trim'
  };

  const IMAGE_MAP = {
    'CC9': 'img/redMKZ.png',
    'unfound': 'img/kitty.jpg'
  };

  orderVm.buildImageUrl = function (order) {
    let salesCode = 'unfound';
    if (order &&
        order.vehicleSpecification &&
        order.vehicleSpecification.vehicleLine &&
        order.vehicleSpecification.vehicleLine.Code) {

      salesCode = order.vehicleSpecification.vehicleLine.Code;
    }
    var result = IMAGE_MAP[salesCode] || 'img/kitty.jpg';
    return result;
  };
}

export {OrderController};
