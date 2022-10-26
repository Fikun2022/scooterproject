const User = require('./User');
const Scooter = require('./Scooter');

// creat an electric scooter hire system static class

class ScooterApp {

  constructor (hireDuration, hireDate, startTime, endTime, customerName, ScooterHireId) {

    this._hireDuration = hireDuration
    this._hireDate = hireDate
    this._startTime = startTime
    this._endTime = endTime
    this._customerName = customerName
    this._ScooterHireId = ScooterHireId

  }
    get hireDuration() { 
      
      return this._hireDuration 
    
    }

    set hireDuration (hireDuration) { 
      
      this._hireDuration = hireDuration 
     }

    get hireDate() { 
       return this._hireDate 
      
      }
  
    set hireDate (hireDate) { 
      
      this._hireDate = hireDate 
     }

    get startTime() {  
      
      return this._startTime
    
    }
  
    set startTime (startTime) { 
      
      this._startTime = startTime 
     }

    get endTime() { 

       return this._endTime
      
      }
  
    set endTime (endTime) { 
      
      this._endTime = endTime 
     }

    get customerName() {  
      return this._customerName
    
    }
  
    set customerName (customerName) { 
      
      this._customerName = customerName 
    
    }

    get ScooterHireId() {  
      
      return this._ScooterHireId 
    }
  
    set ScooterHireId(ScooterHireId) {
       this._ScooterHireId = ScooterHireId 
       }

}

 function hireScooter (hireDuration, hireDate, startTime, endTime, customerName, ScooterHireId) {
    
     
      return (hiredStatus = 'avaliable')
  }

 function updateScooterRecord(ScooterHireId){

   for (const scooter in Scooter) {
  
   if(scooter.ScooterId == ScooterHireId) {
    
  scooter.hiredStatus = 'false'

      
                }
   
             }
          }


       
    

// eScooterAvalability(eScooterId)
// {
//     // check avaliable scooter based on number false eScooterId
// }

// eScooterHealthCheck(eScooterId) {

//     // check health status of scooter if its fit to be hire
// }

// // class scooter customer 

// class customer {


// }

//}

module.exports = ScooterApp;


