import Link from 'next/link';
import styles from '../../../../../styles/vessels.module.css';
export default function Buttongreen() {
    return (
        <Link passHref href="/main/vessel/modal" _hover={{ textDecor: "none" }}>
        <button type="button" className={`btn mx-4 ${styles.btnsuccess}`}>Add Vessel</button>
       </Link>
    )

}

