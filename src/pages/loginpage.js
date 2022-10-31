import {useContext,useState,useEffect} from "react";
import {useHistory} from "react-router-dom";
import FirebaseContext from '../contexts/firebase';

function Loginpage() {
  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);

  const [email,setemail] = useState('');
  const[password,setpassword] = useState('');

  const[error,seterror] = useState('');
  const isInvalid = password === "" || email === "" ;

  const handleLogin = () => {
    useEffect(() => {
      document.title = "Login - Instagram";
    })
  }

  return (
    <div>this is the loginpage</div>
  )
}

export default Loginpage