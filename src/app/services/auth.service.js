const UserModel = require("../models/user.model");

exports.register = async (userdata) => {
  console.log({userdata})
  try {
    let newUser = await new UserModel({ ...userdata, role: "user", image: {
      fullPath: '',
      relativePath: ''
    } });

    await newUser.save();

    return true;

  } catch (error) {

    console.log({error})
    
    if (error.keyPattern.email && error.code === 11000) {
      throw `The Email '${error.keyValue.email}' Already is Exists.`;
    }

    throw error;
  }
}


exports.login = async (userdata) => {
  try {
    let findUser = await UserModel.findOne({ email: userdata.email });

    return findUser;

  } catch (error) {
    throw error;
  }
}