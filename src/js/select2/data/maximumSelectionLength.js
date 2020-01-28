define([

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.bind =
    function (decorated, container, $container) {
      var self = this;

      decorated.call(this, container, $container);

      container.on('select', function () {
        self._checkIfMaximumSelected();
      });
  };

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      decorated.call(self, params, callback);

      this._checkIfMaximumSelected();
  };

  MaximumSelectionLength.prototype._checkIfMaximumSelected =
    function (_, successCallback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength,
              skipClear: true,
              onTop: true
            }
          });
          return;
        }
        if (successCallback) {
          successCallback();
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
