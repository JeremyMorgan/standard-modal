/* modal.directive.js */

/**
* @desc General directive to create dynamic modals
* @example <div standardModal></div>
*/
angular
    .module('myApp')
    .directive('standardModal', standardModal);

function standardModal() {

    console.log("hi! your directive works");

    modalbody = "This is text"

  return {
		templateUrl: '/components/standard-modal/standard-modal.html'
  };
}
