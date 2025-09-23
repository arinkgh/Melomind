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
  image?: string;
};
type Props = { slides: SlideType[]; options?: EmblaOptionsType };

const EmblaCarousel: React.FC<Props> = ({ slides, options }) => {
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
    <section className="embla" dir="rtl">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="embla__slide flex flex-col justify-around"
            >
              <Image src={slide.image} alt={slide.title} />
              <h3 className="text-[#105870] font-bold text-4xl">
                {slide.title}
              </h3>
              <p className="text-[#105870] font-semibold text-xl">
                {slide.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls mt-4 flex flex-col items-end gap-2">
        <div className="embla__buttons flex gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots flex gap-2">    
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
