import React, { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button
      style={{
        width: '260px',
        height: ' 58px',
        background: '#006FFF 0% 0% no-repeat padding-box',
        border: '1px solid #FFFFFF',
        borderRadius: '35px',
        opacity: 1,
        fontSize: '16px',
        color: '#FFF',
      }}
    >
      {children}
    </button>
  );
};
export default Button;
