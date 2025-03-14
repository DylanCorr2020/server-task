'use client'

import { FormEventHandler,useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from './Modal'
import { addTodo } from '../../../apis'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid';

const addTask = () => {
  
  const router= useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [newTaskvalue, setNewTaskValue] = useState<string>('')

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text : newTaskvalue,
    });
    setNewTaskValue('')
    setModalOpen(false)
    router.refresh();
  
  }


  return (
    <div>
        <button onClick={()=>setModalOpen(true)} className='btn btn-primary w-full'>Add Task <AiOutlinePlus size={18}/></button>

        <Modal modalOpen = {modalOpen} setModalOpen={setModalOpen}> 
          <form onSubmit={handleSubmitNewTodo}> 
            <h3 className='font-bold text-lg'>Add new Task</h3>
            <div className='modal-action'>
              <input 
              value = {newTaskvalue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type = 'text' 
              placeholder='Type your task here'
              className='input input-bordered w-full w-full'
              />
              <button type = 'submit' className='btn'>Add Task</button>
              </div>
              </form>
        </Modal>
    </div>


  )
}

export default addTask