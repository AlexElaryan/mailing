import { BarChart } from '@mui/x-charts';
import { ReportWrapper } from '../../../ui/wrappers/report-wrapper/ReportWrapper';
import './ReportTime.scss';
import { ReportStatInfo } from '../../../ui/report-stat-info/ReportStatInfo';

export const ReportTime = () => {
  const statList = [
    {
      date: '29 марта',
      arr: [
        {title: 'Прочитано', value: 100, color: '#1D4069'},
        {title: 'Переход по ссылке', value: 50, color: '#4299FF'},
      ]
    },
    {
      date: '30 марта',
      arr: [
        {title: 'Прочитано', value: 70, color: '#1D4069'},
        {title: 'Переход по ссылке', value: 40, color: '#4299FF'},
      ]
    },
    {
      date: '31 марта',
      arr: [
        {title: 'Прочитано', value: 80, color: '#1D4069'},
        {title: 'Переход по ссылке', value: 50, color: '#4299FF'},
      ]
    },
    {
      date: '1 апреля',
      arr: [
        {title: 'Прочитано', value: 80, color: '#1D4069'},
        {title: 'Переход по ссылке', value: 50, color: '#4299FF'},
      ]
    },
    {
      date: '2 апреля',
      arr: [
        {title: 'Прочитано', value: 30, color: '#1D4069'},
        {title: 'Переход по ссылке', value: 80, color: '#4299FF'},
      ]
    },
    {
      date: '3 апреля',
      arr: [
        {title: 'Прочитано', value: 90, color: '#1D4069'},
        {title: 'Переход по ссылке', value: 30, color: '#4299FF'},
      ]
    },
    {
      date: '4 апреля',
      arr: [
        {title: 'Прочитано', value: 100, color: '#1D4069'},
        {title: 'Переход по ссылке', value: 50, color: '#4299FF'},
      ]
    },
  ]

  const seriesData = [
    {
      label: 'Прочитано',
      data: statList.map(item => item.arr.find(el => el.title === 'Прочитано')?.value ?? 0),
      color: '#1D4069'
    },
    {
      label: 'Переход по ссылке',
      data: statList.map(item => item.arr.find(el => el.title === 'Переход по ссылке')?.value ?? 0),
      color: '#4299FF'
    }
  ];

  return (
    <div className="report-time">
      <ReportWrapper title='По взаимодействию'>
        <div className="report-time__wrapper">
          <ReportStatInfo color='#1D4069' title='Прочитано' value={100}/>
          <ReportStatInfo color='#4299FF' title='Переход по ссылке' value={25}/>
        </div>

        <BarChart
          xAxis={[{ scaleType: 'band', data: statList.map(item => item.date) }]}
          series={seriesData}
          borderRadius={9}
          className='bar-chart'
          height={300}
        />
      </ReportWrapper>
    </div>
  );
};