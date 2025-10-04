"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import "./embla.css";
import Image from "next/image";

type SlideType = {
  id: number;
  title: string;
  description: string;
  image: string;
};
type Props = { slides: SlideType[]; options?: EmblaOptionsType };

const EmblaCarousel: React.FC<Props> = ({ slides }) => {
  const options: EmblaOptionsType = {
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
    align: "end",
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla flex gap-3 flex-col" dir="rtl">
      <div className="embla__controls mt-4 flex flex-col items-end gap-2">
        <div className="embla__buttons flex gap-2 cursor-pointer">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots flex gap-2">    
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div> */}
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="embla__slide flex flex-col gap-3 p-3 sm:p-4"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-primary font-bold text-lg sm:text-2xl md:text-3xl">
                {slide.title}
              </h3>
              <p className="text-primary text-sm sm:text-base md:text-lg">
                {slide.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
