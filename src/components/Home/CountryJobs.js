import React from 'react';
import Slider from "react-slick";
import uae from "../../assets/uae.svg";
import sa from "../../assets/sa.svg";
import japan from "../../assets/jp.svg";
import korea from "../../assets/south-korea.png";
import malay from "../../assets/my.svg";
import oman from "../../assets/om.svg";
import jordan from "../../assets/jo.svg";
import denmark from "../../assets/denmark.jpg";


const CountryJobs = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 4
                }
            }
        ]
    };

    return (
        <div className="bg-country pb-16">
            <h1 className='text-center text-2xl text-white pt-10 py-4 
      '>বিভিন্ন দেশের চাকরি</h1>
            <div className="lg:mx-40 sm:items-center">
                <Slider {...settings}>
                    <div>
                        <div className="relative w-44 h-40 rounded-md overflow-hidden">
                            <img src={uae} className="absolute inset-0 w-full h-full object-cover" alt='' />
                            <div className="absolute inset-0 bg-white opacity-80"></div>
                            <div className="absolute  flex flex-col justify-center items-center text-black text-center px-6">
                                <h2 className="text-2xl font-bold mt-7" style={{ color: "#00796B" }}>৪৫ টি</h2>
                                <p>খালি পদ রয়েছে</p>

                            </div>
                            <div className="absolute bottom-0 w-full bg-black py-2 px-4">
                                <p className="text-white text-center font-bold">সংযুক্ত আরব আমীরাত</p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="relative w-44 h-40 rounded-md overflow-hidden">
                            <img src={sa} className="absolute inset-0 w-full h-full object-cover" alt='' />
                            <div className="absolute inset-0 bg-white opacity-80"></div>
                            <div  className="absolute  flex flex-col justify-center items-center text-black text-center px-6">
                                <h2 className="text-2xl font-bold mt-7" style={{ color: "#00796B" }}>৩৫ টি</h2>
                                <p>খালি পদ রয়েছে</p>

                            </div>
                            <div className="absolute bottom-0 w-full bg-black py-2 px-4">
                                <p className="text-white text-center font-bold">সৌদি আরব</p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="relative w-44 h-40 rounded-md overflow-hidden">
                            <img src={japan} className="absolute inset-0 w-full h-full object-cover" alt='' />
                            <div className="absolute inset-0 bg-white opacity-80"></div>
                            <div  className="absolute  flex flex-col justify-center items-center text-black text-center px-6">
                                <h2 className="text-2xl font-bold mt-7" style={{ color: "#00796B" }}>২৫ টি</h2>
                                <p>খালি পদ রয়েছে</p>

                            </div>
                            
                            <div className="absolute bottom-0 w-full bg-black py-2 px-4">
                                <p className="text-white text-center font-bold">জাপান</p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="relative w-44 h-40 rounded-md overflow-hidden">
                            <img src={korea} className="absolute inset-0 w-full h-full object-cover" alt='' />
                            <div className="absolute inset-0 bg-white opacity-80"></div>
                            <div  className="absolute  flex flex-col justify-center items-center text-black text-center px-6">
                                <h2 className="text-2xl font-bold mt-7" style={{ color: "#00796B" }}>২৫ টি</h2>
                                <p>খালি পদ রয়েছে</p>

                            </div>
                            
                            <div className="absolute bottom-0 w-full bg-black py-2 px-4">
                                <p className="text-white text-center font-bold">জাপান</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative w-44 h-40 rounded-md overflow-hidden">
                            <img src={oman} className="absolute inset-0 w-full h-full object-cover" alt='' />
                            <div className="absolute inset-0 bg-white opacity-80"></div>
                            <div  className="absolute  flex flex-col justify-center items-center text-black text-center px-6">
                                <h2 className="text-2xl font-bold mt-7" style={{ color: "#00796B" }}>৬ টি</h2>
                                <p>খালি পদ রয়েছে</p>

                            </div>
                            <div className="absolute bottom-0 w-full bg-black py-2 px-4">
                                <p className="text-white text-center font-bold">ওমান</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative w-44 h-40 rounded-md overflow-hidden">
                            <img src={malay} className="absolute inset-0 w-full h-full object-cover" alt='' />
                            <div className="absolute inset-0 bg-white opacity-80"></div>
                            <div  className="absolute  flex flex-col justify-center items-center text-black text-center px-6">
                                <h2 className="text-2xl font-bold mt-7" style={{ color: "#00796B" }}>৬ টি</h2>
                                <p>খালি পদ রয়েছে</p>

                            </div>
                            <div className="absolute bottom-0 w-full bg-black py-2 px-4">
                                <p className="text-white text-center font-bold">মালয়েশিয়া</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative w-44 h-40 rounded-md overflow-hidden">
                            <img src={denmark} className="absolute inset-0 w-full h-full object-cover" alt='' />
                            <div className="absolute inset-0 bg-white opacity-80"></div>
                            <div  className="absolute  flex flex-col justify-center items-center text-black text-center px-6">
                                <h2 className="text-2xl font-bold mt-7" style={{ color: "#00796B" }}>১ টি</h2>
                                <p>খালি পদ রয়েছে</p>

                            </div>
                            <div className="absolute bottom-0 w-full bg-black py-2 px-4">
                                <p className="text-white text-center font-bold">ডেনমার্ক</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative w-44 h-40 rounded-md overflow-hidden">
                            <img src={jordan} className="absolute inset-0 w-full h-full object-cover" alt='' />
                            <div className="absolute inset-0 bg-white opacity-80"></div>
                            <div  className="absolute  flex flex-col justify-center items-center text-black text-center px-6">
                                <h2 className="text-2xl font-bold mt-7" style={{ color: "#00796B" }}>১ টি</h2>
                                <p>খালি পদ রয়েছে</p>

                            </div>
                            <div className="absolute bottom-0 w-full bg-black py-2 px-4">
                                <p className="text-white text-center font-bold">জর্ডান</p>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default CountryJobs;