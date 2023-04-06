import React from 'react';
import {IoIosContacts} from "react-icons/io"
import {AiFillSetting} from "react-icons/ai";
import {BiWorld} from "react-icons/bi";

const Features = () => {
    return (
        <div >
            <div className="grid grid-cols-3 justify-items-center mt-5">
            <div  className='flex'>
            <IoIosContacts className='w-14 h-14'></IoIosContacts>
                <div>
                <h1>কর্মী প্রয়োজন</h1>
                <h1>130</h1>
                </div>
            </div>
            <div  className='flex'>
            <AiFillSetting className='w-14 h-14'></AiFillSetting>
                <div>
                <h1>চাকরির সংখ্যা</h1>
                <h1>12</h1>
                </div>
            </div>
            <div  className='flex '>
            <BiWorld className='w-14 h-14 bg-red-200'></BiWorld>

                <div>
                <h1>বিভিন্ন দেশের চাকরি</h1>
                <h1>8</h1>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Features;