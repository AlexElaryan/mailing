import './ProfileData.scss'

type ProfileDataProps = {
    setisModalProfileData: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ProfileData: React.FC<ProfileDataProps> = ({ setisModalProfileData }) => {
    return (
        <div className='modal-block profile-data'
            onClick={(e) => {
                const target = e.target as HTMLElement;
                if (!target.closest('.profile-data_modal')) {
                    setisModalProfileData(false);
                }
            }}

        >
            <div className="profile-data_modal">
                <div className="profile-data-top">
                    <div className="menu-bar__user-info__avatar">
                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M54.5834 27.4998C54.5834 42.458 42.4582 54.5832 27.5001 54.5832C12.542 54.5832 0.416748 42.458 0.416748 27.4998C0.416748 12.5417 12.542 0.416504 27.5001 0.416504C42.4582 0.416504 54.5834 12.5417 54.5834 27.4998ZM35.6251 19.3748C35.6251 21.5297 34.7691 23.5963 33.2453 25.1201C31.7216 26.6438 29.655 27.4998 27.5001 27.4998C25.3452 27.4998 23.2786 26.6438 21.7548 25.1201C20.2311 23.5963 19.3751 21.5297 19.3751 19.3748C19.3751 17.22 20.2311 15.1533 21.7548 13.6296C23.2786 12.1059 25.3452 11.2498 27.5001 11.2498C29.655 11.2498 31.7216 12.1059 33.2453 13.6296C34.7691 15.1533 35.6251 17.22 35.6251 19.3748ZM27.5001 50.5207C32.1483 50.5281 36.6889 49.1217 40.519 46.488C42.1549 45.364 42.8536 43.2244 41.9003 41.483C39.9313 37.8728 35.8688 35.6248 27.5001 35.6248C19.1313 35.6248 15.0688 37.8728 13.0972 41.483C12.1465 43.2244 12.8453 45.364 14.4811 46.488C18.3113 49.1217 22.8518 50.5281 27.5001 50.5207Z" fill="#1D4069" />
                        </svg>
                    </div>
                    <h2>Ваши даные</h2>
                    <span>ID: 12345</span>
                </div>
                <div className="profile-data_modal-block">

                    <div className="profile-data_modal-block-item">
                        <h3>Имя пользователя:</h3>
                        <input type="text" value={'Иванов Иван Иванович'} disabled />
                    </div>
                    <div className="profile-data_modal-block-item">
                        <h3>Пароль</h3>
                        <div className='profile-password'>
                            <input type="password" value={'1dafdasffsdf'} disabled />
                            <span className='toggle-password'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14.3999C8.29762 14.3999 5.69762 12.5567 3.99522 10.6655C3.06551 9.62457 2.28522 8.45926 1.67682 7.20314L1.54882 6.91514L1.54242 6.90394L0.800017 7.19994L0.0576172 7.49754V7.50074L0.0624172 7.50714L0.104017 7.60794L0.228817 7.88474C0.903813 9.28176 1.77088 10.5775 2.80482 11.7343C4.70402 13.8431 7.70242 15.9999 12 15.9999V14.3999ZM23.2 7.19994L22.4576 6.90234L22.4528 6.91514L22.4288 6.97114L22.3232 7.20314C21.7148 8.45926 20.9345 9.62457 20.0048 10.6655C18.304 12.5567 15.7024 14.3999 12 14.3999V15.9999C16.2976 15.9999 19.2976 13.8431 21.1952 11.7343C22.2292 10.5775 23.0962 9.28176 23.7712 7.88474C23.8294 7.76008 23.8849 7.63419 23.9376 7.50714L23.9408 7.50074V7.49914L23.2 7.19994ZM12.8 19.1999V15.1999H11.2V19.1999H12.8ZM2.16642 16.5663L5.36642 13.3663L4.23362 12.2335L1.03362 15.4335L2.16642 16.5663ZM18.6336 13.3663L21.8336 16.5663L22.9664 15.4335L19.7664 12.2335L18.6336 13.3663Z" fill="#4299FF" /></svg>
                            </span>
                        </div>
                    </div>
                    <div className="profile-data_modal-block-item">
                        <h3>Email</h3>
                        <input type="text" value={'mail@mail.ru'} disabled />
                    </div>
                    <div className="profile-data_modal-block-item">
                        <h3>ИНН компании:</h3>
                        <input type="text" value={'123456789123'} disabled />
                    </div>
                    <div className="profile-data_modal-block-item">
                        <h3>Номер телефона:</h3>
                        <input type="text" value={'8123456789'} disabled />
                    </div>
                    <div className="profile-data_modal-block-item">
                        <h3>Оператор ЭДО: </h3>
                        <input type="text" value={'ООО Такском'} disabled />
                    </div>
                </div>
                <button className='button'>Изменить данные</button>
            </div>
        </div >
    )
}