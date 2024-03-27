'use client'
import React from 'react';
import styles from './shoppincart.module.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useEffect } from 'react';

const ShoppingCart = () => {
    const products = JSON.parse(localStorage.getItem('shop')) || [];

    useEffect(() => {
        // Código de efecto secundario si es necesario
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <section className={styles.shop}>
                    <div className={styles.container}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.currency}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className={styles.summary}>
                            <div className={styles.summary__title}>
                                <h5>Summary</h5>
                            </div>
                            <div className={styles.summary__product}>
                                <p>Products</p>
                                <p>$350</p>
                            </div>
                            <div className={styles.summary__delivery}>
                                <p>Envío</p>
                                <p>Gratis</p>
                            </div>
                            <div className={styles.summary__buy}>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ShoppingCart;
