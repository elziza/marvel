
import '../../App.css';
import{ BrowserRouter , Routes,Route} from 'react-router-dom'
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import SignUp from '../SignUp';
import ErrorPage from '../ErrorPage';
function App() {
  return (
   <BrowserRouter>

      <Header/>
  <Routes>


    <Route  path='/'  element={<Landing/>}/>
    <Route path='/Welcome' element={<Welcome/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='*' element={<ErrorPage/>}/>
     
  </Routes>
    
      <Footer/>
   
   </BrowserRouter>
  );
}

export default App;
