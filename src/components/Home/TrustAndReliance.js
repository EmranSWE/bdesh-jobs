import React from 'react';
import promo from "../../assets/promo-video-home.jpg";
import iom from "../../assets/IOM.png";
import bdjobs from '../../assets/Bdjobs-logo.png'
const TrustAndReliance = () => {
    return (
        <div className='pt-10 lg:pb-36 border-b-2 border-indigo-500' style={{backgroundColor:"#ECEFF1"}}>
            <div className='grid lg:grid-cols-2  sm:grid-cols-1 justify-items-center '>
                <div className='lg:ml-56' >
                    <h1 className='text-2xl font-bold my-4'>আস্থা ও নির্ভরতায় বিদেশ জবস্‌</h1>
                    <div >
                        <a data-fancybox="" href="https://youtu.be/e3wpqRBmWGU">
                            <img src={promo} alt="promotional Video" className="border rounded-lg" />
                        </a>
                    </div>
                </div>
                <div className='lg:mr-52' style={{ marginLeft: '-1rem' }}>
                    <h3 className='text-2xl font-bold my-4'>যৌথ ব্যবস্থাপনায়</h3>
                    <div class="flex gap-4">
                        <a class="partner-wrap" href="http://www.bdjobs.com/bn/defaultbn.asp" target="_blank">

                            <img src={bdjobs} className="border rounded-lg p-8  bg-white w-40 h-28 " alt='bdjobs logo' />

                        </a>
                        <a class="partner-wrap" href="https://bangladesh.iom.int/" target="_blank">

                            <img src={iom} className="border rounded-lg p-6 bg-white h-28  w-40" alt='IOM logo' />

                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TrustAndReliance;