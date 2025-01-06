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
import { highlight } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";

type PropType = {
  slides: highlight[];
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
    <AnimatePresence>
      <motion.section className="embla"
      initial={{ opacity: 0,  }}
      animate={{ opacity: 1,  }}
      exit={{ opacity: 0,  }}
      transition={{ duration: 0.5, delay: 0.5 }}
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
                  width={image.horizontal ? 1800 : 1200}
                  height={image.horizontal ? 1200 : 1800}
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
      </motion.section>
    </AnimatePresence>
  );
};

export default EmblaCarousel;
