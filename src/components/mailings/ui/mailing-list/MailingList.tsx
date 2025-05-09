import { Fragment, useState } from 'react';
import './MailingList.scss';
import { mailingList } from '../../../../const';
import { MailingItem } from '../mailing-item/MailingItem';
import { Pagination } from '../../../ui/pagination/Pagination';

export const MailingList = () => {
  const filterOptions = ['ID', 'Название', 'Каналы', 'Дата и время']
  const [activeIndexFilter, setActiveIndexFilter] = useState(0)

  return (
    <div>
      <ul className='mailing__list'>
        <li className='mailing__item-wrapper'>
          {filterOptions.map((option, index) => 
            <Fragment key={index}>
              <div style={{cursor: 'pointer', backgroundColor: 'rgba(66, 153, 255, 0.2)'}} onClick={() => setActiveIndexFilter(index)} className="mailing__block">
                <p>{option}</p>
                <svg style={{opacity: filterOptions[activeIndexFilter] === option ? 1 : '0.4'}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.1665 3.5L8.16651 11.8333" stroke="#4299FF" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M3.83325 8.1665L7.88374 12.217C8.03995 12.3732 8.29322 12.3732 8.44943 12.217L12.4999 8.1665" stroke="#4299FF" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </Fragment>
          )}
          <div style={{backgroundColor: 'rgba(66, 153, 255, 0.2)'}} className="mailing__block">
            <p>Действия</p>
          </div>
        </li>
        {mailingList.map((item, index) => (
          <MailingItem key={index} {...item} bgColor={index % 2 === 0 ? 'white' : 'transparent'} />
        ))}
      </ul>
      <div className="pagination-wrapper">
        <Pagination totalPages={100} />
        <p>1-6 из 90 элементов</p>
      </div>
    </div>
  );
};