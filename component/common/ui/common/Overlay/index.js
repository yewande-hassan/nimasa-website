import styles from "../../../../../styles/overlay.module.css";
export default function Overlay() {
    return (
        <div className={styles.overlay}>
            <div className={styles.spinner}>
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        </div>
    );
}
