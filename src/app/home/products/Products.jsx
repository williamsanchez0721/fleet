import styles from './products.module.css'

const Products = ()=> {
    return (
        <section className={styles.products}>
            <div className={styles.products__content} id='forklift'>
                <div className={styles.content__title}>
                    <img src="home-1.png" width={500} alt="" />
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
                        <a href="#">Add to cart</a>
                        <a href="#">More information</a>
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
                        <a href="#">Add to cart</a>
                        <a href="#">More information</a>
                    </div>
                </div>
                <div className={styles.content__title}>
                    <img src="fleet-home.png" alt="" width={550}/>
                </div>
            </div>
        </section>
    )
}

export default Products;