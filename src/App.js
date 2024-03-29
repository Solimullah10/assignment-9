import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About'
import NotFind from './components/NotFind/NotFind';
function App() {
  return (
    <div className="App ">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}  ></Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>}  ></Route>
        <Route path='/Reviews' element={<Reviews></Reviews>}> </Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}> </Route>
        <Route path='*' element={<NotFind></NotFind>}></Route>
      </Routes>

    </div>
  );
}

export default App;
