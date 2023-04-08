import React from 'react';
import gp from "../../assets/google-play-badge.svg";
import qsn from '../../assets/question-icon.png'
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-white text-base-content lg:px-40">
        <div>
          <span className=" text-black  font-bold text-xl">আমাদের সম্পর্কে</span>
          <a className="link link-hover hover:no-underline " href="https://www.bdjobs.com/bn/aboutbn.asp">এই ওয়েবসাইট সম্পর্কিত</a>
          <a className="link link-hover hover:no-underline"  href="https://www.bdjobs.com/tos.asp">শর্তাবলী এবং নীতিমালা</a>
          <a className="link link-hover hover:no-underline" href="https://forms.gle/ekcdUqTRcmt6yVnK8">ফিডব্যাক</a>
        </div>
        <div>
          <span className=" text-black  font-bold text-xl">চাকরিপ্রার্থীদের জন্য</span>
          <a className="link link-hover hover:no-underline" href="https://bdesh.bdjobs.com/bn/registration/createaccount_bdeshbn.asp">নতুন অ্যাকাউন্ট</a>
          <a className="link link-hover hover:no-underline" href="https://bdesh.bdjobs.com/bn/User_guide_foreign_jobbn.asp?ug=1">ক্যারিয়ার পরামর্শ</a>
          <a className="link link-hover hover:no-underline"  href="https://mybdjobs.bdjobs.com/bn/mybdjobs/faqbn.asp">প্রশ্নাবলী</a>
        </div>
        <div>
          <span className=" text-black  font-bold text-xl">নিয়োগদাতাদের জন্য</span>
          <a className="link link-hover hover:no-underline" href="https://corporate3.bdjobs.com/Corporate_NewAccount.asp">অ্যাকাউন্ট তৈরি</a>
          <a className="link link-hover hover:no-underline" href="https://corporate3.bdjobs.com/services.asp">পণ্য/সার্ভিস</a>
          <a className="link link-hover hover:no-underline"  href="https://corporate3.bdjobs.com/">চাকরি পোস্ট</a>
          <a className="link link-hover hover:no-underline" href="https://corporate3.bdjobs.com/help/help.asp">প্রশ্নাবলী</a>
        </div>
        <div>
          <span className=" text-black  font-bold text-xl">টুলস ও সামাজিক মিডিয়া</span>
          <a className="link link-hover hover:no-underline" href="https://play.google.com/store/apps/details?id=com.bdjobs.bdesh" target="_blank">Download Mobile App</a>
          <img src={gp} alt="" />
        </div>
        <div>
          <span className=" text-black  font-bold text-xl">যোগাযোগ</span>
          <a className="link link-hover hover:no-underline">চাকরি সংক্রান্ত যেকোনো 
          <br /> প্রয়োজনে সরাসরি</a>
          <div className='flex gap-3 sm:items-center'>
            <img src={qsn} alt="" />
            <div>
              <h1 className='font-bold text-black'>সাহায্যের জন্য কল করুন
                <br />
               <span className='text-2xl font-bold hover:no-underline' style={{color:"#F50057"}}>16479</span>  </h1>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;