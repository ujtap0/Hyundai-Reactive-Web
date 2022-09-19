import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
