'use client'

import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from './Modal'

const addTask = () => {
  
  const [modalOpen, setModalOpen] = useState<boolean>(false)


  return (
    <div>
        <button onClick={()=>setModalOpen(true)} className='btn btn-primary w-full'>Add Task <AiOutlinePlus size={18}/></button>

        <Modal modalOpen = {modalOpen} setModalOpen={setModalOpen}/>
    </div>


  )
}

export default addTask