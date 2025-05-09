import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  ArcElement,
  ChartData,
} from 'chart.js';
import './ReportStatus.scss'
import { ReportStatInfo } from '../../../ui/report-stat-info/ReportStatInfo';
import { ReportWrapper } from '../../../ui/wrappers/report-wrapper/ReportWrapper';

ChartJS.register(Title, ArcElement);

export const ReportStatus = () => {
  const data: ChartData<"doughnut", number[], string> = {
    datasets: [
      {
        data: [130, 150, 50],
        backgroundColor: ['#4299FF', '#1D4069', '#ffffff'],
        borderWidth: 0,
        borderRadius: 2,
      },
    ],
  };

  return (
    <ReportWrapper title='По статусам'>
      <div className="report-status">
        <div style={{ width: '218px', height: '218px' }}>
          <Doughnut data={data} />
        </div>
        <div className="report-status__wrapper">
          <ReportStatInfo color='#1D4069' title='Отправлено' value={150}/>
          <ReportStatInfo color='#4299FF' title='Доставлено' value={130}/>
          <ReportStatInfo color='#fff' title='Ожидает отправки' value={50}/>
        </div>
      </div>
    </ReportWrapper>
  );
};