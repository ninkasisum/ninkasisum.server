function createGist(url, opts) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(opts)
    }).then(response => {


        // HTTP 301 response
        if (response.redirected) {
            window.location.href = response.url;
        }
    }).catch(function (err) {
        console.info(err + " url: " + url);
    });
}