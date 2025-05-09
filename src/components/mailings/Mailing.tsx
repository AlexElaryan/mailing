import { useState } from 'react';
import { Header } from '../header/Header';
import { MenuBar } from '../menu-bar/Menubar';
import { ProfileData } from '../profile-data/Profiledata';

import { MailingContent } from './ui/mailing-content/MailingContent';


const Mailing = () => {

  const [isModalProfileData, setisModalProfileData] = useState(false);


  return (
    <section className='mailing'>
      <Header />
      <div className='section_content'>
        <MenuBar setisModalProfileData={setisModalProfileData} />
        <MailingContent />
      </div>
      {isModalProfileData && <ProfileData setisModalProfileData={setisModalProfileData}  />}

    </section>
  );
};

export default Mailing