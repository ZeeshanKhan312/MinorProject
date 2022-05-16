const express=require('express')
const router = express.Router();
const {isAdmin,isLoggedIn,addVoter,addCandidate,listCandidates,listVoters,deleteVoter} = require('../Controllers/admins')

router.post('/is-admin',isAdmin)
router.post('/add-voter',isLoggedIn,addVoter);
router.post('/add-candidate',isLoggedIn,addCandidate);
router.post('/list-candidates',isLoggedIn,listCandidates);
router.post('/list-voters',isLoggedIn,listVoters)
router.delete('/delete-voter',isLoggedIn,deleteVoter);
module.exports = router