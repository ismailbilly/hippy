
import {TfiBlackboard} from 'react-icons/tf'
import {SlPeople} from 'react-icons/si'
import {MdOutlineNetworkWifi1Bar} from 'react-icons/md'
import {AiOutlineTable, AiOutlineCalendar} from 'react-icons/ai'

import SlPeople from 'react-icons/si'
module.exports = [
    {id:1,
    icon:<TfiBlackboard />,
    title:'Boards'
    },
    {
        id:2,
        icon:<SlPeople />,
        title:'Members'
    },
     {id:3,
        icon:<MdOutlineNetworkWifi1Bar />,
        title:'Workspace settings',
        space: true
     },
    
    {id:4,
            icon:<AiOutlineTable />,
            title:'Tables'
        },
        {id:5,
                icon:<AiOutlineCalendar />,
               title:'Calendar'
        }
]