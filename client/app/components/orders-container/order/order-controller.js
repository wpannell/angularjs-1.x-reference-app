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
    return null;
  };
}

export {OrderController};
