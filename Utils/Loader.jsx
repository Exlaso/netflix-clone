import React from 'react'

const Loader = ({size = '25px'}) => {
  return (
    <div className='fixed z-[100] flex items-center justify-center w-full h-full'>

    <div className={` custom-loader`} style={{  height: size, width:size, }}></div>
    </div>
  )
}
  
export default Loader