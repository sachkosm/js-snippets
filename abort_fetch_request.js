https://stackoverflow.com/questions/31061838/how-do-i-cancel-an-http-fetch-request
https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
https://github.com/mo/abortcontroller-polyfill#readme

<script>
    // Create an instance.
    const controller = new AbortController()
    const signal = controller.signal

    /*
    // Register a listenr.
    signal.addEventListener("abort", () => {
        console.log("aborted!")
    })
    */


    function beginFetching() {
        console.log('Now fetching');
        var urlToFetch = "https://httpbin.org/delay/3";

        fetch(urlToFetch, {
                method: 'get',
                signal: signal,
            })
            .then(function(response) {
                console.log(`Fetch complete. (Not aborted)`);
            }).catch(function(err) {
                console.error(` Err: ${err}`);
            });
    }


    function abortFetching() {
        console.log('Now aborting');
        // Abort.
        controller.abort()
    }

</script>
