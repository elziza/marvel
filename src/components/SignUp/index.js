import React,{useState,useContext} from 'react'
import { FirebaseContext } from '../Firebase'
import { Link } from 'react-router-dom'
const SignUp = (props) => {
  console.log(props)

  const firebase = useContext(FirebaseContext)
  const data={
    pseudo:'',
    email:'',
    password:'',
    confirmPassword:''
  }
  const [loginData,setLoginData]=useState(data);
  const [error,setError]= useState('')
  const handleChange=(e)=>{
    setLoginData({...loginData, [e.target.id]:e.target.value})
  }
  const handleSubmit= e=>{
    e.preventDefault();
    const {email,password}=loginData;
    firebase.signUpUser(email,password)
    .then(user=>{
      setLoginData({...data});
      props.history.push("/Welcome")
    })
    .catch(error=>{
      setError(error)
      setLoginData({...data});
    })
  }

  const {pseudo,email,password,confirmPassword}=loginData;

 const btn= pseudo ==='' || email ==='' || password ==='' || password !== confirmPassword 
  ?<button disabled>Inscription</button>:<button >Inscription</button>

  // gestion d'erreur
  const errorMsg=error !== '' && <span>{error.message}</span>
  return (
    <div className='signUpLoginBox'>
      <div className='SlContainer'>
          <div className='formBoxLeftSignup'>
          </div>
          <div className='formBoxRight'>
              <div className='formContent'>
                {errorMsg}
                  <h2>Inscription</h2>
                <form onSubmit={handleSubmit}>
                  <div className='inputBox'>
                    <input onChange={handleChange} value={pseudo} type='text' id='pseudo' autoComplete='off' required/>
                    <label htmlFor='pseudo'>pseudo</label>
                  </div>

                  <div className='inputBox'>
                    <input onChange={handleChange} value={email} type='email' id='email' autoComplete='off' required/>
                    <label htmlFor='email'>Email</label>
                  </div>

                  <div className='inputBox'>
                    <input onChange={handleChange} value={password} type='password' id='password' autoComplete='off' required/>
                    <label htmlFor='password'>Mot De Passe</label>
                  </div>

                  <div className='inputBox'>
                    <input onChange={handleChange} value={confirmPassword} type='password' id='confirmPassword' autoComplete='off' required/>
                    <label htmlFor='confirmPassword'>Confirmer le Mot De Passe</label>
                  </div>
                  {btn}
                </form>
                <div className='linkContainer'>
                  <Link className='simpleLink' to='/Login'>Déja inscrit connectez-vous</Link>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default SignUp
