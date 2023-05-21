const images = ['image/jpeg', 'image/png', 'image/jpg']
const multer = require("multer");

let storage = multer.diskStorage({
  destination(req, file, cb) {
    if (images.includes(file.mimetype) && file.fieldname === "image") {
      cb(null, './app/wwwroot/images')

    } else {
      cb("unknown file type", file.mimetype)
    }
  },
  filename(req, file, cb) {
    cb(null, `${new Date().toISOString().replace(/:/g, '-')}-${file.originalname}`)
  },
})

let upload = multer({ storage: storage })

exports.storeImage = upload