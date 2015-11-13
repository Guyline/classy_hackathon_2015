angular.module("raffle")
  .factory("User", ["$log", "authService",
    function($log, authService) {
      function User() {

      }

      User.prototype.login = function() {
        authService.login(this).then(function(response) {
          $log.log(response);
        }, function(error) {
          $log.log(error);
        })
      };

      return User;
    }
  ])
