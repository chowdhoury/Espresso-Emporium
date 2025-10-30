import React from 'react';
import cup1 from '../../assets/images/cups/Rectangle 9.png'
import cup2 from '../../assets/images/cups/Rectangle 10.png'
import cup3 from '../../assets/images/cups/Rectangle 11.png'
import cup4 from '../../assets/images/cups/Rectangle 12.png'
import cup5 from '../../assets/images/cups/Rectangle 13.png'
import cup6 from '../../assets/images/cups/Rectangle 14.png'
import cup7 from '../../assets/images/cups/Rectangle 15.png'
import cup8 from '../../assets/images/cups/Rectangle 16.png'

const FollowUs = () => {
    return (
      <div>
        <section className="flex flex-col items-center ">
          <p className="text-xl text-[#1B1A1A] raleway">Follow Us Now</p>
          <h2 className="text-[55px] text-[#331A15] mt-2 mb-4">
            Follow on Instagram
          </h2>
        </section>
        <section className="w-9/12 mx-auto grid grid-cols-4 gap-5 mb-20 mt-4">
          <img src={cup1} className="w-full rounded-xl" alt="" />
          <img src={cup2} className="w-full rounded-xl" alt="" />
          <img src={cup3} className="w-full rounded-xl" alt="" />
          <img src={cup4} className="w-full rounded-xl" alt="" />
          <img src={cup5} className="w-full rounded-xl" alt="" />
          <img src={cup6} className="w-full rounded-xl" alt="" />
          <img src={cup7} className="w-full rounded-xl" alt="" />
          <img src={cup8} className="w-full rounded-xl" alt="" />
        </section>
      </div>
    );
};

export default FollowUs;