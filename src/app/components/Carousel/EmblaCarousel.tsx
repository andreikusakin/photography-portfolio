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
import { GalleryImage } from "@/lib/data";
import cloudinaryLoader from "@/lib/cloudinaryLoader";

type PropType = {
  slides: GalleryImage[];
  options?: EmblaOptionsType;
};

useEmblaCarousel.globalOptions = { loop: true };

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides } = props;
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
                  flex: image.width > image.height
                    ? "0 0 calc(var(--slide-size) + 25em)"
                    : "0 0 var(--slide-size)",
                }}
              >
                <Image
                  loader={cloudinaryLoader}
                  src={image.src}
                  alt={`Highlight ${index + 1}`}
                  className="embla__slide__img"
                  quality={90}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 768px) 90vw, 60vw"
                  priority={index < 2}
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
