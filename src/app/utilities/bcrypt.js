const bcrypt = require("bcrypt");

exports.Hash = async password => await bcrypt.hash(password, 10);

exports.Compare = async (password, hash) => await bcrypt.compare(password, hash);