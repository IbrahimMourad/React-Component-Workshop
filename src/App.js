import React from 'react';
import CategoryList from './components/CategoryList/CategoryList';
import Navbar from './components/Navbar/Header';
import { Container } from 'reactstrap';
const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Container>
          <CategoryList />
        </Container>
      </main>
    </>
  );
};

export default App;
