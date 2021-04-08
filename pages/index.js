import Head from 'next/head'
import Nav from '../components/Nav/Nav'
import Card from '../components/Card/Card'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Seedling Planner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <h1 className="flex justify-center py-4 text-lg font-semibold tracking-wide bg-yellow-600">Upcoming Plantings</h1>
      <h2 className="flex justify-center py-2 font-semibold">4/1/2021</h2>
      <Card />
    </div>
  )
}
