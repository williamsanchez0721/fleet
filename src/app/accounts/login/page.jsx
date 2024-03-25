import styles from './login.module.css'

const login = ()=> {
    return(
        <section>
            <form action="" className={styles.form}>
                <div>
                    <label htmlFor="name" >Email</label>
                    <input type="text" id='name'/>
                </div>
                <div>
                    <label htmlFor="name" >Password</label>
                    <input type="text" id='name'/>
                </div>
            </form>
        </section>
    )
}

export default login;