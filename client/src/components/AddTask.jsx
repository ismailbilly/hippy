import {useRef} from 'react'

const AddTask = ({socket}) => {
  const taskRef = useRef()
 
     function handleSubmit(e){
        e.preventDefault();
        socket.emit('createTask', taskRef.current.value)
        //console.log(taskRef.current.value)
      
    }
 
  return (
   
    <form className='form__input' onSubmit={handleSubmit}>
        <label htmlFor='task'>Provide a username</label>
        <input
            type='text'
            name='task'
            id='task'
            className='input'
            required
            ref={taskRef}
            
        />
        <button className='addTodoBtn'>ADD TASK</button>
    </form>

  )
}

export default AddTask