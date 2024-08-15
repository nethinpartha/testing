import React from 'react';
import { convertImgURL } from '../_utils/utils';

function HeroBlock({ data }) {
    // console.log(data.item.image)
    return (
        <div className="">
            {data.item.image_position === null && (
                <section className={`relative bg-cover bg-center ${data.item.cssClass ? 'h-[50vh]' : 'h-screen'}`} style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/assets/${data.item.image.filename_disk}` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-left">
                        <div className="text-left  ml-[10%]">
                            <h1 className="text-5xl font-bold text-white">{data.item.title}</h1>
                            <p className="mt-4 text-lg text-white max-w-xl mx-auto">
                                {data.item.content}        </p>
                        </div>
                    </div>
                </section>
            )}
            {data.item.image_position === 'right' && (
                <section className="max-w-7xl mx-auto pb-16 px-6">
                    <div className="lg:flex lg:items-center">
                        <div className="lg:w-1/2  container">
                            {data.item.headline ?
                                <div dangerouslySetInnerHTML={{ __html: data.item.headline }}></div> :
                                <h2 className="text-3xl font-bold mb-4">{data.item.title}</h2>
                            }

                            {data.item.content?.includes('<') ? <div dangerouslySetInnerHTML={{ __html: convertImgURL(data.item.content) }}></div> :
                                <p className="mb-14">{data.item.content} </p>}
                            {/* <p className="text-lg text-justify">
                                At GTI Bank, our heritage is defined not by our years in existence, but by the strength of our commitment to our customers and our unwavering dedication to integrity and excellence. We are excited to build a legacy of trust and innovation as we grow and serve our community.
                            </p> */}
                        </div>
                        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center">
                            <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${data.item.image.filename_disk}`} alt={data.item.image.title} className="rounded-lg shadow-lg" />
                        </div>
                    </div>
                </section>
            )}
            {data.item.image_position === 'left' && (
                <section className="pb-24">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 order-last lg:order-first mb-8 lg:mb-0  flex justify-center">
                            <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${data.item.image.filename_disk}`} alt={data.item.image.title} className="" />
                        </div>
                        <div className="lg:w-1/2 text-center lg:text-left container lg:mr-[10%] ">
                            <div>
                                {data.item.headline ?
                                    <div dangerouslySetInnerHTML={{ __html: data.item.headline }}></div> :
                                    <h2 className="text-3xl font-bold mb-4">{data.item.title}</h2>
                                }
                                <div className="justify-center">
                                    {data.item.content?.includes('<') ? <div dangerouslySetInnerHTML={{ __html: data.item.content }}></div> :
                                        <p className="mb-14">{data.item.content} </p>}

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

export default HeroBlock;
