function createGist(url, opts) {
    const method = 'POST'
    const body = JSON.stringify(opts);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Content-Length", body.length.toString());

    const credentials = 'include'

    fetch(url, {method,headers,body, credentials}).then(response => {

        // HTTP 301 response
        if (response.redirected) {
            window.location.href = response.url;
        }
    }).catch(function (err) {
        console.info(err + " url: " + url);
    });
}

function loadUserData(){
    let user;
    
    fetch(`${window.location.origin}/api/user`, {method: 'GET'}).then((response)=> {
        response.json().then(data => {
            const user = JSON.parse(data).user;
            const userName = document.getElementById('user-name')
            const userPhoto = document.getElementById('user-photo')
    
            userName.innerText = user['Qt']['zW']  
            userPhoto.src =  user['Qt']['cL']
        })
    }).catch((err)=>{console.log(JSON.stringify(err))})
}