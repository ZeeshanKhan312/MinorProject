const express=require('express')
const router = express.Router();
const {isLoggedIn,addVoter,addCandidate,listCandidates,listVoters} = require('../Controllers/admins')

router.post('/add-voter',isLoggedIn,addVoter);
router.post('/add-candidate',isLoggedIn,addCandidate);
router.get('/list-candidates',isLoggedIn,listCandidates);
router.get('/list-voters',isLoggedIn,listVoters)

module.exports = router