const { user } = require('../../src/app/models')

describe('Auth', () => {
  it('should create a user', async () => {
    const userName = 'some_user_name_here'
    const newUser = await user.create({
      username: userName,
      password_hash: 'password'
    })

    console.log('Newly created user', newUser)

    expect(newUser.username).toBe(userName)
  })
})
