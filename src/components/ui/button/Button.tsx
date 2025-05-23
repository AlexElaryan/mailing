import { PropsWithChildren } from 'react';

interface IProps {
  onClick: () => void
  withSvg?: boolean
  light?: boolean
  type?: "button" | "submit" | "reset"
  withBorder?: boolean
  fullSize?: boolean
}

export const Button = ({children, withSvg, light, onClick, type, withBorder, fullSize}: PropsWithChildren<IProps>) => {
  const btnStyle: React.CSSProperties  = {}
  if(fullSize) {
    btnStyle.width = '100%'
  }

  return (
    <button 
      style={btnStyle} 
      type={type ? type : 'button'} 
      onClick={onClick} 
      className={`button ${light ? 'button-light' : ''} ${withBorder ? 'button-border' : ''}`}
    >
      {withSvg && 
        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.25 5.75H6.75V1.25C6.75 1.05109 6.67098 0.860322 6.53033 0.71967C6.38968 0.579018 6.19891 0.5 6 0.5C5.80109 0.5 5.61032 0.579018 5.46967 0.71967C5.32902 0.860322 5.25 1.05109 5.25 1.25V5.75H0.75C0.551088 5.75 0.360322 5.82902 0.21967 5.96967C0.0790178 6.11032 0 6.30109 0 6.5C0 6.69891 0.0790178 6.88968 0.21967 7.03033C0.360322 7.17098 0.551088 7.25 0.75 7.25H5.25V11.75C5.25 11.9489 5.32902 12.1397 5.46967 12.2803C5.61032 12.421 5.80109 12.5 6 12.5C6.19891 12.5 6.38968 12.421 6.53033 12.2803C6.67098 12.1397 6.75 11.9489 6.75 11.75V7.25H11.25C11.4489 7.25 11.6397 7.17098 11.7803 7.03033C11.921 6.88968 12 6.69891 12 6.5C12 6.30109 11.921 6.11032 11.7803 5.96967C11.6397 5.82902 11.4489 5.75 11.25 5.75Z" fill={light ? '#4299FF' : '#fff' }/>
        </svg> 
      }
      {children}
    </button>
  );
};