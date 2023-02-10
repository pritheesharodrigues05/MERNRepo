const express = require('express');
const {getGoals, createGoals, updateGoal, deleteGoal} = require('../controllers/goalController');
const router = express.Router()


// router.get('/', getGoals)

// router.post('/', createGoals)

// router.put('/:id',updateGoal)

// router.delete('/:id',deleteGoal)


router.route('/').get(getGoals).post(createGoals)

router.route('/:id').put(updateGoal).delete(deleteGoal)


module.exports = router  