angular.module("raffle")
  .factory("Raffle", ["$log", "raffleService",
    function($log, raffleService) {
      function Raffle(data) {
        if (typeof data !== "undefined") {
          this.id = data.id;
          this.campaign_id = data.campaign_id;
          this.user_id = data.user_id;
          this.start_time = new Date(data.start_time);
          this.end_time = new Date(data.end_time);
          this.price_per_entry = data.price_per_entry;
          this.status = data.status;
          this.created_at = data.created_at;
          this.updated_at = data.updated_at;
          this.prizes = data.prizes;
        } else {
          this.prizes = [];
        }
      }

      Raffle.prototype.save = function() {
        if (this.id) {
          raffleService.put(this).then(function(response) {
            $log.log(response);
          }, function(error) {
            $log.log(error);
          })
        } else {
          raffleService.post(this).then(function(response) {
            $log.log(response);
          }, function(error) {
            $log.log(error);
          })
        }
      };

      return Raffle;
    }
  ])
