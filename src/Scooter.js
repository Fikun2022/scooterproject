//class Scooter {
  // scooter code here
// create an electric scooter class

class Scooter {

  constructor (maxSpeed, weight, wheelSize, cost) {

      this._maxSpeed = maxSpeed
      this._weight = weight
      this._wheelSize = wheelSize
      this._cost = cost
      this._ScooterId = Math.floor(Math.random() * 100)
      this._isAvaliable = 'True'

  }

  get ScooterId() {  
    
    return this._ScooterId 
  }

  get isAvaliable() {
    
    return this._isAvaliable 
  }

  set maxSpeed(maxSpeed) {
    
    this._maxSpeed = maxSpeed
    }

  get maxSpeed(){
     return this._maxSpeed 
     }

  set weight (weight) {  
    
    this._weight = weight
     }
  
  get weight() { 
    return this._weight 
  }

  set wheelSize(wheelSize) { 
    
    this._wheelSize = wheelSize 
  
  }

  get wheelSize() { 
    
    return this._wheelSize 
  }  

  set cost(cost) { 
    
    this._cost = cost
  
  }

  get cost() { 
    
    return this._cost 
  
  }  


}



module.exports = Scooter;
