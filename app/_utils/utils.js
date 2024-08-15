
// "use server";
import directus from '@/app/_utils/directus';
import { notFound } from 'next/navigation';
import { readItems } from '@directus/sdk';
// import Accordion from "@/components/ServiceAccordion";
// import ReactDOMServer from 'react-dom/server';
// import React from 'react-dom';
// import { useParams } from 'next/router';
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export async function getPage(slug) {
    try {
        const page = await directus.request(readItems('pages', {
            filter: {
                permalink: { _eq: slug },
            },
            fields: [
                '*',
                {
                    blocks: [
                        { '*': ['*', { '*': ['*', { '*': ['*'] }] }] }
                    ],
                },
            ],

            limit: 1,
        }));
        return page;
    } catch (error) {
        notFound();
    }
}
export const convertImgURL = (str) => {
    if (str.includes('{&#96;${process.env.NEXT_PUBLIC_API_URL}')) {
        return str.replaceAll('{&#96;${process.env.NEXT_PUBLIC_API_URL}', process.env.NEXT_PUBLIC_API_URL).replaceAll('&#96;}', '');
    }
    // if (str.includes('<Accordion/>')) {
    //     const accordionHTML = ReactDOMServer.renderToString(<Accordion />);
    //     return str.replaceAll('<Accordion />', accordionHTML);


    // }

    return str;
}