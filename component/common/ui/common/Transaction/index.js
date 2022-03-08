import styles from "../../../../../styles/vesselDetails.module.css";

export const Transaction =({column}) =>{
    return (
        <div>
       <tr className={`d-flex justify-content-between my-3 ${styles.column}`}>
          {column.map((cols, index) => (
            <td
              key={index}
             
            >
              <span>{cols.col}</span>
            </td>
          ))}
        
      </tr>
        </div>
    )
};

