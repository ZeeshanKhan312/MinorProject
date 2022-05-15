
const {Voters,Candidates,Admins} = require('../Models')
const id_generator = require('short-unique-id')
const uid = new id_generator({length:6})
module.exports = {
    isLoggedIn:async function(req, res, next) {
        console.log(req.body)
        const {AdminDetails} = req.body

        if(!AdminDetails){
            return res.status(404).json(
                {
                    message:'Not allowed'
                }
                )
        }

        const admin = await Admins.findOne({where:{
            username: AdminDetails?.username
        }})

        if(!admin) {
            return res.status(404).json(
                {
                    message:'Admin does not exist'
                }
                )
        }
        if(admin.password!==AdminDetails.password){
            return res.status(404).json(
                {
                    message:'Username/Password not correct'
                }
                )
        }

        next()
    },
    addVoter:async function(req, res, next){
        try {
            const {Voter} = req.body;

            const id = uid();

            if(!Voter.name||!Voter.dob||!Voter.address||!Voter.mobile_no){
                return res.status(404).json(
                    {
                        message:'Incomplete data'
                    }
                    )
            }

            const voter = await Voters.create({
                voterId:id,
                name:Voter.name,
                address:Voter.address,
                mobile_no:Voter.mobile_no,
                dob:Voter.dob
            })

            return res.status(200).json({
                message:`Voter with name:${voter.name} & voterId:${voter.voterId} created successfully !`
            })

        } catch (error) {
            return res.status(404).json(error)
        }
        
        

    },
    addCandidate:async function(req, res,next){

        try {
            const {name} = req.body

            if(!name){
                return res.status(404).json(
                    {
                        message:'name is required'
                    }
                    )
            }

            const candidate = await Candidates.create({
                name:name
            })

            return res.status(200).json({
                message:`Candidate with name:${candidate.name} created successfully`
            })
        } catch (error) {
            return res.status(404).json(error)
        }
        
    },
    listCandidates:async function(req, res, next){

        const candidates = await Candidates.findAll();

        res.json(candidates)
    },
    listVoters:async function(req, res, next){
        const voters = await Voters.findAll();

        res.json(voters)
    }
}