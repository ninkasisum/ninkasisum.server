function createGist(url, opts) {
    const params = {
        method: 'POST'
    };

    if(opts){
        params.body = JSON.stringify(opts);

        params.headers = new Headers();
        params.headers.append('Content-Type', 'application/json');
        params.headers.append("Content-Length", params.body.length.toString());

        params.credentials = 'include'
    } 

    fetch(url, params).then(response => {

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
            const difUserName = document.getElementById('dif-user-name')
    
            userName.innerText = user['Qt']['zW']
            difUserName.innerText = user['Qt']['zW']  
            userPhoto.src =  user['Qt']['cL']
        })
    }).catch((err)=>{console.log(JSON.stringify(err))})
}