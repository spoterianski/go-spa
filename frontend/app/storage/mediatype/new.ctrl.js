(function() {
    'use strict';
    angular.module('app.storage.mediatype')
        .controller('MediaTypeNewCtrl', ['$state', 'Flash', 'MediaType', MediaTypeNewCtrl]);

    function MediaTypeNewCtrl($state, Flash, MediaType) {
        var vm = this;
        vm.error = null;
        vm.mediatype = {};
        vm.save = function(valid) {
            MediaType.add(vm.mediatype)
                .then(function success(response) {
                    Flash.show('MediaType ' + vm.mediatype.name + ' created!');
                    $state.go('mediatype.list');
                })
                .catch(function error(response) {
                    vm.error = response;
                });
        }
    }
})();
