import { useState } from "react";
import styles from './style/form.module.css';
import { useDispatch, useSelector} from 'react-redux';
import { logIn } from '../../reducers/profilSlice';
import {  selectError, selectLoading } from "../../utils/selector";



function Form(){
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  
 
  const infoUser = {
      email: email,
      password: password,
      checked: checked,
  };
  const identify = JSON.stringify(infoUser);

  async function handleLoginEvent(e){
    e.preventDefault();
    dispatch(logIn(identify));
  }
    return(
        <form>
          <div className={styles.inputWrapper}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <div className={error ? styles.errorTrue : styles.errorWrapper}>
          <p className={styles.errorMessage}>* Erreur dans l’identifiant ou le mot de passe</p>
          </div>
          <div className={styles.inputRemember}>
            <input type="checkbox" id="remember-me" onChange={() => setChecked(!checked)}/>
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className={styles.signInButton} onClick={handleLoginEvent}>{"Sign in"}</button>
        </form>
    )
}

export default Form;