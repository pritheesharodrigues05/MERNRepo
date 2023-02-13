const expressAsyncHandler = require("express-async-handler")
const { findByIdAndUpdate } = require("../models/goals")
const GoalModel = require('../models/goals')


//Controller method to fetch the goals
//@desc fetch Goal
//@route  /api/goals
//@acess Private
const getGoals= expressAsyncHandler(async (req, res) =>{
    
// const GoalModel =require('../models/goals')
const goals= await GoalModel.find()
res.status(200).json(goals)
//res.status(200).json({ message: 'Get goals' })
})




//Controller method to create the goals
//@desc set Goal
//@route  /api/goals
//@acess Private 
const createGoals= expressAsyncHandler(async(req, res) =>{
    // console.log('Request body', req.body)

    if(!(req.body.text)){

     res.status(400)
     throw new Error('Please add a text field');

    }
   const goal= await GoalModel.create({
     text: req.body.text

   })
    res.status(200).json(goal)

    // res.status(200).json({ message: 'Set goals' })
})




//Controller method to update the goals
//@desc update the Goal
//@route  /api/goals/:id
//@acess Private  



const updateGoal= expressAsyncHandler(async (req, res) =>{

  const goal = await GoalModel.findById(req.params.id);

  if(!goal) {

   res.status(400)
   throw new Error('Goal not found')
  }

  const updatedGoal= await GoalModel.findByIdAndUpdate(req.params.id, req.body, {
    new : true,
  } )

   res.status(200).json(updatedGoal);

})


//Controller method to delete the goals
//@desc update the Goal
//@route  /api/goals/:id
//@acess Private

const deleteGoal= expressAsyncHandler(async(req, res) =>{

    const goal = await GoalModel.findById(req.params.id);
    if(!goal) {

        res.status(400)
        throw new Error('Goal not found')
       }

    GoalModel.remove  
    res.status(200).json({ id: req.params.id})
})

module.exports ={
    getGoals,
    createGoals,
    updateGoal,
    deleteGoal

}