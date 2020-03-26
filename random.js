let btn = document.querySelector('#btn')
// console.log(btn)
let img = document.querySelector('#user-image')
// console.log(img)
let email = document.querySelector("#email")
// console.log(email)
let city = document.querySelector("#city")
// console.log(city)
let username = document.querySelector('#username')
// console.log(username)
let fullName = document.querySelector("#fullName")
// console.log(fullName)

btn.addEventListener('click', function(){

    let url = "https://randomuser.me/api"

    
    fetch(url).then(function(data){
// console.log(data.json())
return data.json()
    }).then(function(data){
        let firstName = data.results[0].name.first;
        let lastName = data.results[0].name.last;

        let initials = firstName + " " + lastName
        let userInit = data.results[0].login.username
           let emailInit = data.results[0].email
           let userImg = data.results[0].picture.large // url to avatar
           let userCity = data.results[0].location.city


// // console.log(data.results[0].name) 
    fullName.textContent = initials;
email.textContent = emailInit;
username.textContent = userInit;
img.src = userImg
city.textContent = userCity;
    }).catch(function(error){
        console.log(error)
    })
})