function BrowseController(browseService) {
  let browseVm = this;
  browseVm.total = 0;
  browseVm.errorMessage = '';

  browseVm.updateTotal = (ordersList) => {
    browseVm.total = ordersList.length;
  };

  browseVm.updateErrorMessage = (errorMessage) => {
    browseVm.errorMessage = errorMessage;
  };

  browseVm.fetch = () => {
    browseService.fetch(browseVm.updateTotal, browseVm.updateErrorMessage);
  };

  browseVm.fetch();
}

BrowseController.$inject = ['browseService'];

export {BrowseController};
