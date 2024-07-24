import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Account from "../../components/Account/account";
import styles from './style/user.module.css';
import indexStyles from '../../index.module.css';
import headerStyles from '../../components/Header/style/header.module.css';

function User(){
    return(
      <div className={styles.user}>
         <Header />
         <main className={indexStyles.bgDark}>
            <div className={styles.headerUser}>
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className={styles.editButton}>Edit Name</button>
            </div>
            <h2 className={headerStyles.srOnly}>Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
         </main>
         <Footer />
      </div>
      ) 
    }
export default User;