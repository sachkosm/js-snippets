

var testIfAllstyleSheetsAreloaded = function () {

    //When this function is executed the callBack function will be executed every 10 milliseconds
    var interval = setInterval(function () {
        //Get the styleSheetNodes using jQuery
        var stylesheetNodes = $('link[rel=stylesheet]'), i;

        //Go over all styleSheets
        for (i = 0; i < stylesheetNodes.length; i++) {
            //Check if we still have any not loaded styleSheet
            if (stylesheetNodes[i].sheet === null) {
                //If there is still some that is not loaded - then exit the function but - keep the Interval to execute again after 10 milliseconds
                return;
            }
        }

            //If we did not exit the function - it means all the styeSheets are now loaded
            //Then clear the Interval
        clearInterval(interval);
        //Execute the action that was waiting all the styleSheets to be loaded.
        this._createGrid();

        //Bind the function that will be execute by the Interval to the current "this"
    }.bind(this), 10);


};