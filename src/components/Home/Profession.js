import React, { useState } from 'react';
import ProfessionalGuidlines from './ProfessionalGuidlines';
import Skills from './Skills';
import thousand from "../../assets/skills/thousand_cv.png";
import makeBIO from "../../assets/skills/make-bio.png";
const Profession = () => {
    const [showFirstContent, setShowFirstContent] = useState(true);

    function handleButtonClick() {
        setShowFirstContent(!showFirstContent);
    }
    return (
        <div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 bg-gray-100 lg:px-20 lg:py-20'>
                <section className='lg:col-span-3 sm:col-span-1 '>
                    <div className='flex justify-between lg:mt-2'>
                        <div>
                            <h1 className='text-xl font-bold'>পেশা</h1>
                        </div>
                        <div>
                            <div className='flex'>

                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}> স্পেশাল স্কিলড</button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>জেনারেল
                                </button>

                            </div>
                        </div>
                    </div>

                    <section>
                        <Skills showFirstContent={showFirstContent}></Skills>
                    </section>

                    <section className='grid lg:grid-cols-2 py-5 gap-5'>
                        <div className='flex gap-2 rounded-lg p-4 text-white font-bold mx-2' style={{ backgroundColor: "#036DC5" }}>
                            <div>
                                <img src={thousand} alt="" />
                            </div>
                            <div >
                                <p>হাজারো চাকরির মাঝে আপনার
                                    পছন্দের <br />  চাকরি খুঁজে আবেদন করতে <br /> জয়েন করুন আমাদের সাইটে।</p>

                                <button className="btn btn-warning">একাউণ্ট খুলুন</button>
                            </div>
                        </div>

                        <div className='flex gap-2 rounded-lg p-4 text-white font-bold mx-2' style={{ backgroundColor: "#6047AF" }}>
                            <div>
                                <img src={makeBIO} alt="" />
                            </div>
                            <div >
                                <p className='text-xl'>বায়োডাটা তৈরি করতে চান?</p>
                                <p> সহজ কয়েকটি ধাপে এখনই স্বল্প সময়েই <br /> তৈরি করুন আপনার সিভি</p>
                                <button className="btn btn-warning">একাউণ্ট খুলুন</button>
                            </div>
                        </div>
                    </section>

                </section>
                <section className='lg:col-span-1 bg-green'>
                    <ProfessionalGuidlines></ProfessionalGuidlines>
                </section>

            </div>
        </div>
    );
};

export default Profession;