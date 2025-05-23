import { useEffect, useRef, useState } from 'react';
import './CustomSelect.scss'

interface IProps {
  value: any
  setValue: (value: any) => void
  options: any[]
}

export const CustomSelect = ({value, setValue, options}: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: any) => {
    setValue(option)
  }

  return (
    <div className="select__wrapper">
      <div onClick={() => setIsOpen(true)} ref={selectRef} className='select'>
        <p>{value}</p>
        <svg className='select__arrow' style={{rotate: isOpen ? '-180deg': ''}} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.17019C10.8126 0.983936 10.5592 0.879395 10.295 0.879395C10.0308 0.879395 9.77737 0.983936 9.59001 1.17019L6.00001 4.71019L2.46001 1.17019C2.27265 0.983936 2.0192 0.879395 1.75501 0.879395C1.49082 0.879395 1.23737 0.983936 1.05001 1.17019C0.956281 1.26315 0.881887 1.37375 0.831118 1.49561C0.780349 1.61747 0.754211 1.74818 0.754211 1.88019C0.754211 2.0122 0.780349 2.1429 0.831118 2.26476C0.881887 2.38662 0.956281 2.49722 1.05001 2.59019L5.29001 6.83019C5.38297 6.92392 5.49357 6.99831 5.61543 7.04908C5.73729 7.09985 5.868 7.12599 6.00001 7.12599C6.13202 7.12599 6.26273 7.09985 6.38459 7.04908C6.50645 6.99831 6.61705 6.92392 6.71001 6.83019L11 2.59019C11.0937 2.49722 11.1681 2.38662 11.2189 2.26476C11.2697 2.1429 11.2958 2.0122 11.2958 1.88019C11.2958 1.74818 11.2697 1.61747 11.2189 1.49561C11.1681 1.37375 11.0937 1.26315 11 1.17019Z" fill="#4299FF"/>
        </svg>
      </div>
      <ul className={`select__options ${isOpen ? '' : 'select__options-hidden'}`}>
        {options.map((option, index) => (
          <li onClick={() => handleSelect(option)} key={index} className='select__option'>{option}</li>
        ))}
      </ul>
    </div>
  );
};