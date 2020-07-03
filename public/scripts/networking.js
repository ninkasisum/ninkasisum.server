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
    }).catch(function (err) {
        console.info(err + " url: " + url);
    });
}

function loadUserData(config){
    let user;
    
    fetch(`${window.location.origin}/api/user`, {method: 'GET'}).then((response)=> {
        response.json().then(data => {
            const user = JSON.parse(data).user;

            const keys = Object.keys(config);
            keys.forEach((key) => {
                const element  = document.getElementById(key);
                const prop = config[key].prop;
                const path = config[key].path;

                let value = user;
                path.forEach((p) => {
                    value = value[p];
                })

                element[prop] = value;
            })
        })
    }).catch((err)=>{console.log(JSON.stringify(err))})
}

// const userName = document.getElementById('user-name')
// userName.innerText = user['Qt']['zW']
// const userPhoto = document.getElementById('user-photo')
// userPhoto.src =  user['Qt']['cL']
// const difUserName = document.getElementById('dif-user-name')
// difUserName.innerText = user['Qt']['zW']
// const difUserImg = document.getElementById('dif-user-img')
// difUserImg.src =  user['Qt']['cL']