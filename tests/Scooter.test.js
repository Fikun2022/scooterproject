const Scooter = require('../src/Scooter');
const User = require('../src/User');

//typeof scooter === object
describe('scooter object', () => {

  // //create 2 instance of escooter class  console log both

const scooter1 = new Scooter('100mph', '80kg', '220mm', '£120 pounds')
const scooter2 = new Scooter('90mph', '70kg', '245mm', '£150 pounds')

// test scooter1 max speed
test ('scooter1 max speed', () => {
  expect(scooter1.maxSpeed).toBe('100mph')
})
// test scooter1 weight

test ('scooter1 weight', () => {
  expect(scooter1.weight).toBe('80kg')
})

// test can set scooter2 wheel size

test('can can set scooter2 wheel size', () => {
scooter2.wheelSize = '250mm'
expect(scooter2.wheelSize).toBe('250mm')
})

// test can set scooter2 cost

test('can can set scooter2 cost', () => {
  scooter2.wheelSize = '£800 pounds'
  expect(scooter2.wheelSize).toBe('£800 pounds')
  })


});








// MY PREVIOUS CODE


// // Create instances of class and consume those classes 


// //create 2 instance of escooter class  console log both

// const escooter1 = new eScooter('100mph', '80kg', '220mm', '120 pounds')
// const escooter2 = new eScooter('100mph', '80kg', '220mm', '120 pounds')

// console.log(escooter1)
// console.log(escooter2)


// //create 2 instance of escooter customer & console log both

// const newCustomer1 = new ScooterCustomer ('Fikun Sam', 'K123G123')
// const newCustomer2 = new ScooterCustomer ('Somwya Joe', 'F123Y123')

// console.log(newCustomer1)
// console.log(newCustomer2)

// //call escooter Hire System access Hirescooter with dot notation 

// escooterHireSystem.hireScooter('3 days', '26-10-2022', '28-10-2022', newCustomer1.customerName, escooter1.eScooterId)


// //update eScooter record

// //escooterHireSystem.updateScooterRecord(escooterHireSystem.ehireScooter.eScooterHireId, escooterHireSystem.ehireScooter.hiredStatus) 

// // check avalaiblity of scooters 

// console.log(escooter1.isAvaliable);

// console.log(escooter2.isAvaliable);


