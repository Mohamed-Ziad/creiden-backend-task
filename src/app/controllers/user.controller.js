const { UserSchema } = require("../utilities/validations/user.validation");
const _userService = require("../services/user.service");
const { removeFile } = require("../utilities/removeFile");
const _bcrypt = require("../utilities/bcrypt");

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
        relativePath: "relativePath",
        fullPath: "fullPath"
      }
    });


    return res.status(200).json({ message: "User Created!", success: true })

  } catch (error) {
    console.log("create User error", error)
    return res.status(500).json(error)
  }
}

exports.getAll = async (req, res) => {
  try {
    const listOfUsers = await _userService.getAll();

    return res.status(200).json(listOfUsers);
  } catch (error) {
    return res.status(500).json(error)
  }
}


