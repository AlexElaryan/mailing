import { Header } from '../header/Header';
import './Profile.scss';
import { ProfileContent } from './ui/profile-content/ProfileContent';

const Profile = () => {
  return (
    <section className='mailing'>
      <Header />
      <ProfileContent />
    </section>
  );
};

export default Profile