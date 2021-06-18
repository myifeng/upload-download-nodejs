const Router = require('@koa/router');
const router = new Router();

const path = require("path")
const fs = require('fs');
const UUID = require('uuid');

const multer = require('@koa/multer');
const APPENDIX_DIR = process.env.APPENDIX_DIR || 'appendix';

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, APPENDIX_DIR)
    },
    filename: function (req, file, cb) {
        const urlArr = decodeURI(req.url).split("/").filter(s => s);
        const uploadPath = path.join(urlArr.join(path.sep), UUID.v4());
        mkdirsSync(path.join(APPENDIX_DIR, uploadPath))
        cb(null, path.join(uploadPath, file.originalname))
    }
})
const upload = multer({ storage: storage })

router.post('/(.*)', upload.any(), (ctx, next) => {
    ctx.body = !!ctx.request.files ? ctx.request.files.map(s => s.filename) : [];
});

router.get('/(.*)', async (ctx, next) => {
    const urlArr = decodeURI(ctx.request.url).split('/').filter(s => s);
    const filePath = path.join(APPENDIX_DIR, urlArr.join(path.sep));
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const file = await fs.readFileSync(filePath);
        ctx.attachment(file.filename);
        ctx.body = file;
    } else {
        ctx.throw(404)
    }
});

function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) return true;
    if (mkdirsSync(path.dirname(dirname))) {
        fs.mkdirSync(dirname);
        return true;
    }
}

module.exports = router