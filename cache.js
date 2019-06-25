
var cache = {
    store: {},
    maxSize: 26214400, //(bytes) 25mb
    maxAge : 5400 * 1000, //(ms) 1 and a half hours
    cleanAfter: 7200 * 1000,//(ms) two hours
    cleanedAt: 0, //to be set dynamically
    clean: function (now) {
       if (now - this.cleanAfter > this.cleanedAt) {
        this.cleanedAt = now;
        that = this;
          Object.keys(this.store).forEach(function (file) {
            if (now > that.store[file].timestamp + that.maxAge) {
              delete that.store[file];      
            }
          });
      }
    }
  };
  
  
  	 fs.stat(f, function (err, stats) {
	        if (stats.size < cache.maxSize) {
	          var bufferOffset = 0;
	          cache.store[f] = {content: new Buffer(stats.size),
	                                     timestamp: Date.now() };
	          s.on('data', function (data) {
	            data.copy(cache.store[f].content, bufferOffset);
	            bufferOffset += data.length;
	          });
	        }  
	      });
  
  cache.clean(Date.now());
