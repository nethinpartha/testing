// "use client";
import Accordion from "@/app/_components/ServiceAccordion";
import { convertImgURL, getPage } from "../_utils/utils";
// import directus from '@/app/_utils/directus';
// import ReactDOMServer from 'react-dom/server';
import React from 'react';
import HeroBlock from "../_components/HeroBlock";
import TextBlock from "../_components/TextBlock";
// import { Accordion } from "@radix-ui/react-accordion";
// const convertImgURL = (str) => {
//     if (str.includes('{`${process.env.NEXT_PUBLIC_API_URL}/')) {
//         return str.replaceAll('{`${process.env.NEXT_PUBLIC_API_URL}/', process.env.NEXT_PUBLIC_API_URL).replaceAll('`}', '');
//     }
//     if (str.includes('<Accordion/>')) {
//         const accordionHTML = ReactDOMServer.renderToString(<Accordion />);
//         return str.replaceAll('<Accordion />', accordionHTML);

//         // console.log(str.split('<Accordion />'));
//         // return (
//         //     <>
//         //         {str.split('<Accordion />').map((part, index) => (
//         //             <React.Fragment key={index}>
//         //                 {part}
//         //                 {index < str.split('<Accordion />').length - 1 && <Accordion />}
//         //             </React.Fragment>
//         //         ))}
//         //     </>
//         // );
//     }

//     return str;
// }
export default async function DynamicPage({ params, directus }) {
    console.log(params);

    const page = await getPage(`/${params.slug}`);
    const pageBlocks = page && page[0] ? page[0].blocks : [];
    console.log(pageBlocks);
    // const showModal = (title) => { return <Modal show={true} title={title} /> }
    return (
        <div className={`container-fluid ${params.slug === 'digital-banking' ? 'bg-gray-900 text-gray-100 py-12' : 'bg-white text-gray-900'}`}>

            {pageBlocks ? pageBlocks.map((block, idx) =>
                <section className={`${idx !== pageBlocks.length - 1 ? 'mb-20' : ''}`}>
                    {block.collection === 'block_html' && <div dangerouslySetInnerHTML={{ __html: convertImgURL(block.item.raw_html) }}></div>}
                    {block.collection === 'block_form' && <div>
                        {block.item.headline}
                    </div>}
                    {block.collection === 'block_hero' && <HeroBlock data={block} />}
                    {block.collection === 'block_richtext' && <TextBlock data={block} />}

                </section>
            ) : <></>}
             

        </div >
    );
}
