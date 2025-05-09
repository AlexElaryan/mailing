import { useState } from 'react';
import { Select } from '../../../ui/select/Select';
import { Container } from '../../../ui/wrappers/container/Container';
import { ContentWrapper } from '../../../ui/wrappers/content-wrapper/ContentWrapper';
import { options } from '../../../../const';
import { Search } from '../../../ui/search/Search';
import { MailingList } from '../mailing-list/MailingList';
import './MailingContent.scss';

export const MailingContent = () => {
  const [activeOptionsValue, setActiveOptionsValue] = useState(options[0])

  return (
    <Container>
      <ContentWrapper title='Рассылки'>
        <div className="mailing__content_top">
          <Select 
            activeOptionsValue={activeOptionsValue} 
            setActiveOptionsValue={setActiveOptionsValue} 
            options={options}  
          />
          <Search />
        </div>
        <MailingList />
      </ContentWrapper>
    </Container>
  );
};