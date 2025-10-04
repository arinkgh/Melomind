import React from 'react';
import { EnterBtn } from '../Butttons/EnterBtn';
import { ReservationBn } from '../Butttons/ReservationBtn';

const HeaderLogin = () => {
  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      <EnterBtn />
      <ReservationBn text="دریافت نوبت" />
    </div>
  );
};

export default HeaderLogin;