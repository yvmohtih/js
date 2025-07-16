function SetUsername(username){
    // complex db calls
    this.username = username
}

function createUser(username,email,password){
    SetUsername.call(this,username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@gbf.con","123");
console.log(chai);

