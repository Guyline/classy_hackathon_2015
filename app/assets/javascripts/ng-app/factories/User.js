angular.module("raffle")
  .factory("User", ["$log", "authService",
    function($log, authService) {
      function User(username, password) {
        this.username = username;
        this.password = password;
      }

      User.prototype.login = function() {
        authService.login(this).then(function(response) {
          $log.log(response);
        }, function(error) {
          $log.log(error);
        });
      };

      User.prototype.logout = function() {
        authService.logout(this).then(function(response) {
          $log.log(response);
        }, function(error) {
          $log.log(error);
        })
      };

      return User;
    }
  ])
