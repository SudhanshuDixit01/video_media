const express = require('express');
const router = express.Router();
const { upload, uploadMedia, getAllMedia } = require('../controllers/mediaController');

router.post('/upload', upload.fields([{ name: 'thumbnail' }, { name: 'video' }]), uploadMedia);
router.get('/', getAllMedia);

module.exports = router;
