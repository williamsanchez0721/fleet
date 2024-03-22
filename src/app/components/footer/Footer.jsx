import styles from './footer.module.css'

const Footer = ()=> {
    return(
        <footer className={styles.footer}>
            <div className={styles.divider}>
                <div className={styles.blue}></div>
                <div className={styles.bluedark}></div>
                <div className={styles.green}></div>
                <div className={styles.orange}></div>
                <div className={styles.red}></div>
            </div>
            <div className={styles.footer__container}>
                <div className={styles.footer__logo}>
                    <img src="logo3.svg" alt="" width={220}/>
                    <p>Improve the efficiency and safety of your fleets with Collective Intelligence's Fleet iQ360 and Forklift iQ360. Gain knowledge of how your fleet is being used in real-time with our systems and products.</p>
                    <div className={styles.socialmedia}>
                        <a href='#'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={25} fill='#fff'><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a>
                        <a href='#'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={25} fill='#fff'><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></a>
                        <a href='#'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={25} fill='#fff'><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
                    </div>
                </div>
                <div className={styles.footer__address}>
                    <div className={styles.address__uk}>
                        <div className={styles.address__name}>
                            <h5>UK</h5>
                        </div>
                        <div className={styles.address__description}>
                            <p><span>Address:</span> 3 Bowdens Business Centre, Bowdens Farm, Hambridge Somerset, TA10 0BP</p>
                            <p><span>Phone:</span> +44 (0) 1460 259101</p>
                            <i>Email</i>
                        </div>
                    </div>
                    <div className={styles.address__usa}>
                        <div className={styles.address__name}>
                            <h5>USA</h5>
                        </div>
                        <div className={styles.address__description}>
                            <p><span>Address:</span> 508 East North Street, Greenville, SC, 29601, USA</p>
                            <p><span>US Local:</span> +44 (0) 1460 259101</p>
                            <p><span>Toll Free: </span> 888-899-7580</p>
                            <i>Email</i>
                        </div>
                    </div>
                    <div className={styles.address__uk}>
                        <div className={styles.address__name}>
                            <h5>UK</h5>
                        </div>
                        <div className={styles.address__description}>
                            <p><span>Address:</span> 3 Bowdens Business Centre, Bowdens Farm, Hambridge Somerset, TA10 0BP</p>
                            <p><span>Phone:</span> +44 (0) 1460 259101</p>
                            <i>Email</i>
                        </div>
                    </div>
                    <div className={styles.address__uk}>
                        <div className={styles.address__name}>
                            <h5>UK</h5>
                        </div>
                        <div className={styles.address__description}>
                            <p><span>Address:</span> 3 Bowdens Business Centre, Bowdens Farm, Hambridge Somerset, TA10 0BP</p>
                            <p><span>Phone:</span> +44 (0) 1460 259101</p>
                            <i>Email</i>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>Copyright © 2024 Collective Intelligence Group. Website by Collective Actions. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;