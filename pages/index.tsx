import type { NextPage } from 'next';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import HeroPic from '../components/HeroPic';
import Events from '../components/events/Events';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Events />
    </div>
  );
};

export default Home;
