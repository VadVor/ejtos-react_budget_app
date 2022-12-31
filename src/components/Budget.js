import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Budget = () => {
  const { dispatch, budget } = useContext(AppContext)
  const [newbudget, setBudget] = useState(budget)

  console.log(newbudget)
  function handleInputChange(event) {
    if (event.target.value > 20000) {
      alert('The budget cannot exceed the amount of 20000')
      setBudget('20000')
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
      <span>Budget: £</span>
      <input
        required="required"
        type="number"
        id="budget"
        step={10}
        value={newbudget}
        style={{ marginLeft: '2rem', size: 10 }}
        onChange={(event) => handleInputChange(event)}
      ></input>
    </div>
  )
}

export default Budget
