import multer from "multer";

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); // saves file in this local folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // keeps original file name
  }
});

export const upload = multer({ storage });
