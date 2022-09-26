import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

export const useCustomerEmblaCarousel = (startIndex = 0) => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: false, startIndex });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
    setScrollSnaps(embla.scrollSnapList() as any);
  }, [embla, setScrollSnaps, onSelect]);

  return {
    viewportRef,
    scrollPrev,
    scrollNext,
    prevBtnEnabled,
    nextBtnEnabled,
    selectedIndex,
    scrollSnaps,
    scrollTo,
  };
};
