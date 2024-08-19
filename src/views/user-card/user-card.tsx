import { IUserInStore } from "@configs/registration-form-types";
import styles from "./user-card.module.scss";

function UserCard(props: IUserInStore) {
  return (
    <div className={styles.card}>
      <div className={styles.userInfo}>
        <h3>{props.userName}</h3>

        <div className={styles.imageWrapper}>
          <img src={props.userImage} alt={props.userName} />
        </div>
        <ul>
          <li>Age: {props.userAge}</li>
          <li>Email: {props.userEmail}</li>
          <li>Gender: {props.userGender}</li>
          <li>Countrie: {props.userCountrie}</li>
        </ul>
      </div>
    </div>
  );
}

export default UserCard;
