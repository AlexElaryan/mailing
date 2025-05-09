import React, { useState } from 'react';
import './TimeSelect.scss'
import { CustomSelect } from '../custom-select/CustomSelect';

interface IProps {
  hours: number
  setHours: (hours: number) => void

  minutes: number
  setMinutes: (minutes: number) => void
}

export const TimeSelect = ({hours, minutes, setHours, setMinutes}: IProps) => {
  const hoursOptions = Array.from({ length: 24 }, (_, index) => index);
  const minutesOptions = Array.from({ length: 60 }, (_, index) => index);

  return (
    <div className='time-selector'>
      <div className='time-selector__wrapper'>
        <CustomSelect value={hours} setValue={setHours} options={hoursOptions} />
        <p className='time-selector__text'>Час</p>
      </div>

      <div className='time-selector__wrapper'>
        <CustomSelect value={minutes} setValue={setMinutes} options={minutesOptions} />
        <p className='time-selector__text'>Мин</p>
      </div>
    </div>
  );
};
