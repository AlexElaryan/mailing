import { useEffect, useRef, useState } from 'react';
import { Container } from '../../ui/wrappers/container/Container';
import { ContentWrapper } from '../../ui/wrappers/content-wrapper/ContentWrapper';
import './CreateMailingContent.scss';
import { channals } from '../const';
import { Button } from '../../ui/button/Button';
import { DateSelect } from '../../ui/date-select/DateSelect';
import { CreateMailingSetting } from './create-mailing-setting/CreateMailingSetting';
import { SendMessage } from './send-message/SendMessage';

export const CreateMailingContent = () => {
  const [activeChannal, setActiveChannal] = useState(channals[0])

  const [dateFrom, setDateFrom] = useState('6.02.2025; 14:00');
  const [dateTo, setDateTo] = useState('12.03.2025; 19:00');

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

  const handleSelectDate = () => {
    setIsOpen(true)
  }

  return (
    <Container>
      <ContentWrapper title='Создать новую рассылку'>
        <form>
          <div>
            <div className="create-mailing__title">Выберите канал отправки.</div>
            <div className="create-mailing__select-channal">
              {channals.map(channal => (
                <button
                  type='button'
                  key={channal}
                  onClick={() => setActiveChannal(channal)}
                  style={activeChannal === channal ? { color: '#fff', backgroundColor: '#4299FF' } : {}}
                >
                  {channal}
                </button>
              ))}
            </div>
          </div>

          <div className="create-mailing__name">
            <div className="create-mailing__title">Название рассылки</div>
            <div className="create-mailing__name-block">
              Моя рассылочка
            </div>
          </div>

          <div className="create-mailing__date">
            <h5>Период рассылки</h5>
            <div className="create-mailing__date_wrapper">
              <div className="create-mailing__date_inner">
                <p>Выберите период рассылки</p>
                <div ref={selectRef} className="create-mailing__date-select">
                  <span className='create-mailing__date-select-span'>с {dateFrom} - по {dateTo}</span>
                  <Button onClick={handleSelectDate} withSvg>Выбрать</Button>
                  {isOpen && <DateSelect />}
                </div>
              </div>
              <div className="create-mailing__date_inner">
                <div className='create-mailing__count-title'>
                  <p>Количество отправляемых сообщений в сутки</p>

                  <div>
                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.99968 7.3335C7.82287 7.3335 7.6533 7.40373 7.52827 7.52876C7.40325 7.65378 7.33301 7.82335 7.33301 8.00016V10.6668C7.33301 10.8436 7.40325 11.0132 7.52827 11.1382C7.6533 11.2633 7.82287 11.3335 7.99968 11.3335C8.17649 11.3335 8.34606 11.2633 8.47108 11.1382C8.59611 11.0132 8.66634 10.8436 8.66634 10.6668V8.00016C8.66634 7.82335 8.59611 7.65378 8.47108 7.52876C8.34606 7.40373 8.17649 7.3335 7.99968 7.3335ZM8.25301 4.72016C8.0907 4.65348 7.90865 4.65348 7.74634 4.72016C7.66451 4.75189 7.58975 4.79947 7.52634 4.86016C7.46746 4.92496 7.42011 4.99937 7.38634 5.08016C7.34902 5.15928 7.33076 5.24604 7.33301 5.3335C7.3325 5.42123 7.34932 5.50821 7.3825 5.58943C7.41567 5.67066 7.46456 5.74454 7.52634 5.80683C7.59115 5.86572 7.66555 5.91307 7.74634 5.94683C7.84734 5.98832 7.95699 6.00437 8.06564 5.99357C8.1743 5.98277 8.27863 5.94544 8.36949 5.88488C8.46034 5.82431 8.53492 5.74235 8.58668 5.64621C8.63845 5.55007 8.6658 5.44268 8.66634 5.3335C8.66389 5.15698 8.59483 4.98792 8.47301 4.86016C8.40961 4.79947 8.33485 4.75189 8.25301 4.72016ZM7.99968 1.3335C6.68114 1.3335 5.3922 1.72449 4.29588 2.45703C3.19955 3.18957 2.34506 4.23077 1.84048 5.44894C1.3359 6.66711 1.20387 8.00756 1.46111 9.30076C1.71834 10.594 2.35328 11.7819 3.28563 12.7142C4.21798 13.6466 5.40587 14.2815 6.69908 14.5387C7.99228 14.796 9.33273 14.6639 10.5509 14.1594C11.7691 13.6548 12.8103 12.8003 13.5428 11.704C14.2754 10.6076 14.6663 9.3187 14.6663 8.00016C14.6663 7.12468 14.4939 6.25778 14.1589 5.44894C13.8238 4.6401 13.3328 3.90517 12.7137 3.28612C12.0947 2.66706 11.3597 2.176 10.5509 1.84097C9.74206 1.50593 8.87516 1.3335 7.99968 1.3335ZM7.99968 13.3335C6.94484 13.3335 5.9137 13.0207 5.03664 12.4347C4.15957 11.8486 3.47599 11.0157 3.07232 10.0411C2.66865 9.0666 2.56304 7.99425 2.76882 6.95968C2.97461 5.92512 3.48256 4.97481 4.22844 4.22893C4.97432 3.48305 5.92463 2.9751 6.9592 2.76931C7.99376 2.56352 9.06612 2.66914 10.0407 3.07281C11.0152 3.47647 11.8481 4.16006 12.4342 5.03712C13.0202 5.91418 13.333 6.94533 13.333 8.00016C13.333 9.41465 12.7711 10.7712 11.7709 11.7714C10.7707 12.7716 9.41417 13.3335 7.99968 13.3335Z" fill="#4299FF" />
                    </svg>
                    <span className='create-mailing__count-info'>Waba - лимиты на исходящие сообщения можно посмотреть на вашей странице. FaceBook Business WhatsApp и иное - Отправляет сообщения с небольшой погрешностью в диапазоне отправки для снижения шанса блокировки аккаунта
                      <svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 0L6.5 6L0.5 9.53674e-07L12.5 0Z" fill="#4299FF" />
                      </svg>

                    </span>
                  </div>
                </div>
                <div ref={selectRef} className="create-mailing__date-select">
                  <input type='number' className='create-mailing__date-select-span' style={{ outline: 'none' }} />
                </div>
              </div>

              {/* <div className="create-mailing__date_inner">
                <p>Выберите Диапазон отправки</p>
                <div className="create-mailing__date-select">
                  <input placeholder='1' type='number' className='create-mailing__range-input'/>
                  <div className="create-mailing__range-decor"></div>
                  <input placeholder='10 000' type='number' className='create-mailing__range-input'/>
                </div>
              </div> */}
            </div>
          </div>
          <CreateMailingSetting />
          <SendMessage />
          <div style={{ marginTop: '20px' }}>
            <Button onClick={() => { }} fullSize>Создать рассылку</Button>
          </div>
        </form>
      </ContentWrapper>
    </Container>
  );
};