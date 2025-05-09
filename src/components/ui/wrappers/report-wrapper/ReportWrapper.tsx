import { PropsWithChildren } from 'react';
import './ReportWrapper.scss';

interface IProps {
  title: string
}

export const ReportWrapper = ({ children }: PropsWithChildren<IProps>) => {
  return (
    <div className='report-wrapper'>
      <h5>По статусам</h5>
      <div className="report-inner">
        {children}
      </div>
    </div>
  );
};