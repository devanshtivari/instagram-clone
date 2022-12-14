import {useContext,useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import FirebaseContext from '../contexts/firebase';
import '../styles/login.css';

function Loginpage() {
  const history = useNavigate();
  const {firebase} = useContext(FirebaseContext);

  const [email,setemail] = useState('');
  const[password,setpassword] = useState('');

  const[error,seterror] = useState('');
  const isInvalid = password === "" || email === "" ;

  const handleLogin = ()=> {};

  useEffect(() => {
    document.title = 'Login - Instagram'
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="h-screen bg-white-50 flex flex-col justify-center items-center flex w-2/5 mx-auto">
        <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3 flex w-3/5">
          <h1 className="bg-no-repeat instagram-logo"></h1>
          <form className="mt-8 w-64 flex flex-col">
            <input
              autofocus
              className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none flex flex-3/5"
              id="email"
              placeholder="Phone number, username, or email"
              type="text"
              onChange={({ target }) => setemail(target.value)}
            />
            <input
              autofocus
              className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="password"
              placeholder="Password"
              type="password"
              onChange={({ target }) => setpassword(target.value)}
            />
            <a className=" text-sm text-center bg-blue-300 text-white py-1 rounded font-medium ">
              Log In
            </a>
          </form>
          <div className="flex justify-evenly space-x-2 w-64 mt-4">
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
            <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
              or
            </span>
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
          </div>
          <button className="mt-4 flex">
            <div className="bg-no-repeat facebook-logo mr-1"></div>
            <span className="text-xs text-blue-900 font-semibold">
              Log in with Facebook
            </span>
          </button>
          <a className="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">
            Forgot password?
          </a>
        </div>
        <div className="bg-white border border-gray-300 text-center w-80 py-4">
          <span className="text-sm">Don't have an account?</span>
          <a className="text-blue-500 text-sm font-semibold">Sign up</a>
        </div>
        <div className="mt-3 text-center">
          <span className="text-xs">Get the app</span>
          <div className="flex mt-3 space-x-2">
            <div className="bg-no-repeat apple-store-logo"></div>
            <div className="bg-no-repeat google-store-logo"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage