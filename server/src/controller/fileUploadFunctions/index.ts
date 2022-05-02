import path from "path"
import AWS from "aws-sdk"
import multer from "multer"
import multerS3 from 'multer-s3'

export function fileUploader() {
    AWS.config.update({ accessKeyId: process.env.S3_ACCESS_KEY, secretAccessKey: process.env.S3_SECRET_KEY });

    return multer({
        storage: multerS3({
            s3: new AWS.S3(),
            bucket: "whoseidea-image",
            key: function (req, file, cb) {
                let extension = path.extname(file.originalname);
                cb(null, Date.now().toString() + extension)
            },
            acl: 'public-read-write',
        })
    }).single("file")
}