import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React from 'react'
import { FiSettings } from 'react-icons/fi'

const ThemeSettings = () => {
  return (
    <div><TooltipComponent content="Settings" position="Top">
      <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover: bg-light-gray text-white' style={{background:'blue', borderRadius:'50%'}}><FiSettings/></button>
      
      
      </TooltipComponent></div>
  )
}

export default ThemeSettings