import React from 'react'
import Image from 'next/image'
import Map from '../../images/staticmap.png'

export function LoadMap() {
  return (
    <div className="mt-8">
      <Image src={Map} layout="responsive" alt="" />
    </div>
  )
}
