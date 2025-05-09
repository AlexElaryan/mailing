import { Header } from '../header/Header';
import './Report.scss'
import { ReportContent } from './ui/report-content/ReportContent';

const Report = () => {
  return (
    <section className='report'>
      <Header />
      <ReportContent />
    </section>
  );
};

export default Report