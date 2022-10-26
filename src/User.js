//class User {
    // User code here

    
// create a scooter customer class 
class User {

  constructor (userName, passWord, age) {

      this._userName = userName
      this._passWord = passWord
      this._age = age
      this._userId = Math.floor(Math.random() * 1000)
  }

  get userId() {  
    
    return this._userId
   }

  get userName() { 
    
    return this._userName 
  }

  set userName (userName) { 
    
    this._userName = userName 
   }

  get passWord(){ 
    
    return this._passWord 
   }

  set passWord (passWord) { 
    
    this._passWord = passWord 
  }

  get age (){
    
    return this._age 
   }

  set age (age) { 
    
    this._age = age
  
  }


}

  
  module.exports = User
