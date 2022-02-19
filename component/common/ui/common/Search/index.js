import imgs from '../../../../../public/images/Search.svg';
import styles from '../../../../../styles/vessels.module.css';
export default function Search({height,width}) {
    return (
         <div className={styles.div}>
            <input placeholder="Search" className={`form-control m-3 ${styles.input}`}/>
            <img className= {styles.search} src={imgs.src} height={height} width={width} alt="search icon" />
        </div>
    )

}