angular.module("raffle")
  .factory("Prize", ["$log", "authService",
    function($log, prizeService) {
      function Prize(data) {
        this.name = data.name;
        this.tier = data.tier;
        this.image_url = data.image_url;
        this.description = data.description;
      }

      Prize.prototype.save = function() {
        if (this.id) {
          prizeService.put(this).then(function(response) {
            $log.log(response);
          }, function(error) {
            $log.log(error);
          })
        } else {
          prizeService.post(this).then(function(response) {
            $log.log(response);
          }, function(error) {
            $log.log(error);
          })
        }
      };

      return User;
    }
  ])
