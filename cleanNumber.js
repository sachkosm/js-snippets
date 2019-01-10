const cleanNumber = function (value) {
            if (typeof value === 'string') {
                value = parseInt(value);
            }
            if (typeof value === 'number') {
                value = Math.floor(value);
            }
            else {
                value = null;
            }
            return value;
        };
