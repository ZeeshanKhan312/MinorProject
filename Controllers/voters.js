
const {Voters,Candidates} = require('../Models')

module.exports = {
    isVoter:async function(req, res, next) {
        const {voterId,dob} = req.body;

        const voter = await Voters.findByPk(voterId);

        if(!voter){
            return res.status(404).json(
                {
                   error:{
                        message:'Voter does not exist'
                   }
                }
                )
        }

        return res.status(200).json(voter)
    },
    castVote:async function(req, res, next) {
        const {candidateName,voterId} = req.body;

        const voter = await Voters.findByPk(voterId);

        if(!voter){
            return res.status(404).json(
                {
                   error:{ message:'Voter does not exist'}
                }
                )
        }

        if(voter.cast){
            return res.status(404).json(
                {
                   error:{ message:'You have already given the vote'}
                }
                )
        }

        const candidate = await Candidates.findByPk(candidateName)

        if(!candidate){
            return res.status(404).json(
                {
                   error:{ message:'Candidate does not exist !'}
                }
                )
        }

        candidate.votes+=1;
        voter.cast=true;

        candidate.save();
        voter.save()

        return res.status(200).json({
           error:{ message:"Vote casted successully"}
        })
    },
    update: async function(req,res,next){
        try {
            await Voters.update({...req.body},
                {
                    where:{voterId:req.body.voterId}
                });

            res.json({error:{message:'Updated successfully'}})
        } catch (error) {
            return res.status(404).json(error)
        }
    }
}