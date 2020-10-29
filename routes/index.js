const express=require('express');
const router =express.Router();
const homecontroller=require('../controllers/home_controller');
console.log('router loaded');
router.get('/',homecontroller.home);
router.post('/create',homecontroller.create);
router.post('/delete',homecontroller.delete);
module.exports=router;