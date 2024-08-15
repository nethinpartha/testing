import React from 'react';
import { convertImgURL } from '../_utils/utils';

function TextBlock({ data }) {

    return (
        <div className="text-gray-900">
            <section className="bg-pink-100 py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">{data.item.title}</h2>
                    <div className="text-lg mb-4  text-justify">
                    <div dangerouslySetInnerHTML={{ __html: convertImgURL(data.item.content) }}></div>   </div>
                </div>
            </section>
        </div>
    );
}

export default TextBlock;
