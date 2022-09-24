import React, { ReactNode } from 'react';
import Image from 'next/image';
import Share from './Share.svg';
interface Props {
  link: string;
}

const EventLinkButton = ({ link }: Props) => {
  return (
    <a href={link}>
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ padding: '10px' }}>Przejdź do wydarzenia</div>
          <Image src={Share} alt='share' />
        </div>
      </button>
    </a>
  );
};
export default EventLinkButton;
