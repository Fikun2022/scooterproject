const User = require('../src/User');

// User tests here


describe ('Test first user properties here', () => {
  
 // create a new instance of User

const User1 = new User ('Fikun', 'Pass@word1', 40)

// test username

test ('can get firstuser username', () => {
        expect(User1.userName).toBe('Fikun')
    })

    // test password
    
test('can set firstuser password', () => {

    User1.passWord = 'Pass@word1'
    expect(User1.passWord).toBe('Pass@word1')
    })


// test age
    test('can set firstuser age', () => {
        User1.age = 40
        expect(User1.age).toBe(40)
        })
})


