import './App.css';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Footer from './component/Footer';
import Router from './component/Router';


function App() {

  // const navigate = useNavigate('')

  return (
    <body>
      <div className="container">
        <div> Post Page </div>
        <div className="header">
          <div className='serviceName'>
          Service Name
          </div>
        </div>
        <div className="main">
         
            <nav className="left-bar">
              <a className='left-bar-button' href='/Feed'> Feed</a>
              <a className='left-bar-button' href='/WritePost'>WritePost</a>
              <a className='left-bar-button' href='/SignUp'>Sign Up</a>
              <a className='left-bar-button' href='/SignIn'>Sign In</a>
              <a className='left-bar-button' href='/MyPost'>My Post</a>
            </nav>
          <div className="content-wraper">
            <div className="content-box" >
            </div>
            <Router/>
          </div>  
        </div> 
        <Footer/>
      </div>
  </body>
  );
}

export default App;
