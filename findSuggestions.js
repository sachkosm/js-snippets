		function findSuggestions(input, items){


			var suggestions = {
				identical: [],
				similar: []
			};

			//find suggestions
			var regex = new RegExp(escapeString(input), "i");

			if (input.length > 0) {

				while( ((suggestions.identical.length) != settings.limit) && items.length != 0){

					var item = items.shift();

					if (item.indexOf(input) == 0) {
						suggestions.identical.push(item);
					} 
					else if (item.search(regex) == 0) {
						suggestions.similar.unshift(item);
					}
					else if(item.search(regex) !== -1){
						suggestions.similar.push(item);
					}

				}


			}

			if (suggestions.identical.length == settings.limit) {
				
				suggestions.similar = []; //remove the similar matches
			
			} 
			else {
				suggestions.similar = suggestions.similar.slice(0,(settings.limit - suggestions.identical.length));
			}

			return suggestions;

		}
