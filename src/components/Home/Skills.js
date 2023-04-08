import React from 'react';
import electician from "../../assets/skills/Electrician.png";
import mechanic from "../../assets/skills/Mechanic.png";
import driver from "../../assets/skills/Driver.png";
import nurse from "../../assets/skills/Nurse.png";
import plumber from "../../assets/skills/Plumber.png";
import schef from "../../assets/skills/Schef.png";
import waiter from "../../assets/skills/Waiter.png";
import welder from "../../assets/skills/Welder.png";
import houseKeeper from "../../assets/skills/Housekeeper.png";
import rajmistri from "../../assets/skills/Mason.png";
import mali from "../../assets/skills/Cleaner.png";
import cleaner from "../../assets/skills/Gardener.png";
import carpenter from "../../assets/skills/Carpenter.png";
import salesman from "../../assets/skills/Salesman.png";
import others from "../../assets/skills/Others.png";
const Skills = () => {
    const skills = [
        {img:electician, role:'ইলেকট্রিশিয়ান', vacancy:"(১১)"},
        {img:mechanic, role:'মেকানিক/টেকনিশিয়ান', vacancy:"(১০)"},
        {img:driver, role:' ড্রাইভার', vacancy:"(০)"},
        {img:nurse, role:'   নার্স', vacancy:"(০)"},
        {img:schef, role:'  শেফ/বাবুর্চী ', vacancy:"(০)"},
        {img:plumber, role:'প্লাম্বার/পাইপফিটিং', vacancy:"(০)"},
        {img:waiter, role:'ওয়েটার / ওয়েট্রেস', vacancy:"(৫)"},
        {img:welder, role:'ওয়েল্ডার ', vacancy:"(০)"},
        {img:houseKeeper, role:'হাউজকিপার ', vacancy:"(০)"},
        {img:rajmistri, role:'রাজমিস্ত্রি/নির্মাণ কর্মী', vacancy:"(০)"},
        {img:mali, role:' মালী', vacancy:"(০)"},
        {img:cleaner, role:'  ক্লিনার', vacancy:"(০)"},
        {img:mali, role:'    কার্পেন্টার ', vacancy:"(০)"},
        {img:mali, role:'    শো-রুম সহকারী/সেলসম্যান ', vacancy:"(০)"},
        {img:others, role:'   অন্যান্য  ', vacancy:"(১০)"},
    ]
    return (
        <div className='grid grid-cols-3  gap-4'>
            {
                skills.map(skill => <div className='flex items-center bg-white p-3 rounded-lg'>
                    <img src={skill.img} alt="" />
                    <p>{skill.role}</p>
                    <p>{skill.vacancy}</p>
                </div>)
            }
        </div>
    );
};

export default Skills;