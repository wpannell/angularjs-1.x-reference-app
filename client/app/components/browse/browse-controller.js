function BrowseController(browseService) {
  let browseVm = this;
  browseVm.total = 0;
  browseVm.errorMessage = '';

  browseVm.updateTotal = (count) => {
    browseVm.total = count;
  };

  browseVm.updateErrorMessage = (errorMessage) => {
    browseVm.errorMessage = errorMessage;
  };

  browseVm.fetch = () => {
    browseService.fetch(browseVm.updateTotal, browseVm.updateErrorMessage);
  };
}

BrowseController.$inject = ['browseService'];

export {BrowseController};
