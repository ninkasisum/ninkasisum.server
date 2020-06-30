/*//Autenticar Google Account
function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
}*/
//nav active
const active_feed = document.querySelector('.feed')
const active_line =  document.querySelector('.line')
active_feed.classList.add('active')
active_line.classList.add('active')

//likezinho show mlk
const like = document.querySelector('.fa-heart')
var button_like = Boolean(false)

like.addEventListener('click', ()=>{  
    if(!button_like){
        like.classList.remove('far')
        like.classList.add('fas')
        button_like = true
    }  
    else{
        like.classList.add('far')
        like.classList.remove('fas')
        button_like = false
    } 
})
