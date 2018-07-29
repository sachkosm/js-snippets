const fetch = require("node-fetch"); // Tested on Node side
const R = require("ramda");

const syncData = function (data){
    console.log(data)
}

const dataResult = function () {
    //Executes multiple fetch requests in parallel
    //Retries every request up to Num_RETRIES if response status is not 200
    //Combines the response of all the fetch data in one array
    //Sort the data by username ( nested property) using ramda
    //At the end calls syncData where we can use the result data as we wish

    //Config section
    const arrCombinedResult = [];
    var sortedData;
    const urls = Array(35);
    urls.fill('https://randomuser.me/api/') // using user random emulation
    const NUM_RETRIES = 3;

    loadData()

    async function loadData() {
        const promises = urls.map((url, index) => fetchURL(url, index));
        await Promise.all(promises)
            .then(() => {
                sortedData = R.sortBy(R.path(['login', 'username']))(arrCombinedResult); //sort by nested level
                syncData(sortedData)
            })
            .catch(error => console.log(error));

    }

    async function fetchURL(url, requestNumber) {
        let i;

        for (i = 0; i < NUM_RETRIES; ++i) {
            try {
                await fetch(url)
                    .then(function (response) {
                        //console.log("request number: " + requestNumber)
                        //console.warn(response.status)
                        if (response.status !== 200) {
                            for (var r of response.headers.entries()) {
                                //console.log(r[0] + ': ' + r[1])
                                if (r[0] == 'content-type' && r[1] == 'text/html') {
                                    responseType = 'html'
                                    //response.text()
                                    //    .then((data) => console.log(data))
                                    //console.log('Html:' + response.text()) // Html that has been returned
                                    return null;
                                }
                            }
                        } else {
                            var s = response.json(); // json retuns a promise, use then to read the result
                            return s;
                        }
                    })
                    .then((myJson) => {
                        if (myJson) {
                            arrCombinedResult.push(myJson.results[0])
                        }
                    })
                //.catch(error => console.log(error)); // allow the error to propagate
                break;
            } catch (err) { console.log(err) }
        }
        //console.log(i); // Number of retries per request
    }
    
}

dataResult()