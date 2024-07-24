import logo from "../../asset/img/argentBankLogo.png";
import styles from './style/header.module.css';


function Header(){
    return(
    <header className={styles.header}>
        <nav className={styles.headerMainNav}>
        <a className={styles.headerMainNavItemLogo} href="./"> 
        <img
          className={styles.headerMainNavItemLogoImage}
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className={styles.srOnly}>Argent Bank</h1>
      </a>
      <div>
        <a className={styles.hearderMainNavItem} href="./signIn">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
    </header>
    )
}
export default Header;