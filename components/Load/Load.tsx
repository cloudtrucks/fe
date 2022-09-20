import React from 'react'
import { BrokerNotes } from './BrokerNotes'
import { LoadDetails } from './LoadDetails'
import { LoadMap } from './LoadMap'

export interface ILoad {
  id: string
  trailerType: string
  totalDistance: string
  weight: string
  broker: string
  rateEstimate: string
  brokerNotes: string
}

interface LoadProps {
  load: ILoad
}

export function Load({ load }: LoadProps) {
  return (
    <div className="container mx-auto p-4">
      <LoadMap />
      <LoadDetails load={load} />
      <BrokerNotes load={load} />
    </div>
  )
}
