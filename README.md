# Bangalore-gbs-bootcamp

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/wpannell/angularjs-1.x-reference-app.git)

# angular.js-1.x-reference-app

##The design supports:##

* keeping track of the browser’s history stack;

* tab routing;

* drilling down cleanly from tabbed pages;

* crawling back up the history stack;

* popping up a dialog box;

* incorporating [Material Icons](https://design.google.com/icons/);

* deploying a configurable gauge component; and

* local, component-specific styles.

## Getting Started##

####Change your node version, clone the repo, install and run the tests:####

```
nvm use v4.2.4
git clone git@github.com:wpannell/angularjs-1.x-reference-app.git app
cd app
npm install
npm test
```

####Start the dev server and follow instructions:####

```
gulp
```

## Architecture##

####There is now a clear look of the app’s architecture:####

![component-based architecture](/design/architecture.png)

***

####The gauge component is configurable from the component’s controller that uses it:####


![component-based architecture](/design/configure-gauge.png)

***

![component-based architecture](/design/gauge.png)
&nbsp;

***

####The popup is invoked from the blue “eject” button:####

![component-based architecture](/design/popup.png)

***

####The popup is an ordinary component that can be tested as such:####

![component-based architecture](/design/popup-component.png)

***

####The 2 bottom-right buttons on the popup return the passed-in text when they are clicked:####

![component-based architecture](/design/popup-buttons.png)

***

####The ```popup.controller``` implements a standard ```cancel``` action and the click events, which pass the answer back to the ```$mdDialog.hide()``` function:####

![component-based architecture](/design/popup-buttons.png)

***

####The popup dialog is used by the cards component.  The controller imports what it needs from the popup component, and passes in the cards’ ```$element``` and the ```$mdDialog``` service into its constructor:####

![component-based architecture](/design/popup-dialog.png)

***

####The controller’s ```configurePopup()``` function prepares, invokes, and returns from the popup dialog:####

![component-based architecture](/design/configure-popup.png)

***

####The click ```$event``` is passed in from the DOM:####

![component-based architecture](/design/click-event.png)

***

####Slider navigation happens via the fast-forward and –reverse buttons:####

![component-based architecture](/design/card1.png)

***

![component-based architecture](/design/card3.png)

***

![component-based architecture](/design/card5.png)

***

####Navigation is controlled programmatically:####

![component-based architecture](/design/programmatic-navigation.png)

***

####The DOM is configured to call the ```onPrevious()``` and ```onNext()``` functions, and to set the ```isNextDisabled``` and ```isPreviousDisabled``` states:####

![component-based architecture](/design/prev-next.png)

***

####Finally, note how easy it is to use the [Material Icons](https://design.google.com/icons/) as the images – fast_rewind and fast_forward – on the buttons.####
