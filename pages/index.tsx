import type { NextPage } from 'next'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import HeroPic from '../components/HeroPic'


const Home: NextPage = () => {
  return (
    <div>
      <Header/>
      <HeroPic/>
      <Footer/>
    </div>
  )
}

export default Home
