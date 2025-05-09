import { useState } from 'react';
import { TimeSelect } from '../time-select/TimeSelect';
import { CustomSelect } from '../custom-select/CustomSelect';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './DateSelect.scss';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale/ru';
import { Button } from '../button/Button';

registerLocale('ru', ru);

export const DateSelect = () => {
  const [hoursFrom, setHoursFrom] = useState(12);
  const [minutesFrom, setMinutesFrom] = useState(31);

  const [hoursTo, setHoursTo] = useState(12);
  const [minutesTo, setMinutesTo] = useState(31);

  const timeZoneOptions = ['+ 1:00', '+ 2:00', '+ 3:00', '+ 4:00', '+ 5:00']
  const [timeZone, setTimeZone] = useState(timeZoneOptions[0]);

  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div className='date-select'>
      <h5>Выберите период</h5>
      <div className="date-select__inner">
        <div style={{ maxWidth: '300px', margin: '0 auto' }}>
          <DatePicker
            selected={date}
            onChange={setDate}
            dateFormat="dd/MM/yyyy"
            inline
            disabledKeyboardNavigation
            locale="ru"
          />
        </div>
        <div className="">
          <div className="">
            <p className='date-select__title'>Задайте время старта</p>
            <div className="date-select__wrapper">
              <TimeSelect hours={hoursFrom} minutes={minutesFrom} setHours={setHoursFrom} setMinutes={setMinutesFrom} />
            </div>

            <p className='date-select__title'>Задайте время завершения</p>
            <div className="date-select__wrapper">
              <TimeSelect hours={hoursTo} minutes={minutesTo} setHours={setHoursTo} setMinutes={setMinutesTo} />
            </div>

            <p className='date-select__title'>Часовой пояс</p>
            <div className="date-select__time-zone">
              <CustomSelect value={timeZone} setValue={setTimeZone} options={timeZoneOptions} />
            </div>
          </div>
        </div>
      </div>
        <Button onClick={() => {}}>
          Применить
        </Button>
    </div>
  );
};