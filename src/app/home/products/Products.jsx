'use client'
import { useEffect } from 'react'
import styles from './products.module.css'
import UrlApi from '@/app/config/Config'
import axios from '@/app/config/axios'

const Products = ()=> {
    const api = UrlApi;
    console.log(api)
    const Product = [
        {
            id: 1,
            name: '',
            price: 0,
            currency: 'USD',
            brochure:  '',
            benefits: [],
            sales: []
          }, 
          {
            id: 2,
            name: '',
            price: 0,
            currency: 'USD',
            brochure:  '',
            benefits: [],
            sales: []
          }
    ]
    useEffect(() => {
        const fetchData = async () => {
          try {
            const headers = {
              'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJuYW1lIjoibmFtZSB1c2VyIiwiZW1haWwiOiJlbWFpbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZF9hdCI6bnVsbCwiaW1hZ2UiOm51bGwsInBhc3N3b3JkIjoiJDJiJDA1JHd0ZnZyS3kzVEFYMHB5SDN5blNHN2VkMmpqTlh0LnpjdmZVY0FuLi9EN2YvUEVWYnRjSnkyIiwicm9sZV9pZCI6MSwiY3JlYXRlZEF0IjoiMjAyNC0wMy0yNVQxODoyMzo0MS45NzFaIiwidXBkYXRlZEF0IjoiMjAyNC0wMy0yNVQxODoyMzo0MS45NzFaIiwiZGVsZXRlZEF0IjpmYWxzZX0sImlhdCI6MTcxMTM5MzM4MSwiZXhwIjoxNzExMzk2OTgxfQ.YDoVXK9NKjNH2gEbKZz41W5rPrIAPW8wSvJtf8m0q0A'
            };
            const response = await axios.get(`products`);
            console.log(response);
            // Aquí puedes hacer algo con la respuesta, como guardarla en el estado
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []); // Asegúrate de pasar todas las dependencias necesarias aquí, en este caso, no hay ninguna dependencia
      
      
    const handleAddToCart = () => {
        try {
            localStorage.setItem('shop', JSON.stringify(Product));
            console.log(JSON.parse(localStorage.getItem('shop')))
            window.href = '/'
        }catch(error) {
            console.error(error)
        }
    }
    return (
        <section className={styles.products}>
            <div className={styles.products__content} id='forklift'>
                <div className={styles.content__title}>
                    <img src="home-1.png" alt="" />
                </div>
                <div className={styles.content__description}>
                    <img src="forklift-main.svg" alt="" width={195}/>
                    <p>The Collective Intelligence Group offers leading fleet data intelligence to mixed fleets through the Forklift iQ360’s system.</p>
                    <p>Our comprehensive fleet management system provides your business with efficient three-way communication between supervisors, forklift vehicles, and drivers.</p>
                    <ul>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Increase safety with operator access control</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pre-shift checks on your entire forklift fleet</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Session time reporting - ability to keep track of any time used</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Impact reporting - keeping track of accidents that have occurred</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Live incident reporting</li>
                    </ul>
                    <div className={styles.content__button}>
                        <button onClick={handleAddToCart}>Add to cart</button>
                        <a href="#" >More information</a>
                    </div>
                </div>
            </div>
            <div className={styles.products__content}>
                <div className={styles.content__description} id='fleet'>
                    <img src="fleet-main.svg" alt="" width={155} />
                    <p>Fleet iQ360 was designed to optimize forklift productivity for large-scale end users. Fleet iQ360 is a superior system for recording, compiling and presenting data that is critical to carrying out pre-shift checks, performance and utilization level analysis and impact reports.</p>
                    <ul>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Access only for authorized trained drivers</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Pre-shift checks specific to your operations</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Impact reporting - keeping track of impacts that have occurred</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>Detailed fleet management reporting, through CAN bus if available or digital inputs to measure traction time, time on seat, time using hydraulics plus others</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>GPS location tracking</li>
                    </ul>
                    <div className={styles.content__button}>
                        <button onClick={handleAddToCart}>Add to cart</button>
                        <a href="#">More information</a>
                    </div>
                </div>
                <div className={styles.content__title}>
                    <img src="fleet-home.png" alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Products;