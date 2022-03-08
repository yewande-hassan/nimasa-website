import styles from "../../../../../styles/vessels.module.css";
export const Row = ({ column }) => {
  return (
    <div className={styles.row}>
      <div className={`d-flex justify-content-between my-3 mx-4`}>
        {column.map((cols, index) => (
          <p key={index}>
            <span>{cols.col}</span>
          </p>
        ))}
      </div>
    </div>
  );
};
