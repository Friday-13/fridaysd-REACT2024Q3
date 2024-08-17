import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export interface IButtonLink extends PropsWithChildren {
  to: string;
}

function ButtonLink(props: IButtonLink) {
  return (
    <Link to={props.to}>
      <button>{props.children}</button>
    </Link>
  );
}

export default ButtonLink;
