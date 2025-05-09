import { useState } from "react";
import { Select } from "../../../ui/select/Select";
import { Container } from "../../../ui/wrappers/container/Container";
import { ContentWrapper } from "../../../ui/wrappers/content-wrapper/ContentWrapper";
import { mailingList, options } from "../../../../const";
import { SelectPeriod } from "../../../ui/select-period/SelectPeriod";
import { MailingItem } from "../../../mailings/ui/mailing-item/MailingItem";
import { ReportStatus } from "../report-status/ReportStatus";
import { ReportInteraction } from "../report-interaction/ReportInteraction";
import { ReportTime } from "../report-time/ReportTime";
import './ReportContent.scss'

export const ReportContent = () => {
  const [activeOptionsValue, setActiveOptionsValue] = useState(options[0])
  return (
    <Container>
      <ContentWrapper title='Отчёты по рассылкам'>
        <div className="report__content_top">
          <Select activeOptionsValue={activeOptionsValue} setActiveOptionsValue={setActiveOptionsValue} options={options} />
          <SelectPeriod />
        </div>
        <ul className="mailing__list">
          <MailingItem withTitle {...mailingList[0]} />
        </ul>
        <div style={{display: 'grid', justifyContent: 'space-between', gap: '20px', gridTemplateColumns: '4fr 6fr'}}>
          <ReportStatus />
          <ReportInteraction />
        </div>
        <ReportTime />
      </ContentWrapper>
    </Container>
  );
};