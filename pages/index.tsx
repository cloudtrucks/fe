import Head from 'next/head'
import React from 'react'
import { Header } from '../components/Header'
import { Load } from '../components/Load/Load'

const load = {
  id: '1',
  trailerType: 'Dry Van',
  totalDistance: '398 mi',
  weight: 'Max. 42500 lb',
  broker: 'TQL',
  rate: {
    min: 1194,
    max: 1624,
  },
  brokerNotes: '[pick-up] CANNOT ARRIVE EARLY MUST PU AT SCHEDULED TIME No Reefers Allowed.',
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Cloudtrucks | Book a load</title>
        <style>{`body { background-color:  #f4f7f9}`}</style>
      </Head>
      <Header>Cloudtrucks</Header>
      <Load load={load} />
    </>
  )
}
