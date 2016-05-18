function OrderController() {
  let orderVm = this;
  orderVm.labels = {
    vehicleLine: 'Vehicle Line',
    modelYear: 'Model Year',
    mpv: 'Model',
    paint: 'Paint',
    trim: 'Trim'
  };

  orderVm.buildImageUrl = () => {
    let imageUrls = {
      'CC9': './artifacts/redMKZ.png'
    };

    let vlCode;
    let order = orderVm.order;
    if (order.vehicleSpecification && order.vehicleSpecification.vehicleLine) {
        vlCode = order.vehicleSpecification.vehicleLine.Code;
    }

    return imageUrls[vlCode];
  };
}

export {OrderController};
