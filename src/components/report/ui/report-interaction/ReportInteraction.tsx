import { ReportStatInfo } from '../../../ui/report-stat-info/ReportStatInfo';
import { ReportWrapper } from '../../../ui/wrappers/report-wrapper/ReportWrapper';
import './ReportInteraction.scss';
import { BarChart } from '@mui/x-charts';

export const ReportInteraction = () => {
  const arr = [
    {title: 'Прочитано', value: 100, color: '#1D4069'},
    {title: 'Не прочитано', value: 50, color: '#4299FF'},
    {title: 'Жалоба на спам', value: 25, color: '#FFFFFF'},
    {title: 'Отписка', value: 25, color: '#4299FF'},
    {title: 'Переход по ссылке', value: 25, color: 'rgba(29, 64, 105, 0.5)'},
  ]

  return (
    <ReportWrapper title='По взаимодействию'>
      <div className='report-interaction__wrapper'>
        <BarChart
          xAxis={[{ scaleType: 'band', data: [''] }]}
          series={ arr.map(item => ({data: [item.value], color: item.color}))}
          borderRadius={9}
          className='bar-chart'
          width={500}
          height={300}
        />
        <div className="report-interaction__inner">
          {arr.map((item, index) => (
            <ReportStatInfo key={index} {...item}/>
          ))}
        </div>
      </div>
    </ReportWrapper>
  );
};