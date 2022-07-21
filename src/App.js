import './App.css';
import signup from './assets/signup.svg';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={signup} alt="signup" width={745} height={620}/>
        </div>
      </div>
    </div>
  );
}

export default App;
