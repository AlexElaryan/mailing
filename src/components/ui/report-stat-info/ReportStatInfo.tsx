interface IProps {
  title: string
  value: number
  color: string
}

export const ReportStatInfo = ({color, title, value}: IProps) => {
  return (
    <div className='report-status__item'>
      <div>
        <div style={{backgroundColor: color}}></div>
        <span>{value}</span>
      </div>
      <p>{title}</p>
    </div>
  );
};