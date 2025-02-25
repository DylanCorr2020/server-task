import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const addTask = () => {
  return (
    <div>
        <button className='btn btn-primary w-full'>Add Task <AiOutlinePlus size={18}/></button>
    </div>
  )
}

export default addTask