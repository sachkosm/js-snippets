modify in node_modules => node_modules\golden-layout\dist\goldenlayout.js
The offSet is read incorectly
====
		_$setSize: function (width, height) {
			if (width !== this.width || height !== this.height) {
				this.width = width;
				this.height = height;
				var cl = this._contentElement[0];
				var hdelta = cl.offsetWidth - cl.clientWidth;
				var vdelta = cl.offsetHeight - cl.clientHeight;
				this._contentElement.width(this.width - hdelta)
					.height(this.height - vdelta);
				this.emit('resize');
			}
		}

==============


change to 

		_$setSize: function (width, height) {
			if (width !== this.width || height !== this.height) {
				this.width = width;
				this.height = height;
				var cl = this._contentElement[0];
				var hdelta = cl.offsetWidth - cl.clientWidth;
				var vdelta = cl.offsetHeight - cl.clientHeight;
				this._contentElement.width(this.width - 2
					.height(this.height - 2);
				this.emit('resize');
			}
		}

=============
