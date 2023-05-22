const UserModel = require("../models/user.model");



exports.getAll = async () => {
  try {
    let listOfUsers = await UserModel.find().select("-password -role");

    
    
    return listOfUsers
  } catch (error) {
    throw error
  }
}

exports.getOne = async (userId) => {
  try {
    let findUser = await UserModel.findById(userId);

    
    return findUser;
  } catch (error) {
    throw error;
  }
}

exports.create = async (data) => {
  try {

    let newUser = await new UserModel(data)
    await newUser.save();
    return newUser;
  } catch (error) {

    if (error.keyPattern.email && error.code === 11000) {
      throw `The Email '${error.keyValue.email}' Already is Exists.`;
    }

    throw error
  }
}

exports.update = async (data) => {
  try {

    let updateUser = await UserModel.findByIdAndUpdate(data.userId, data, { new: true });

    return updateUser;
  } catch (error) {

    throw error
  }
}

exports.delete = async (userId) => {
  try {

    let deleteUser = await UserModel.findOneAndDelete(userId);

    return deleteUser;
  } catch (error) {

    throw error
  }
}