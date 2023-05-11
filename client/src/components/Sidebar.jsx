import {useState} from 'react'
import {FiChevronRight} from 'react-icons/fi'
import {FcParallelTasks} from 'react-icons/fc'
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="header">
            <div className="logo-container">
                <div className="logo">
                <FcParallelTasks size={30} />
                </div>
                <h3 className='logo-text'>Hippy</h3>
            </div>
            
            <div className="chevron">
                <FiChevronRight size={30}/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar