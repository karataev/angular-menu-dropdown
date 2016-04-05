
angular.module('app')

  .component('header', {
    templateUrl: 'header/header.html',
    controller: [function () {
      var vm = this;

      vm.items = [
        {
          title: 'Страны',
          content: 'header-countries'
        },
        {
          title: 'Ссылка на гугль',
          link: 'http://google.com'
        },
        {
          title: 'Элемент без контента'
        },
        {
          img: 'http://placekitten.com/100/50',
          content: 'header-cat'
        },
        {
          title: 'Еще один'
        }
      ];

      vm.countries = [
        {
          title: 'Бразилия'
        },
        {
          title: 'Болгария'
        }
      ]

      vm.toggleItemSelection = function (item) {
        vm.items.forEach(function (x) {
          if (x !== item) x.isActive = false;
        });
        item.isActive = !item.isActive;
      }
    }]
  })


