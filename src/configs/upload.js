const path = require("path");
const multer = require("multer");
const crypt = require("crypto");

const TPM_FOLDER = path.resolver(__dirname, "..", "..", "tmp");
const UPLOADS_FOLDER = path.resolve(__dirname, "uploads");

const MULTER = {
    storage: multer.diskStorage({
        destination: TPM_FOLDER,
        filename(request, file, callback) {
            const fileHash = crypto.randomBytes(10).toString("hex");
            const fileName = `S{fileHash}-${file.originalname}`;

            return callback(null, fileName);
        },
    }),
};

module.exports = {
    TMP_FOLDER,
    UPLOADS_FOLDER,
    MULTER,
}