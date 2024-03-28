const multer = require("multer");
const path = require("path");

// Set storage engine for Multer
const storage = multer.diskStorage({
  destination: "./public/assets",
  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() + "-" + file.fieldname + path.extname(file.originalname)
    );
  },
});

// Initialize Multer
const profilePicUploadMiddleware = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1MB limit
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("profilePicture");

// Check file type
function checkFileType(file, cb) {
  // Allowed filetypes
  const filetypes = /jpeg|jpg|png/;
  // Check the extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check the MIME type
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images only!");
  }
}

// Export the profilePicUpload function
module.exports = profilePicUploadMiddleware;
