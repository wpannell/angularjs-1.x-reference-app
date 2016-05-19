function OrdersContainerController(ordersContainerService) {
  let ordersVm = this;
  ordersVm.total = 0;
  ordersVm.errorMessage = '';

  ordersVm.updateTotal = (orderList) => {
    ordersVm.orders = orderList.orders;
    ordersVm.total = orderList.orders.length;
  };

  ordersVm.updateErrorMessage = (errorMessage) => {
    ordersVm.errorMessage = errorMessage;
  };

  ordersVm.fetch = () => {
    ordersContainerService.fetch(ordersVm.updateTotal, ordersVm.updateErrorMessage);
  };

  ordersVm.fetch();
}

OrdersContainerController.$inject = ['ordersContainerService'];

export {OrdersContainerController};
