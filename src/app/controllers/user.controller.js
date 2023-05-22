const { UserSchema } = require("../utilities/validations/user.validation");
const _userService = require("../services/user.service");
const { removeFile } = require("../utilities/removeFile");
const _bcrypt = require("../utilities/bcrypt");
const { find } = require("../models/user.model");



exports.getAll = async (req, res) => {
  try {
    const listOfUsers = await _userService.getAll();

    return res.status(200).json(listOfUsers);
  } catch (error) {
    return res.status(500).json(error)
  }
}

exports.getOne = async (req, res) => {
  try {
    const listOfUsers = await _userService.getOne(req.params.userId);

    return res.status(200).json(listOfUsers);
  } catch (error) {
    return res.status(500).json(error)
  }
}


exports.create = async (req, res) => {
  console.log(req.body)
  try {
    const { name, email, password, role } = req.body;
    const image = req.files.image[0];
    console.log(image)

    let encodedPassword = await _bcrypt.Hash(password);

    let validate = UserSchema.validate({
      name: name.toLowerCase(), email, password, role, image: {
        fullPath: image.path,
        relativePath: image.filename
      }
    });

    if (validate.error) {
      removeFile(req.files.image[0].path);
      return res.status(400).send(validate.error.details[0].message)
    }



    const newUser = await _userService.create({
      name, password: encodedPassword, email, role, image: {
        fullPath: image.path,
        relativePath: image.filename
      }
    });


    return res.status(200).json({ message: "User Created!", success: true })

  } catch (error) {
    console.log("create User error", error)
    return res.status(500).json(error)
  }
}

exports.update = async (req, res) => {
  try {
    const { userId } = req.params;
    const findUser = await _userService.getOne(userId);
    const { name, email, password, role } = req.body;

    let encodedPassword = await _bcrypt.Hash(password);
    console.log(req.files)
    let image;
    if (req.files && req.files.image) {
      image = req?.files?.image[0];
    }


    let validate = UserSchema.validate({
      name: name.toLowerCase(),
      email,
      password,
      role,
      image: {
        fullPath: image?.path || findUser.image.fullPath,
        relativePath: image?.filename || findUser.image.relativePath
      }
    });

    if (validate.error) {
      removeFile(req.files.image[0].path);
      return res.status(400).send(validate.error.details[0].message)
    }


    const updateUser = await _userService.update({
      userId, name, password: encodedPassword, email, role, image: {
        fullPath: image?.path || findUser.image.fullPath,
        relativePath: image?.filename || findUser.image.relativePath
      }
    });

    return res.status(200).json({ message: "User Updated!", success: true })

  } catch (error) {
    console.log({ error })
    return res.status(500).json(error)
  }
}



exports.delete = async (req, res) => {
  try {
    const deleteUser = await _userService.delete(req.body.userId);

    return res.status(200).json(deleteUser);
  } catch (error) {
    return res.status(500).json(error)
  }
} 