import styles from './about.module.css'

const About = ()=> {
    return (
        <section className={styles.about} id='about'>
            <div className={styles.about__title}>
                <h3>OUR SYSTEMS HELP YOU</h3>
                <h2>Get information on your trucks, operators and working environment in <span>real-time</span>.</h2>
            </div>
            <div className={styles.about__content}>
                <div className={styles.content__title}>
                    <h4>ABOUT US</h4>
                    <h2>The Collective Intelligence Group</h2>
                    <p>Collective Intelligence Group’s core focus and values are about helping industries that suffer from inefficiencies related to stringent compliance and regulation requirements. Our systems are all based around making work safer and saving your business time and money.</p>
                    <ul className={styles.content__benefits}>
                        <li><img src="checkicon.png" alt="" /> Objective data informing life saving decisions</li>
                        <li><img src="checkicon.png" alt="" /> Increasing efficiency and improving safety</li>
                        <li><img src="checkicon.png" alt="" /> Monitoring and delivering measurable outcomes with IOT</li>
                        <li><img src="checkicon.png" alt="" /> End to end supply chain visibility</li>
                    </ul>
                </div>
                <div className={styles.content__image}>
                    {/* <img src="forklift-6-1024x673-removebg-preview.png" alt="" className={styles.image__phone} width={600}/> */}
                    <img src="safety.png" alt="" width={600}/>
                </div>
            </div>
            <div className={styles.about__benefits}>
                <div className={styles.benefit}>
                <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' width={30} viewBox="0 0 512 512"><path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                    <h4>Increase safety</h4>
                    <p>Do you know who’s operating your forklifts? Increase safety with operator access control so only fully trained and authorised operators can use your trucks.</p>
                </div>
                <div className={styles.benefit}>
                <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' width={30} viewBox="0 0 512 512"><path d="M96 480h320V128h-32V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v48H96v352zm96-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-16V128h16c26.5 0 48 21.5 48 48zM64 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h16v352zm288-208v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16z"/></svg>
                    <h4>Save time & money</h4>
                    <p>Tracking daily operator activity, supervisors can easily detect safety infringements and performance inefficiencies helping you save time and money.</p>
                </div>
                <div className={styles.benefit}>
                <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' width={30} viewBox="0 0 512 512" ><path d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.8-7.2-16-16-16H16C7.2 64 0 71.2 0 80v336c0 17.7 14.3 32 32 32h464c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"/></svg>
                    <h4>Maximise efficiency</h4>
                    <p>You can increase the efficiency of your fleet by seeing real-time reports. Monitor vehicle and driver performance allowing you to minimise productivity loss.</p>
                </div>
            </div>
        </section>
    )
}

export default About;