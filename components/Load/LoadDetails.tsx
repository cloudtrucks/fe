import React from 'react'
import { ILoad } from './Load'

interface LoadDetailsProps {
  load: ILoad
}

export function LoadDetails({ load }: LoadDetailsProps) {
  return (
    <div className="mt-8">
      <p className="uppercase text-gray-600">Load Details</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mt-6 max-w-md">
        <div className="grid grid-cols-2 gap-2 items-end">
          <div>Trailer Type</div>
          <div className="text-gray-500 text-sm">{load.trailerType}</div>

          <div>Total Distance</div>
          <div className="text-gray-500 text-sm">{load.totalDistance}</div>
        </div>
        <div className="grid grid-cols-2 gap-2 items-end">
          <div>Weight</div>
          <div className="text-gray-500 text-sm">{load.weight}</div>

          <div>Broker</div>
          <div className="text-gray-500 text-sm">{load.broker}</div>
        </div>
      </div>
    </div>
  )
}
