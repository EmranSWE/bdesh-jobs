import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { FaBriefcase } from 'react-icons/fa';
import { HiMapPin } from 'react-icons/hi2';

import bdeshJatra from '../../assets/bdesh_jatra.svg'
import SilderPage from './SilderPage';
import biodata from "../../assets/skills/submit_biodata.png"
const ContentSlider = () => {
    return (
        <div className="bg-cover bg-center text-white font-bold " >
            <div className="grid lg:grid-cols-3 gap-2  sm:grid-cols-1">
                <div className="lg:col-span-1 banner-l">
                    <div className='lg:ps-36 p-5 '>
                        <h1 className='text-xl lg:my-2'> সঠিক চাকরি খুঁজে নিন</h1>
                        <div>
                            <div className='flex items-center gap-2 lg:my-2'>
                                <FaBriefcase />
                                <h1>
                                    কাঙ্ক্ষিত পেশা</h1>
                            </div>

                            <input type="text" placeholder="ড্রাইভার, ইলেকট্রিশিয়ান ইত্যাদি" className="input input-bordered input-sm w-full max-w-xs" />
                        </div>
                        <div>
                            <div className='flex items-center gap-2 lg:my-2'>
                                <BiWorld></BiWorld>
                                <h1> দক্ষতার ধরন</h1>
                            </div>
                           
                            <select className="select select-bordered select-sm w-full max-w-xs text-black" placeholder='hello'>
                                <option disabled selected>দক্ষতার ধরন নির্বাচন</option>
                                <option>সম্পূর্ণ দক্ষ</option>
                                <option>মাঝারি দক্ষ</option>
                                <option>কম দক্ষ</option>
                            </select>
                        </div>
                        <div>
                            <div className='flex items-center gap-2 lg:my-2'>
                                <HiMapPin />
                                <h1> দেশ</h1>
                            </div>
                            <select className="select select-bordered select-sm w-full max-w-xs text-black" placeholder='hello'>
                                <option disabled selected>দেশ নির্বাচন</option>
                                <option>সংযুক্ত আরব আমীরাত (United Arab Emirates)</option>
                                <option>সৌদি আরব (Saudi Arabia)</option>
                                <option>জাপান (Japan)</option>
                                <option>দক্ষিণকোরিয়া (South Korea)</option>
                                <option>মালয়েশিয়া (Malaysia)</option>
                                <option>ডেনমার্ক (Denmark)</option>
                                <option>জর্ডান (Jordan)</option>
                            </select>
                        </div>
                        <button className="btn btn-warning lg:my-2">অনুসন্ধান</button>
                    </div>
                </div>
                <div >
                    <SilderPage></SilderPage>
                </div>
                <div className=' '>
                <div className='banner-r'>
                    <h1 className='text-xl py-4'>বিভিন্ন দেশে কর্মী প্রয়োজন</h1>
                    <h1>সংযুক্ত আরব আমীরাত (৪৫)</h1>
                    <h1>সৌদি আরব (৩৫)</h1>
                    <h1>জাপান (২৫)</h1>
                    <h1>দক্ষিণকোরিয়া (১১)</h1>
                    <h1>মালয়েশিয়া (৬)</h1>
                    <h1>ওমান (৬)</h1>
                    <h1>সব দেশ</h1>
                    <div className='flex items-center lg:w-48 p-2 rounded text-black m-2 gap-2' style={{ backgroundColor: "#FFDC79" }}>
                        <img src={biodata} alt="" />
                        <p>Submit your <br /> Biodata</p>
                    </div>
                    <div className='lg:w-48 rounded  m-2 p-2 gap-2' style={{ backgroundColor: "#ffffff" }}>
                        <img src={bdeshJatra} alt="" />
                        <p style={{ color: "#0C4C9C" }}>অভিবাসন বিষয়ক তথ্য</p>


                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSlider;