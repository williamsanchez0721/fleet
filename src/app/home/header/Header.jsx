import styles from './header.module.css'

const Header = ()=> {
    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <h3>TolinTelligence Collective Intelligence Group</h3>
                <h1>Improve efficiency and Safety with our systems</h1>
                <p>With our telematics systems installed on your forklifts and industrial equipment, we will provide you with and enhanced knowledge of the interaction between your trucks, operators and working enviroment in real time.</p>
            </div>
            <div className={styles.header__image}>
                <img src="forklift-6-1024x673-removebg-preview.png" alt="" className={styles.image__phone} width={600}/>
                <img src="fleet-7-1024x673-removebg-preview.png" alt="" width={700}/>
            </div>
        </header>
    )
}

export default Header;