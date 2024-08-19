import { useAppSelector } from "@configs/redux-hooks";
import ButtonLink from "../components/button-link/button-link";
import { usersSelector } from "@configs/store";
import UserCard from "@views/user-card/user-card";
import styles from "./roots.module.scss";

function Root() {
  const users = useAppSelector(usersSelector);

  return (
    <>
      <ButtonLink to={"/uncontrolled-components-form"}>
        Uncontrolled components form
      </ButtonLink>
      <ButtonLink to={"/react-hook-form"}> React hook form</ButtonLink>
      <div className={styles.usersTile}>
        {users.value.map((user, index) => (
          <UserCard {...user} key={index} />
        ))}
      </div>
    </>
  );
}

export default Root;
