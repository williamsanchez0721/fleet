import styles from './login.module.css'

const Login = () => {
    return (
        <main>
            <section className={styles.login}>
                <div className={styles.container}>
                    <div>
                        <div className={styles.content__title}>
                            <h3>Get Started Now</h3>
                            <p>Enter your credentials to access your account</p>
                        </div>
                        <div className={styles.content__google}>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>
                                Log in with Google
                            </button>
                        </div>
                    </div>
                    <div className={styles.separator}>
                        <div >
                            <hr />
                        </div>
                        <p>or</p>
                        <div>
                            <hr />
                        </div>
                    </div>
                    <form action="">
                        <div className={styles.form__item}>
                            <label htmlFor="">Email address</label>
                            <input type="email" />
                        </div>
                        <div className={styles.form__item}>
                            <label htmlFor="">Password</label>
                            <input type="password" min={8} placeholder='Min 8 char' />
                        </div>
                        
                        <div className={styles.button__form}>
                            <button>Log in</button>
                        </div>
                        <div className={styles.login__acount}>
                            <p>Do you don't have account?</p>
                            <a href="/accounts/register">Register</a>
                        </div>
                    </form>
                </div>
                <div className={styles.background}></div>
            </section>
        </main>
    )
}

export default Login;