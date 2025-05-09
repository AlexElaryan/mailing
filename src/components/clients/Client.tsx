import { useState } from 'react';
import { Header } from '../header/Header';
import { MenuBar } from '../menu-bar/Menubar';
import { ClientContent } from './ul/ClientContent';
import { ProfileData } from '../profile-data/Profiledata';
import './Client.scss';

export const Client = () => {

      const [isModalProfileData, setisModalProfileData] = useState(false);
    return (
        <section className="clients">
            <Header />
            <div className='section_content'>
                <MenuBar setisModalProfileData={setisModalProfileData} />
                <ClientContent />
            </div>
            {isModalProfileData && <ProfileData setisModalProfileData={setisModalProfileData} />}

        </section>
    )
}