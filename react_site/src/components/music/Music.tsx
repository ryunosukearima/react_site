import React from 'react'
import Sound from './Sound'
import AudioApi from './AudioApi'


const Music = () => {
  return (
    <div>
      <div className='flex'>
        <div className="m-auto text-center">DJMIX</div>
      </div>
      <div className='flex justify-center mt-4'>
        <div className='w-1/2 bg-gray-200 p-4 rounded-lg shadow-lg'>
          <h2 className='text-xl font-bold mb-4'>Music Player</h2>
          {/* Add your music player component here */}
          <p><Sound /></p>
        </div>
      </div>

      <div className='flex justify-center mt-4'>
        <div className='w-1/2 bg-gray-200 p-4 rounded-lg shadow-lg'>          
        <AudioApi />
        </div>
      </div>
    </div>
    )
}

export default Music