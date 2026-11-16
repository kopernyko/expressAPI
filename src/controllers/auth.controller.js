import User from '../models/user.models.js'
import bcrypt from 'bcryptjs'

export async function register(req, res) {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    const hashedPass = bcrypt.hashSync(password, 10)

    await User.create({ email, password: hashedPass })

    res.status(201).json({ message: 'User registered' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export function login(req, res) {
  res.json('User logged in')
}
