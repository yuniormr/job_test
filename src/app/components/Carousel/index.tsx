import React, {useCallback} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {IServiceCardProps, ServiceCard} from "@/app/components/ServicesCard";
import {CustomIconMobile} from "@/app/components/CustomIcons/CustomIconMobile";
import {CustomIconDataConfig} from "@/app/components/CustomIcons/CustomIconDataConfig";
import {CustomIconConfig} from "@/app/components/CustomIcons/CustomIconConfig";

export interface IEmblaCarouselProps {
    items: IServiceCardProps[];
}

interface IServiceIcon {
    [x: string]: any;
}

const serviceIcon: IServiceIcon = {
    mobile: <CustomIconMobile/>,
    data_config: <CustomIconDataConfig/>,
    config: <CustomIconConfig/>
};

export const EmblaCarousel = ({items}: IEmblaCarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: "center"}, [Autoplay()]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla ">
            <div className="embla__wrapper">
                <div className="embla__viewport shadow-lg" ref={emblaRef}>
                    <div className="embla__container">
                        {items.map((item) => {
                            return <ServiceCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                link={item.link}
                                //@ts-ignore
                                icon={serviceIcon[item.icon]}
                            />
                        })}
                    </div>
                </div>
            </div>
            <button className="embla__prev" onClick={scrollPrev}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                </svg>
            </button>
            <button className="embla__next" onClick={scrollNext}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                </svg>
            </button>
        </div>
    )
}
