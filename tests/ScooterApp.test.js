const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// create user instance

const User2 = new User ('Sam', 'Pass@word1', 44)

// create scooter instance 

const scooter3 = new Scooter('60mph', '77kg', '225mm', '£190 pounds')

// call ScooterApp static methods and tests here

const scooterApp1 = new ScooterApp('10', '26-10-2022', '08:00am', '17:00pm', User2.userName, scooter3.ScooterId)

describe (' Test scooterApp properties here', () => {

// test scooter hire duration

test ('can get hire duration', () => {
        expect(scooterApp1.hireDuration).toBe("10")
    })




})


// register user

// log in

// add scooter

// remove scooter
