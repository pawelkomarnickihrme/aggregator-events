import type { NextPage } from 'next'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import HeroPic from '../components/HeroPic'
import Evenvts from '../components/eventList/Evenvts'

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
});

const Home: NextPage = () => {
  return (
    <ApolloProvider client={client}>
    <div>
      <Header/>
      <HeroPic/>
      <Footer/>
      <Evenvts/>
    </div>
    </ApolloProvider>
  )
}

export default Home
