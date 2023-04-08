import React from 'react';
import ProfessionalGuidlines from './ProfessionalGuidlines';
import Skills from './Skills';

const Profession = () => {
    return (
        <div>
            <div className='grid grid-cols-4 bg-gray-100 px-20'>
                <section className='col-span-3 '>
                    <div className='flex justify-between mt-2'>
                        <div>
                        <h1 className='text-xl font-bold'>পেশা</h1>
                        </div>
                        <div>
                            <button className='text-xl font-bold'>স্পেশাল স্কিলড</button>
                        </div>
                    </div>

                    <section > 
                       <Skills></Skills>
                    </section>
                    <div>

                    </div>
                </section>
                <section className='lg:col-span-1 bg-green'>
                    <ProfessionalGuidlines></ProfessionalGuidlines>
                </section>

            </div>
        </div>
    );
};

export default Profession;