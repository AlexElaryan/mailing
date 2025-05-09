import { PropsWithChildren } from 'react';
import './ContentWrapper.scss';

interface IProps {
  title: string
} 

export const ContentWrapper = ({ children, title }: PropsWithChildren<IProps>) => {
  return (
    <main className='content__wrapper'>
      <h2 className='content__title'>{title}</h2>
      <div>{children}</div>
    </main>
  );
};