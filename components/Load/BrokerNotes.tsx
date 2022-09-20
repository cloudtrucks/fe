import React from 'react'
import { ILoad } from './Load'

interface BrokerNotesProps {
  load: ILoad
}

export function BrokerNotes({ load }: BrokerNotesProps) {
  return (
    <div className="mt-8">
      <p className="uppercase text-gray-600">Broker Notes</p>
      <p className="text-gray-500 text-sm mt-4">{load.brokerNotes}</p>
    </div>
  )
}
