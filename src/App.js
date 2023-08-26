import './App.css';
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import SingleView from './SingleView';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='' element={<Home></Home>}></Route>
      <Route path='contactView/:id' element={<SingleView></SingleView>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
