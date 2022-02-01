const aws = require('aws-sdk');
const multer = require('multer');
const multers3 = require('multer-s3');

const s3 = new aws.s3({
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: process.env.S3_BUCKET_REGION
});

const upload = (bucketName) => 
    multer({
        storage: multers3({
            s3,
            bucket: bucketName,
            metadata: function(req, file, cb) {
                cb(null, { fieldName: file.fieldname });
            },
            key: function(req,file,cb){
                cb(null, 'image.jpeg');
            },
        }),
    });
exports.setProfilePic = (req, res, next) => {
    console.log(req.files);

    const uploadsingle = upload('foodiegram-dev').single('image-upload');

    uploadsingle(req,res, err => {
        if(err) return res.status(400).json({success:false, message: err.message });

        console.log(req.files)

        res.status(200).json({ data: req.files });
    })
}