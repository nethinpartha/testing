"use client";
import directus from '@/app/_utils/directus';

import { useState } from "react";

const Accordion = () => {
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState('');
    const showModal = (title) => {
        setTitle(title);
        setVisible(true);
    }

    return (
        <div className="w-full mt-4">
            {visible && <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center" onClick={() => { setVisible(false) }}>
                <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3" onClick={e => e.stopPropagation()}>
                    <div className="flex w-full justify-end p-4 border-b">
                        {/* <h2 className="text-xl font-semibold">{title}</h2> */}
                        <button onClick={() => { setVisible(false) }} className="flex-end text-gray-600 hover:text-gray-900 text-2xl">&times;</button>
                    </div>
                    <div className="p-4 flex-col">
                        <div className='flex justify-center'>
                            <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/43b97263-067f-4a44-8e29-7ec01a93857f`} alt="Current Account" className="h-28" />
                        </div>
                        <div className="text-xl mb-4 w-2/3 text-center mx-auto"> All {title} will be available here to serve you better</div>
                    </div>
                </div>
            </div>}
            <button onClick={() => { showModal('features') }} className="block text-left mb-2 px-6 py-1 bg-black text-white w-1/2 rounded-full">Features</button>
            <button  onClick={() => { showModal('requirements') }}  className="block text-left px-6 py-1 bg-black text-white w-1/2 rounded-full">Requirements</button>
        </div>
    );
};

export default Accordion;