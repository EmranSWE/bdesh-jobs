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

// General Skills
import account from "../../assets/skills/Accounting-finance.png";
import manufacturer from "../../assets/skills/Production-operation.png";
import agri from "../../assets/skills/Agroplant.png";
import Hospitality from "../../assets/skills/Hospitality-Travel-Tourism.png";
import beauty from "../../assets/skills/Beauty-Care-Health-Fitness.png";
import education from "../../assets/skills/Education-Training.png";
import eletrecian from "../../assets/skills/Electrician-Construction-Repair.png";
import receptionist from "../../assets/skills/Secretary-Receptionist.png";
import architect from "../../assets/skills/Engineer-Architects.png";
import software from "../../assets/skills/IT-Telecommunication.png";
import marketing from "../../assets/skills/Marketing-Sales.png";
import gm from "../../assets/skills/Gen Mgt-Admin.png";
import design from "../../assets/skills/Design-Creative.png";
import medical from "../../assets/skills/Medical-Pharma.png";
import other from "../../assets/skills/Othersf.png"



const Skills = ({ showFirstContent }) => {
    console.log(showFirstContent)
    const specialSkills = [
        { img: electician, role: 'ইলেকট্রিশিয়ান', vacancy: "(১১)" },
        { img: mechanic, role: 'মেকানিক/টেকনিশিয়ান', vacancy: "(১০)" },
        { img: driver, role: ' ড্রাইভার', vacancy: "(০)" },
        { img: nurse, role: '   নার্স', vacancy: "(০)" },
        { img: schef, role: '  শেফ/বাবুর্চী ', vacancy: "(০)" },
        { img: plumber, role: 'প্লাম্বার/পাইপফিটিং', vacancy: "(০)" },
        { img: waiter, role: 'ওয়েটার / ওয়েট্রেস', vacancy: "(৫)" },
        { img: welder, role: 'ওয়েল্ডার ', vacancy: "(০)" },
        { img: houseKeeper, role: 'হাউজকিপার ', vacancy: "(০)" },
        { img: rajmistri, role: 'রাজমিস্ত্রি/নির্মাণ কর্মী', vacancy: "(০)" },
        { img: mali, role: ' মালী', vacancy: "(০)" },
        { img: cleaner, role: '  ক্লিনার', vacancy: "(০)" },
        { img: carpenter, role: '    কার্পেন্টার ', vacancy: "(০)" },
        { img: salesman, role: '    শো-রুম সহকারী/সেলসম্যান ', vacancy: "(০)" },
        { img: others, role: '   অন্যান্য  ', vacancy: "(১০)" },
    ]
    const generalSkills = [
        { img: account, role: ' একাউন্টিং / হিসাব রক্ষন /...', vacancy: "(৬)" },
        { img: manufacturer, role: 'উৎপাদন/অপারেশন', vacancy: "(০)" },
        { img: agri, role: ' কৃষি (চাষাবাদ/পশুপালন...', vacancy: "(০)" },
        { img: Hospitality, role: 'হসপিটালিটি/ভ্রমণ/...', vacancy: "(৫)" },
        { img: beauty, role: '  বিউটি কেয়ার/স্বাস্থ্যসেবা', vacancy: "(০)" },
        { img: education, role: '  শিক্ষা/প্রশিক্ষণ', vacancy: "(০)" },
        { img: electician, role: 'ইলেকট্রিশিয়ান/ ইলেকট্র...', vacancy: "(৫)" },
        { img: receptionist, role: ' সেক্রেটারি/রিসেপশনিস্ট', vacancy: "(০)" },
        { img: architect, role: ' প্রকৌশল/স্থাপত্য ', vacancy: "(৩১)" },
        { img: software, role: 'সফ্টওয়্যার / আইটি / টেলি...', vacancy: "(২৫)" },
        { img: marketing, role: '  বিপণন/বিক্রয়', vacancy: "(৫১)" },
        { img: gm, role: '  জেনারেল ম্যানেজমেন্ট/...', vacancy: "(০)" },
        { img: design, role: ' ডিজাইন/ক্রিয়েটিভ ', vacancy: "(০)" },
        { img: salesman, role: '    মেডিকেল/ফার্মা ', vacancy: "(১)" },
        { img: other, role: '   অন্যান্য  ', vacancy: "(১৫)" },
    ]
    return (
     <>
      {showFirstContent && <div className='grid lg:grid-cols-3  gap-4'>  
        {
                specialSkills.map(skill => <div className='flex items-center bg-white p-3 rounded-lg'>
                    <img src={skill.img} alt="" />
                    <p>{skill.role}</p>
                    <p>{skill.vacancy}</p>
                </div>)
            }
        </div>}
        {!showFirstContent && <div className='grid lg:grid-cols-3 gap-4'>  
        {
                generalSkills.map(skill => <div className='flex items-center bg-white p-3 rounded-lg'>
                    <img src={skill.img} alt="" />
                    <p>{skill.role}</p>
                    <p>{skill.vacancy}</p>
                </div>)
            }
        </div>}
     </>  
    );
};

export default Skills;