import { useRef, useState } from 'react';
import { CustomSelect } from '../../../ui/custom-select/CustomSelect';
import { dataTypeOptions, filterOptions, nameOptions, numberOptions } from '../../const';
import './CreateMailingSetting.scss'
import { Button } from '../../../ui/button/Button';

export const CreateMailingSetting = () => {
  const [numberOption, setNumberOption] = useState(numberOptions[0])
  const [numberValue, setNumberValue] = useState('')
  const [file, setFile] = useState<File | undefined>(undefined)

  const [dataTypeOption, setDataTypeOption] = useState(dataTypeOptions[0])
  const [filterOption, setFilterOption] = useState(filterOptions[0])
  const [nameOption, setNameOption] = useState(nameOptions[0])

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.files?.[0];
    if(result) {
      setFile(result)
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const result = event.dataTransfer.files?.[0];

    if(result) {
      setFile(result)
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className='form-setting'>
      <h5>Настройки отправки</h5>
      <div className='form-setting__number'>
        <p className='date-select__title'>Номер отправителя</p>
        <div className="date-select__time-zone">
          <CustomSelect value={numberOption} setValue={setNumberOption} options={numberOptions} />
        </div>
      </div>

      <h5 style={{fontSize: 16}}>База рассылки</h5>
      <p className='date-select__title'>Номера получателей</p>
      <textarea value={numberValue} onChange={(e) => setNumberValue(e.target.value)} className='textarea'></textarea>
      <p style={{marginTop: '12px'}} className='date-select__title'>Номера должны быть в международном формате (начинаясь с кода страны) и располагаться по одному в строке</p>
      
      <div 
        onClick={handleDivClick}         
        onDrop={handleDrop}
        onDragOver={handleDragOver} 
        className="form-setting__input-file"
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM14 18H2V2H9V7H14V18ZM4 13.01L5.41 14.42L7 12.84V17H9V12.84L10.59 14.43L12 13.01L8.01 9L4 13.01Z" fill="#4299FF"/>
        </svg>
        <p>Загрузите базу</p>
        <p><span style={{textDecoration: 'underline'}}>Загрузите файл</span> или перетащите его в эту область</p>
        <p>svg, xml (max. 3MB)</p>
      </div>

      <h5 style={{fontSize: 14}}>Загрузка из CRM</h5>
      <div className="form-setting__wrapper">
        <div className="">
          <p className='date-select__title'>Номер отправителя</p>
          <div className="date-select__time-zone">
            <CustomSelect value={dataTypeOption} setValue={setDataTypeOption} options={dataTypeOptions}/>
          </div>
        </div>

        <div className="">
          <p className='date-select__title'>Номер отправителя</p>
          <div className="date-select__time-zone">
            <CustomSelect value={filterOption} setValue={setFilterOption} options={filterOptions}/>
          </div>
        </div>

        <div className="">
          <p className='date-select__title'>Номер отправителя</p>
          <div className="date-select__time-zone">
            <CustomSelect value={nameOption} setValue={setNameOption} options={nameOptions}/>
          </div>
        </div>

        <div style={{display: 'flex', alignItems: 'end'}}>
          <Button onClick={() => {}} fullSize>Загрузить</Button>
        </div>
      </div>
    </div>
  );
};