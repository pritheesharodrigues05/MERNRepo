

//Controller method to fetch the goals
//@desc set Goal
//@route  /api/goals
//@acess Private
const getGoals= (req, res) =>{
    res.status(200).json({ message: 'Get goals' })
}

const createGoals= (req, res) =>{
    // console.log('Request body', req.body)

    if(!(req.body.text)){

     res.status(400)
     throw new Error('Please add a text field');

    }

    res.status(200).json({ message: 'Set goals' })
}

const updateGoal= (req, res) =>{
    res.status(200).json({ message: `update goals with ${req.params.id}` })
}

const deleteGoal= (req, res) =>{
    res.status(200).json({ message: `delete the goals with ${req.params.id}` })
}

module.exports ={
    getGoals,
    createGoals,
    updateGoal,
    deleteGoal

}