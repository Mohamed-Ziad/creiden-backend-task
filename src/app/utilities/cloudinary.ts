const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME ,//process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_KEY ,// process.env.CLOUD_KEY, 
    api_secret: process.env.CLOUD_KEY_SECRET  // process.env.CLOUD_KEY_SECRET 
});

exports.cloudinary = cloudinary;