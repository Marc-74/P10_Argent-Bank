import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import styles from './style/error.module.css'

function Error(){
    return(
        <div className={styles.error}>
            <Header />
            <h2 className={styles.errorTitle} >404</h2>
            <p className={styles.errorMsg}>Oops! The page you are looking for does not exist.</p>
            <a href='/' className={styles.returnLink}>Go back to home page</a>
            <Footer />
        </div>
    )
}
export default Error