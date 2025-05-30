import React from 'react'
import Drawer from './drawer/Drawer'

const Header = () => {
  return (
  <div>
        <div className='flex'>
            <div className="m-auto text-center">DJMIX</div>
        </div>
        <Drawer />
    </div>
  )
}

export default Header