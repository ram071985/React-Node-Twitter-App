import React from 'react';
import NavBar from './NavBar.js';
import SplashPage from './SplashPage.js';
import {Container} from "react-bootstrap"

function App() {
  return (
<Container >
   <NavBar />
   <SplashPage />
</Container>
  );
}

export default App;
