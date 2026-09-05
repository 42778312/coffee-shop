"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { motion } from "motion/react";
import { img } from "./assets";
import { reviews } from "./content";
import { Reveal } from "./Reveal";

const AUTOPLAY_MS = 4000;
const SLIDE_MS = 500;
const SWIPE_PX = 48;

const slides = [reviews[reviews.length - 1], ...reviews, reviews[0]];
const lastPos = slides.length - 1;

function Slide({
  quote,
  rating,
  name,
}: {
  quote: string;
  rating: string;
  name: string;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-8 px-2 min-[480px]:gap-12">
      <img
        src={img("illustration-19.svg")}
        alt=""
        className="w-14 min-[480px]:w-20"
      />
      <p className="font-heading max-w-[432px] text-center text-[28px] leading-[1.05] tracking-[-0.01em] sm:text-[36px] sm:leading-none md:max-w-[576px] md:text-[48px] min-[992px]:max-w-[720px] min-[992px]:text-[60px]">
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img src={img("illustration-18.svg")} alt="" className="w-5" />
          <div className="pt-0.5">
            <div className="font-hand text-[18px] leading-[1.04] min-[768px]:text-[21px]">
              {rating}
            </div>
          </div>
        </div>
        <div className="h-0.5 w-3 bg-[#1F3D38]" />
        <div className="text-[18px] leading-[1.44] font-medium tracking-[-0.01em]">
          {name}
        </div>
      </div>
    </div>
  );
}

function ArrowButton({
  direction,
  controlsId,
  onClick,
}: {
  direction: "prev" | "next";
  controlsId: string;
  onClick: () => void;
}) {
  const label = direction === "prev" ? "previous slide" : "next slide";
  const def = direction === "prev" ? "arrow-left.svg" : "arrow-right.svg";
  const abs = direction === "prev" ? "arrow-left-abs.svg" : "arrow-right-abs.svg";

  return (
    <motion.button
      type="button"
      aria-label={label}
      aria-controls={controlsId}
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="group relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-[3px] border-[#1F3D38] bg-transparent transition-colors duration-200 hover:bg-[#1F3D38] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AAD0C8]"
    >
      <img
        src={img(def)}
        alt=""
        className="relative z-[1] w-5 transition-opacity duration-200 group-hover:opacity-0"
      />
      <img
        src={img(abs)}
        alt=""
        className="absolute w-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      />
    </motion.button>
  );
}

export function ReviewsSection() {
  const maskId = useId();
  const [pos, setPos] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [inView, setInView] = useState(true);
  const [hovering, setHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const wrapping = useRef(false);
  const reduceMotion = useRef(false);

  const realIndex = pos === 0 ? reviews.length - 1 : (pos - 1) % reviews.length;

  const go = useCallback((dir: -1 | 1) => {
    if (wrapping.current) return;
    setAnimate(!reduceMotion.current);
    setPos((current) => {
      const next = current + dir;
      if (next === 0 || next === lastPos) wrapping.current = true;
      return next;
    });
  }, []);

  const goPrev = useCallback(() => go(-1), [go]);
  const goNext = useCallback(() => go(1), [go]);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (pos !== 0 && pos !== lastPos) return;

    if (reduceMotion.current) {
      wrapping.current = false;
      setAnimate(false);
      setPos(pos === 0 ? reviews.length : 1);
      return;
    }

    const id = window.setTimeout(() => {
      setAnimate(false);
      setPos(pos === 0 ? reviews.length : 1);
      wrapping.current = false;
    }, SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [pos]);

  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimate(true));
    });
    return () => cancelAnimationFrame(id);
  }, [animate]);

  useEffect(() => {
    if (!inView || hovering || reduceMotion.current) return;
    const id = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [inView, hovering, goNext, pos]);

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragging.current = true;
    startX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    dragging.current = false;
    const dx = event.clientX - startX.current;
    if (dx > SWIPE_PX) goPrev();
    else if (dx < -SWIPE_PX) goNext();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  }

  const slidePct = 100 / slides.length;

  return (
    <section
      ref={sectionRef}
      id="reviews"
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Reviews"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setHovering(false);
        }
      }}
      className="relative flex min-h-[640px] items-stretch justify-center bg-[#AAD0C8] py-16 text-[#1F3D38] sm:min-h-[720px] sm:py-20 md:min-h-[760px] min-[992px]:h-screen"
    >
      <div className="mx-auto flex w-full max-w-[1328px] flex-1 flex-col px-5 md:px-8 min-[992px]:px-16">
        <Reveal
          as="div"
          variant="fadeIn"
          className="relative flex flex-1 flex-col items-center justify-center py-12"
        >
          <div
            id={maskId}
            className="w-full overflow-hidden select-none touch-pan-y"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div
              className="flex"
              style={{
                width: `${slides.length * 100}%`,
                transform: `translate3d(-${pos * slidePct}%, 0, 0)`,
                transition: animate ? `transform ${SLIDE_MS}ms ease` : "none",
              }}
            >
              {slides.map((review, i) => {
                const slideNo =
                  i === 0 ? reviews.length : ((i - 1) % reviews.length) + 1;
                return (
                  <div
                    key={`${review.name}-${i}`}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${slideNo} of ${reviews.length}`}
                    aria-hidden={i !== pos}
                    className="flex shrink-0 items-center justify-center px-0"
                    style={{ width: `${slidePct}%` }}
                  >
                    <Slide
                      quote={review.quote}
                      rating={review.rating}
                      name={review.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <p className="sr-only" aria-live="polite" aria-atomic="true">
            Slide {realIndex + 1} of {reviews.length}.
          </p>

          <div className="absolute bottom-6 left-1/2 z-[3] flex -translate-x-1/2 items-center gap-3 sm:bottom-12">
            <ArrowButton
              direction="prev"
              controlsId={maskId}
              onClick={goPrev}
            />
            <ArrowButton
              direction="next"
              controlsId={maskId}
              onClick={goNext}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
