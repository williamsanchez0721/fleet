import styles from './shoppincart.module.css'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const ShoppingCart = ()=> {
    return(
        <>
            <Navbar />
            <main>
                <section className={styles.shop}>

                </section>
            </main>
            <Footer />
        </>
    )
}

export default ShoppingCart;