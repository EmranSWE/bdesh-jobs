import React from 'react';
import { BiWorld } from 'react-icons/bi';
import bdeshJatra from '../../assets/bdesh_jatra.svg'
import SilderPage from './SilderPage';
import bg from "../../assets/9978615_4273996.jpg"
const ContentSlider = () => {
    return (
        <div className="bg-cover bg-center text-white text-xl font-bold" style={{ backgroundImage: `url(${bg})`  }}>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3">
                    <h1>সঠিক চাকরি খুঁজে নিন</h1>
                    <div>
                        <div className='flex'>
                            <BiWorld></BiWorld>
                            <h1> খুঁজে নিন
                                কাঙ্ক্ষিত পেশা</h1>
                        </div>
                        <input type="text" placeholder="ড্রাইভার, ইলেকট্রিশিয়ান ইত্যাদি" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div>
                        <div className='flex'>
                            <BiWorld></BiWorld>
                            <h1> দক্ষতার ধরন</h1>
                        </div>
                        <input type="text" placeholder="দক্ষতার ধরন নির্বাচন" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div>
                        <div className='flex'>
                            <BiWorld></BiWorld>
                            <h1> দেশ</h1>
                        </div>
                        <input type="text" placeholder="দেশ নির্বাচন" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <button className="btn btn-warning">Button</button>
                </div>
                <div className='col-span-5'>
                <SilderPage></SilderPage>
                </div>
                <div className='col-span-3'>
                    <h1>বিভিন্ন দেশে কর্মী প্রয়োজন</h1>
                    <h1>সংযুক্ত আরব আমীরাত</h1>
                    <h1>সৌদি আরব </h1>
                    <h1>জাপান</h1>
                    <h1>দক্ষিণকোরিয়া</h1>
                    <h1>মালয়েশিয়া</h1>
                    <h1>ওমান</h1>
                    <h1>সব দেশ</h1>
                    <img src={bdeshJatra} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContentSlider;