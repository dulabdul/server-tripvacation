const router = require('express').Router();
const apiController = require('../controller/apiController');
const { upload } = require('../middlewares/multer');

router.get('/hero', apiController.heroPage);
router.get('/most-picked', apiController.mostPickedPage);
router.get('/category-page', apiController.categoryPage);
router.get('/testimonial-page', apiController.testimonialPage);

router.get('/detail-page/:id', apiController.detailPage);
router.post('/booking-page', upload, apiController.bookingPage);
module.exports = router;
