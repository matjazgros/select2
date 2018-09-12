define([

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;

        decorated.call(self, params, callback);

        if (self.maximumSelectionLength > 0 && count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength,
              skipClear: true,
              onTop: true
            }
          });
        }
      });
  };

  MaximumSelectionLength.prototype.unselect =
    function (decorated, params, callback) {
      var self = this,
        count;

      this.current(function (currentData) {
        count = currentData != null ? currentData.length : 0;
      });

      if (self.maximumSelectionLength > 0 && count == self.maximumSelectionLength) {
        self.trigger('results:hidemessages');
      }
      decorated.call(self, params, callback);

    };

  MaximumSelectionLength.prototype.select =
    function (decorated, params, callback) {
      var self = this,
        count;

      this.current(function (currentData) {
        count = currentData != null ? currentData.length : 0;
      });

      if (self.maximumSelectionLength > 0 && count >= self.maximumSelectionLength) {
        self.$element.trigger('custom.onMaximumSelectionLengthExceeded');
        return;
      } else {
        decorated.call(self, params, callback);
      }

  };

  return MaximumSelectionLength;
});
