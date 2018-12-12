let interceptors = [];

function interceptor(fetch, ...args) {
    const reversedInterceptors = interceptors.reduce((array, interceptor) => [interceptor].concat(array), []);
    let promise = Promise.resolve(args);

    // Register request interceptors
    reversedInterceptors.forEach(({ request, requestError }) => {
        if (request || requestError) {
            promise = promise.then(args => request(...args), requestError);
        }
    });

    // Register fetch call
    promise = promise.then(args => fetch(...args));

    // Register response interceptors
    reversedInterceptors.forEach(({ response, responseError }) => {
        if (response || responseError) {
            promise = promise.then(response, responseError);
        }
    });

    return promise;
}

function attach(env) {
    // Make sure fetch is avaibale in the given environment
    if (!env.fetch) {
        try {
            require('whatwg-fetch');
        } catch (err) {
            throw Error('No fetch avaibale. Unable to register fetch-intercept');
        }
    }
    env.fetch = (function (fetch) {
        return function (...args) {
            console.warn('intercepted')
            return interceptor(fetch, ...args);
        };
    })(env.fetch);

    return {
        register: function (interceptor) {
            interceptors.push(interceptor);
            return () => {
                const index = interceptors.indexOf(interceptor);
                if (index >= 0) {
                    interceptors.splice(index, 1);
                }
            };
        },
        clear: function () {
            interceptors = [];
        }
    };
}

export default attach(window) // or "global" for node

// Usage:
// import fetchIntercept from './interceptor'
// fetchIntercept.register({
    // request: function (url, config) {
    //     // Modify the url or config here
    //     url = url + "?INTERCEPTED"
    //     let { headers } = config
    //     config = { ...config, headers: { ...headers, 'Accept-Language': 'en-US,en;q=0.7' } }
    //     return [url, config];
    // },

//     requestError: function (error) {
//         // Called when an error occured during another 'request' interceptor call
//         return Promise.reject(error);
//     },

//     response: function (response) {
//         // Modify the reponse object
//         return response;
//     },

//     responseError: function (error) {
//         // Handle an fetch error
//         return Promise.reject(error);
//     }
// });
