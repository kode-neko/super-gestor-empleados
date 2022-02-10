import styles from "./idcard.module.css";

const IdCard = (props) => {
  const { user } = props;
  return (
    <div className={styles.idCard}>
      <img className={styles.avatar} src={user.avatar} alt="user avatar" />
      <div className={styles.info}>
        <h3 className={styles.name}>
          {user.name} {user.surname}
        </h3>
        <ul>
          <li className={styles.location}>
            <img className={styles.icon} src="mail.png" alt="mail" />{" "}
            {user.email}
          </li>
          <li className={styles.phone}>
            <img className={styles.icon} src="phone.png" alt="phone" />{" "}
            {user.phone}
          </li>
          <li className={styles.location}>
            <img className={styles.icon} src="location.png" alt="location" />{" "}
            {user.city} ({user.state})
          </li>
        </ul>
        <div className={styles.actions}>
          <button className={styles.btn} onClick={() => console.log('Contratado')}>Contratar</button>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
