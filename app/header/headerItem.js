
angular.module('app')

  .component('headerItem', {
    templateUrl: 'header/header-item.html',
    require: {
      parent: '^header'
    },
    bindings: {
      data: '='
    },
    controller: ['$window', function ($window) {
      var vm = this;
      vm.data.isActive = false;

      vm.clickHandler = function () {
        if (vm.data.link) {
          $window.location.href = vm.data.link;
        }
        vm.parent.toggleItemSelection(vm.data);
      }
    }]
  })

