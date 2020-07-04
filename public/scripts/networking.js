function createGist(url, content) {
    const params = {
        method: 'POST'
    };

    if(content){
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
            alert('email ou senha incorretos');
        }
    }).catch(function (err) {
        console.info(err + " url: " + url);
    });
}

function loadUserData(){
    fetch(`${window.location.origin}/api/user`, {method: 'POST'})
    .then((response)=> {
        console.log(response)
    })
}

// const userName = document.getElementById('user-name')
// userName.innerText = user['Qt']['zW']
// const userPhoto = document.getElementById('user-photo')
// userPhoto.src =  user['Qt']['cL']
// const difUserName = document.getElementById('dif-user-name')
// difUserName.innerText = user['Qt']['zW']
// const difUserImg = document.getElementById('dif-user-img')
// difUserImg.src =  user['Qt']['cL']