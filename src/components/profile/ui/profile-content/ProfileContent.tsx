import { Button } from '../../../ui/button/Button';
import { Link } from '../../../ui/link/Link';
import { Container } from '../../../ui/wrappers/container/Container';
import { ContentWrapper } from '../../../ui/wrappers/content-wrapper/ContentWrapper';
import './ProfileContent.scss';

export const ProfileContent = () => {
  const contactInfoList = [
    {title: 'Email', value: '12345@yandex.ru', href: '/'},
    {title: 'Телефон', value: '+7 123 456 78 91', href: '/'},
    {title: 'Часовой пояс', value: 'UTC +05:00 Asia/Yekaterinburg', href: '/'},
    {title: 'Email для уведомлений', value: 'UTC +05:00 Asia/Yekaterinburg', href: '/'},
    {title: 'Телефон для уведомлений', value: '+7 123 456 78 91', href: '/'},
  ]

  return (
    <Container>
      <ContentWrapper title='Личный кабинет'>
        <div className="profile-content">
          <div className="profile-content__wrapper">
            <div className="">
              <h4>Ваш баланс:</h4>
              <div className="profile-content__inner">

                <div className="profile-content__title">
                  <div className=""></div>
                  <p>15 000 ₽</p>
                </div>

                <div className="profile-content__title">
                  <div className=""></div>
                  <p>1700 баллов</p>
                </div>

              </div>
            </div>
            <div className="">
              <Button onClick={() => {}} withSvg>Пополнить</Button>
            </div>
          </div>

          <div className="profile-content__wrapper profile-content__create">
            <h4>Создать рассылку</h4>
            <div className="">
              <button className='profile-content__button'>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.8353 43.58V0.420898H24.6648V43.58H18.8353ZM0.153442 24.8982V19.1027H43.3466V24.8982H0.153442Z" fill="#1D4069"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="profile-content__wrapper profile-content__import">
            <h4>Импортировать контакты</h4>
            <div className="">
              <button className='profile-content__button'>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.8353 43.58V0.420898H24.6648V43.58H18.8353ZM0.153442 24.8982V19.1027H43.3466V24.8982H0.153442Z" fill="#1D4069"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="profile__contact-info">
          <div className="profile-content__wrapper">
            <h4>Личные данные</h4>
            <ul>
              {contactInfoList.map((item, index) => (
                <li key={index}>
                  <div className="">{item.title}</div>
                  <Link href={item.href}>{item.value}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentWrapper>
    </Container>
  );
};