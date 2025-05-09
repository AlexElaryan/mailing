import { PropsWithChildren } from 'react';
import './Container.scss'

interface IProps {
  className?: string
}

export const Container = ({ children, className }: PropsWithChildren<IProps>) => {
  return (
    <div className={`container ${className ?? ''}`}>
      {children}
    </div>
  );
};