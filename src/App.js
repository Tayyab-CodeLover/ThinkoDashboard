import Home from './Components/Home.jsx';
import Products from "./Components/Products.jsx";
import Calender from "./Components/Calender.jsx";
import BarCha from "./Components/BarCha.jsx";
import Task from "./Pages/Task.jsx";
import Timeline from './Pages/Timeline.jsx'
import Setting from './Pages/Setting.jsx'
import Book from "./Pages/Book.jsx";
import Layout from './Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/barchart" element={<BarCha/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path="/calender" element={<Calender/>}/>
        <Route path="/tasks" element={<Task/>}/>
        <Route path="/timeline" element={<Timeline/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/book" element={<Book/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
