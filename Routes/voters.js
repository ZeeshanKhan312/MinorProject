const express=require('express')
const router = express.Router();
const {castVote,update,isVoter} = require('../Controllers/voters')

router.post('/is-voter',isVoter)
router.post('/cast-vote',castVote)
router.put('/update',update)

module.exports = router