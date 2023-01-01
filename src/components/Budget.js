import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Budget = () => {
  const { dispatch, budget, expenses, currency } = useContext(AppContext)
  const [newbudget, setBudget] = useState(budget)

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost)
  }, 0)

  function handleInputChange(event) {
    if (event.target.value > 20000) {
      alert('The budget cannot exceed the amount of 20000')
      setBudget('20000')
      return
    } else if (event.target.value < totalExpenses) {
      alert('You cannot reduce the budget value lower the spanding')
      setBudget(totalExpenses)
      return
    }
    setBudget(event.target.value)
    dispatch({
      type: 'SET_BUDGET',
      payload: event.target.value,
    })
  }

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        required="required"
        type="number"
        id="budget"
        step={10}
        value={newbudget}
        style={{ width: '45%', marginLeft: '5px' }}
        onChange={(event) => handleInputChange(event)}
      />
    </div>
  )
}

export default Budget
