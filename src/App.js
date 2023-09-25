
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Update from './pages/Update';
import Read from './pages/Read';


function App() {
  return (
 <BrowserRouter>
   <Routes>
 <Route path='/'  element={<Home />} />
 <Route path='/create'  element={<Create />}/>
  <Route path='/update/:id'  element={<Update />} />
  <Route path='/read/:id'  element={<Read />} />
   </Routes>
 
 </BrowserRouter>
  );
}

export default App;
