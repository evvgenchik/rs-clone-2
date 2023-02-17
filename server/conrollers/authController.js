import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import secret from "../config.js";

const generateAccessToken = (id) => {
  const payload = {
    id
  }

  return jwt.sign(payload, secret.key, { expiresIn: 24 })
}


class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Registration error:' + ' ' + errors.array()[0].msg + '\n Please fill in all fields' })
      }

      const { username, password, weight, height, age, gender } = req.body
      const candidate = await User.findOne({ username })

      if (candidate) {
        return res.status(400).json({ message: 'user already exists' })
      }

      const hashPassword = bcrypt.hashSync(password, 3);
      const user = new User({ username: username, password: hashPassword, weight: weight, goal: goal, height: height, age: age, gender: gender })

      await user.save()

      return res.status(200).json({
        message: 'user successfully registered'
      })
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Registration error' })
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body
      const user = await User.findOne({ username })

      console.log(user);

      if (!user) {
        return res.status(400).json({ message: `user with ${username} not found` })
      }

      const validPassword = bcrypt.compareSync(password, user.password)

      if (!validPassword) {
        return res.status(400).json({ message: `incorrect password` })
      }

      const token = generateAccessToken(user._id)

      return res.status(200).json({ message: 'user successfully authorized', token: token, user: user });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Login error' })
    }
  }

  async getUser(req, res) {
    try {
      const users = await User.find();
      res.json(users)
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'get error' })
    }
  }
}

export default new authController();