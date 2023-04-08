import React from 'react';
import {IoIosContacts} from "react-icons/io"
import {AiFillSetting} from "react-icons/ai";
import {BiWorld} from "react-icons/bi";

const Features = () => {
    return (
        <div >
            <div className="grid grid-cols-3 justify-items-center mt-5 p-10 ">
            <div  className='lg:flex items-center'>
            <IoIosContacts className='w-14 h-14' style={{color: "#F44336"}}></IoIosContacts>
                <div>
                <h1 className='font-bold font-black'>কর্মী  প্রয়োজন</h1>
                <h1 className='text-xl font-bold' style={{color:"#F44336"}}>130</h1>
                </div>
            </div>
            <div  className='lg:flex items-center'>
            <AiFillSetting className='w-14 h-14' style={{color:"#4CAF50"}}></AiFillSetting>
                <div>
                <h1 className='font-bold font-black'>চাকরির সংখ্যা</h1>
                <h1 className='text-xl font-bold' style={{color:"#4CAF50"}}>12</h1>
                </div>
            </div>
            <div  className='lg:flex items-center'>
            <BiWorld className='w-14 h-14' style={{color:"#FF9800"}}></BiWorld>

                <div>
                <h1 className='font-bold font-black'>বিভিন্ন দেশের চাকরি</h1>
                <h1 className='text-xl font-bold' style={{color:"#FF9800"}}>৮</h1>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Features;