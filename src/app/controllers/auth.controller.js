const { RegisterSchema } = require("../utilities/validations/user.validation");
const _authService = require("../services/auth.service");
const _bcrypt = require("../utilities/bcrypt");
const _jwt = require("../utilities/jwt");

exports.register = async (req, res) => {
  console.log(req.body);
  try {
    let { name, email, password } = req.body;
    let validate = RegisterSchema.validate(({ name, email, password }))

    if (validate.error) return res.status(400).json({ error: validate.error.details[0].message })

    let encodedPassword = await _bcrypt.Hash(password);

    await _authService.register({ name, email, password: encodedPassword });

    return res.status(200).json("user registerd")

  } catch (error) {
    console.log({ error })
    return res.status(500).json(error)
  }
}



exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;
    const login = await _authService.login({ email, password });

    if (!login) return res.status(404).json(`user with email '${email}' not found`)

    let comparePassword = await _bcrypt.Compare(password, login.password)

    if (!comparePassword) return res.status(400).json(`wrong password`)

    let token = _jwt.Generate({ name: login.name, email: login.email, userId: login._id, role: login.role });

    res.send({ name: login.name, email: login.email, userId: login._id, token, role: login.role })

  } catch (error) {
    throw error
  }
}