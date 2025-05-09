import { useState } from 'react';
import './Search.scss';

export const Search = () => {
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className='search'>
      <input value={value} onChange={handleChange} type="text" placeholder="Поиск" className='search__input' />
      <svg className='search__image' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M14.6173 15.7445L11.0015 12.1227C8.17947 14.3512 4.10958 13.994 1.71879 11.3082C-0.671998 8.62239 -0.55519 4.53855 1.98509 1.9937C4.52549 -0.551212 8.60902 -0.675214 11.2992 1.71076C13.9893 4.0968 14.3536 8.16601 12.1302 10.992L15.746 14.6138C15.9614 14.8125 16.0506 15.1132 15.9787 15.3972C15.9066 15.6812 15.6849 15.903 15.4011 15.9753C15.1171 16.0475 14.8164 15.9585 14.6175 15.7434L14.6173 15.7445ZM1.61442 6.7868C1.60979 8.87448 2.85761 10.7612 4.78044 11.574C6.70327 12.3868 8.92604 11.9673 10.4203 10.5094C10.4353 10.4915 10.4513 10.4746 10.4672 10.4575C10.4832 10.4405 10.5012 10.4246 10.5192 10.4096C12.1596 8.73371 12.4736 6.16624 11.2851 4.14441C10.0968 2.12258 7.70089 1.14794 5.43849 1.766C3.17621 2.38412 1.60869 4.44155 1.61345 6.7868H1.61442Z" fill="#4299FF"/>
      </svg>
    </div>
  );
};