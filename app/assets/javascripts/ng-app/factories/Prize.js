angular.module("raffle")
  .factory("Prize", ["$log", "prizeService", "organizationService",
    function($log, prizeService, organizationService) {
      function Prize(data) {
        if (typeof data !== "undefined") {
          this.name = data.name;
          this.tier = data.tier;
          this.image_url = data.image_url;
          this.description = data.description;
        }
      }

      Prize.prototype.save = function() {
        if (this.id) {
          prizeService.put(this).then(function(response) {
            $log.log(response);
          }, function(error) {
            $log.log(error);
          })
        } else {
          organizationService.postPrize(34, this).then(function(response) {
            $log.log(response);
          }, function(error) {
            $log.log(error);
          })
        }
      };

      return Prize;
    }
  ])
