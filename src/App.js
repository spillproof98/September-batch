import './App.css';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import Home  from './component/pages/home';
import About from './component/pages/about';
import Contact from './component/pages/contact';
import SingleUser from './component/pages/singleuser';
import { Provider } from 'react-redux';
import store from './component/redux/store';
import Counter from './component/redux/counter';



function App()
{return <>
<Provider store={store}>
<BrowserRouter>

<Routes>
  <Route path="/"  element={<Home/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/redux" element={<Counter/>}></Route>
  <Route path="/contact/:id" element={<Contact/>}></Route>
</Routes>



</BrowserRouter>
</Provider>





</>
}

 export default App
