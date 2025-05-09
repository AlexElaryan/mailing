import { PropsWithChildren } from "react";
import './Link.scss'

interface IProps {
  href: string
}

export const Link = ({children, href}: PropsWithChildren<IProps>) => {
  return (
    <a href={href} className="link">
      {children}
    </a>
  );
};