import React from 'react';
import styled from 'styled-components';
import Navbar from '../containers/Navbar';
import HeroDialog from '../components/HeroDialog';
import Dialpad from '../containers/Dialpad';
import Footer from '../containers/Footer';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 90vh;
  max-width: 100%;
  width: 100%;
`;
export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeContainer>
        <HeroDialog />
        <Dialpad />
      </HomeContainer>
      <Footer />
    </div>
  );
}
