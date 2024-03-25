import styles from './header.module.css'

const Header = ()=> {
    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <h3>TolinTelligence Collective Intelligence Group</h3>
                <h1>Improve <span>efficiency</span> and <span>Safety</span> with our systems</h1>
                <p>With our telematics systems installed on your forklifts and industrial equipment, we will provide you with and enhanced knowledge of the interaction between your trucks, operators and working enviroment in real time.</p>
                <div className={styles.header__buttons}>
                    <a href="">Forklift iQ360</a>
                    <a href="">Fleet iQ360</a>
                </div>
            </div>
            <div className={styles.statick__layer}></div>
            <div className={styles.header__image}>
                {/* <img src="forklift-6-1024x673-removebg-preview.png" alt="" className={styles.image__phone} width={600}/> */}
                {/* <img src="forklift-6-1024x673-removebg-preview.png" alt="" width={700}/> */}
            </div>
        </header>
    )
}

export default Header;