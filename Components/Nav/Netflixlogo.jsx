import Image from 'next/image'
import React from 'react'

const Netflixlogo = () => {
  return (
    <Image
    src="/static/logo/netflix.png"
    alt="netflix logo"
    height={75}
    width={150}
    className="px-3"
  />
  )
}

export default Netflixlogo