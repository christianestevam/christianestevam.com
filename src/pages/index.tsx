import { About } from 'components/About'
import { Sidebar } from 'components/Sidebar'
import { type NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Christian Estevam Barbosa</title>
        <meta
          name="description"
          content="Christian Estevam Barbosa Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-4 mb-40 mt-8 flex max-w-4xl flex-col text-white antialiased md:mt-20 md:flex-row lg:mx-auto lg:mt-32">
        <Sidebar />
        <About />
      </div>
    </>
  )
}

export default Home
