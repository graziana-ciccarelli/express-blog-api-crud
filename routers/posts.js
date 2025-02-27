const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController'); 

router.get('/', postsController.index);


router.get('/:id', postsController.show);


router.delete('/:id', postsController.destroy);
router.post('/', postsController.store);
router.put('/:id', postsController.update);




module.exports = router;