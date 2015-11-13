angular.module("raffle")
  .controller("mainCtrl", ["$log", "$rootScope", "$state",
    function($log, $rootScope, $state) {
      $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        $log.debug(error);
        $state.go('login');
      });
    }
  ])
