import styles from "../../../../../styles/vesselDetails.module.css";
export const Details = ({column}) =>{
    return (
        
        <div className={`d-flex flex-row justify-content-between ${styles.contain}`}>
             {column.map((cols, index) => (
            <p  className={`${styles.paragraph1}`}
              key={index}
             
            >
              <span>{cols.col}</span>
            </p>
               
          ))}
          </div>
        
             )
          }