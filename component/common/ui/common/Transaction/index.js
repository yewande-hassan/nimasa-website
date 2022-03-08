import styles from "../../../../../styles/vesselDetails.module.css";
export const Transaction = ({ column }) => {
  return (
    <div className={styles.row}>
      <div className={`d-flex justify-content-between my-2 ${styles.column}`}>
        {column.map((cols, index) => (
          <p key={index}>
            <span>{cols.col}</span>
          </p>
        ))}
      </div>
    </div>
  );
};
