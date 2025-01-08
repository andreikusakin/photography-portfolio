"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./ArrowButtons";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "./SelectedSnapDisplay";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import Image from "next/image";
import { Highlight } from "@/lib/data";

type PropType = {
  slides: Highlight[];
  options?: EmblaOptionsType;
};

useEmblaCarousel.globalOptions = { loop: true };

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center" });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    
      <section className="embla"
     
      >
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((image, index) => (
              <div
                className="embla__slide"
                key={index}
                style={{
                  flex: image.horizontal
                    ? "0 0 calc(var(--slide-size) + 48vh)"
                    : "0 0 var(--slide-size)",
                }}
              >
                <Image
                  src={image.src}
                  alt={`Wedding Highlight ${index + 1}`}
                  className="embla__slide__img"
                  quality={100}
                  width={image.horizontal ? 900 : 600}
                  height={image.horizontal ? 600 : 900}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <SelectedSnapDisplay
            selectedSnap={selectedSnap}
            snapCount={snapCount}
          />
        </div>
      </section>

  );
};

export default EmblaCarousel;
