function createGist(opts) {           
    return fetch( window.location.origin + '/api/login', {
        method: 'post',
        body: JSON.stringify(opts)
    });
}