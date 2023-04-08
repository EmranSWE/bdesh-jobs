import React, { useState } from 'react';
import logo from "../../assets/logo_bdesh.svg";
import joinVenture from "../../assets/Joint_venture.png"
import { SiFacebook } from 'react-icons/si';
import { SiYoutube } from 'react-icons/si';
const Menubar = () => {

    return (
        <div className='lg:mx-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>বিডিজবস্</a></li>
                        <li><a>চাকরির খবর</a></li>
                        <li><a>চাকরি প্রার্থীর একাউন্ট</a></li>
                        <li><a> নিয়োগকারী সংস্থা/ বিদেশী নিয়োগকর্তা </a></li>


                    </ul>
                </div>

                <div className="navbar-end">

                    <SiFacebook className=' w-6 h-6 mx-2 '></SiFacebook>

                    <SiYoutube className=' w-6 h-6 mx-2'></SiYoutube>
                </div>
            </div>


            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <img src={logo} width="170px" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a>
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul> */}
                    <img src={joinVenture} alt="" />
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    <ul>
                        <li>
                            যোগাযোগ</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menubar;