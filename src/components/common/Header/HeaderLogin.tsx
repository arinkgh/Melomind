import React from 'react';
import { EnterBtn } from '../Butttons/EnterBtn';
import { ReservationBn } from '../Butttons/ReservationBtn';

const HeaderLogin = () => {
  return (
    // <div className="w-full sm:w-[50%] md:w-[40%] lg:w-[30%] flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-6 items-center justify-center">
    <div className="flex flex-row gap-2 items-center justify-center">
      <EnterBtn />
      <ReservationBn text="دریافت نوبت" />
    </div>
  );
};

export default HeaderLogin;