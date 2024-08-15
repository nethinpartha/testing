"use client";
import directus from '@/app/_utils/directus';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/app/_components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";

export default function HomeSlider({ slides }) {
    console.log(slides);
    return (
        <div className="embla">
            <Carousel opts={{
                align: "start",
                loop: true,
            }} plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}>
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <img className='h-full w-full' src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${slide.background.filename_disk}`} />
                            <div className='absolute z-10'>
                                {/* <h1>{slide.title}</h1> */}
                                {slide.content}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='absolute left-5' />
                <CarouselNext className='absolute right-5' />
            </Carousel>
        </div>
    );
}