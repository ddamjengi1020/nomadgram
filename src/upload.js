import multer from "multer";
import path from "path";
import multerGcs from "multer-cloud-storage";

const upload = multer({
  storage: new multerGcs({
    bucket: "nomadgram-storage",
    projectId: "nomadgram-303811",
    acl: "publicRead",
    keyFilename: path.join(__dirname, "./nomadgram-303811-46849aca6779.json"),
    filename: (_, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
  }),
});

export const uploadMiddleware = upload.array("files");

export const uploadController = (req, res) => {
  const { files } = req; // files is Array contained Object that will using filename
  res.json({ files });
};
