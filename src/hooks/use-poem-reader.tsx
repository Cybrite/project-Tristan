import { useState, useEffect, useCallback } from "react";
import { POEM_READING_INTERVAL } from "@/lib/constants";

interface PoemReaderOptions {
  stanzas: string[][];
  readingInterval?: number;
}

export function usePoemReader({
  stanzas,
  readingInterval = POEM_READING_INTERVAL,
}: PoemReaderOptions) {
  const [currentStanza, setCurrentStanza] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const resetReading = useCallback(() => {
    setCurrentStanza(0);
    setIsPlaying(false);
  }, []);

  const togglePlaying = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStanza((prev) => {
        if (prev < stanzas.length - 1) {
          return prev + 1;
        } else {
          setIsPlaying(false);
          return 0;
        }
      });
    }, readingInterval);

    return () => clearInterval(interval);
  }, [isPlaying, stanzas.length, readingInterval]);

  return {
    currentStanza,
    isPlaying,
    togglePlaying,
    resetReading,
  };
}
