import Link from "next/link";
import styles from '../../../../styles/sidenav.module.css'


export default function BaseLayout( {children}) {


    return (
        <>
            {/* <div className="container-fluid"> */}
                <div className='row'>
                    <div  className="col-3">
                        <nav className="navbar navbar-expand-lg navbar-light" className={styles.bg}>
                            <div className="d-flex flex-column" className={styles.nav} >
                            <div className="d-flex flex-row m-4" >
                                <img src="images/nimasa-logo.png" alt="nimasa-logo" />
                                <h2 className={styles.name} >NIMASA</h2>
                            </div>
                            <div className="d-flex flex-row m-4">
                                <img src="images/Home.svg" alt="home-icon" className={styles.icon}/>
                                <a className="navbarbrand" className = {styles.link} href="/dashboard/">Dashboard</a>
                            </div>
                            <div className="d-flex flex-row m-4">
                                <img src="images/Ship.svg" alt="home-icon" className={styles.icon}/>
                                <a className="navbarbrand" className={styles.link} href="/vessel/">Vessel</a>
                            </div>
                            </div>
                        </nav>
                    </div>
                    
                </div>
            {/* </div> */}
            {children}
        </>
    )
}