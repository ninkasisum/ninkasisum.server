const { response } = require("express");

function createGist(url, content) {
    const params = {
        method: 'POST'
    };

    if (content) {
        params.body = JSON.stringify(content);

        params.headers = new Headers();
        params.headers.append('Content-Type', 'application/json');

        params.credentials = 'include'
    }

    fetch(url, params).then(response => {

        // HTTP 301 response
        if (response.redirected) {
            window.location.href = response.url;
        }

        // HTTP 404 response
        if (response.status === 404) {
            alert('Email ou Senha incorretos!');
        }
    }).catch(function (err) {
        console.info(err + " url: " + url);
    });
}

async function loadUserData() {
    return await new Promise((resolve, reject) => {
        fetch(`${window.location.origin}/api/user`, { method: 'POST' })
            .then(response => response.json())
            .then(resolve)
    })
}