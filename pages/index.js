import Home from '../components/home'
import Projects from '../components/projects'
import Head from 'next/head'

export default function Main() {
  return (
    <>
      <Head>
        <title>Jackson Moody</title>
      </Head>
      <div className="main">
        <Home />
        <Projects />
      </div>
    </>

  )
}