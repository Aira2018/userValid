var users = [
    {
        username : 'raj',
        password : '123'
    },
    {
        username : 'jon',
        password : '123'
    },
    {
        username : 'andrai',
        password : '123'
    }
    
];
var posts = [
    {
        user : 'avyas',
        status : 'going to the party'
    },
    {
        user : 'sam',
        status : 'finsihing up the projects'
    }
];

function isValid(username, password){
    for(var i=0; i< users.length; i++){
        if(username === users[i].username && password === users[i].password){
            return true;
        }
    }
    return false;
}

function signIn(username, password){
    if(isValid(username, password)){
        console.log(posts);
    }
    else{
        alert('try again');
    }
  

}
var usernamePrompt = prompt('username please!!');
var passwordPrompt = prompt('password please');
signIn(usernamePrompt, passwordPrompt)
