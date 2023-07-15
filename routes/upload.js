const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { v4: uuid } = require("uuid");

const bucket = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  },
});

const express = require("express");

const router = express.Router();

router.get("/get/preSignedURL", async (req, res) => {
  const contentType = req.query.contentType;

  const fileName =
    req.query.fileName.split(".")[0] +
    "-" +
    uuid() +
    "." +
    contentType.split("/")[1];

  const command = new PutObjectCommand({
    Bucket: "inkandpixels-bucket",
    Key: fileName,
    ContentType: contentType,
  });

  const url = await getSignedUrl(bucket, command, { expiresIn: 3600 });
  console.log(url);
  console.log(fileName);
  res.send({
    url,
    fileName,
  });
});

module.exports = router;
