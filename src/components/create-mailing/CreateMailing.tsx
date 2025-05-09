import { Header } from '../header/Header';
import './CreateMailing.scss'
import { CreateMailingContent } from './ul/CreateMailingContent';

const CreateMailing = () => {
  return (
    <section className='mailing'>
      <Header isCreateMailingPage />
      <CreateMailingContent />
    </section>
  );
};

export default CreateMailing