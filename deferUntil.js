//Wait for the DOM to be completely rendered again after I've manipulated the DOM with Javascript?

Function.prototype.deferUntil = function(condition, timeLimit) {
  var ret = condition();

  if (ret) {
      this(ret);
      return null;
  }

  var self = this, interval = null, time = ( + new Date());
  interval = setInterval(function() {
      ret = condition();
      if (!ret) {
          if (timeLimit && (new Date() - time) >= timeLimit) {
              // Nothing
          } else {
              return;
          }
      }
      interval && clearInterval(interval);
      self(ret);
  }, 20);

  return interval;
};

//Usage:

(function() {
    console.log('Next page loaded');
}).deferUntil(function() {
    return $('#nextDiv').length > 0;
}, 3000);
