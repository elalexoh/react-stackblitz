class Users{
  constructor(){
    this.users = [];
  }
  addUser(user){
    this.users.push(user);
  }
  removeUser(user){
    this.users = this.users.filter(currentUser => currentUser !== user);
  }
  // iterador
  [Symbol.iterator](){
    return {
    }
  }

}