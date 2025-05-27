import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { usePoemReader } from "@/hooks/use-poem-reader";
import { ROUTES, ANIMATION_DURATIONS } from "@/lib/constants";
import { Poem } from "@/types/poem";
import { poemsData } from "@/data/poems";
import Navigation from "@/components/Navigation";
import PoemHeader from "@/components/poem/PoemHeader";
import PoemControls from "@/components/poem/PoemControls";
import PoemContent from "@/components/poem/PoemContent";
import PoemMetadata from "@/components/poem/PoemMetadata";
import PoemNavigation from "@/components/poem/PoemNavigation";

const PoemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const currentIndex = poemsData.findIndex((p) => p.id === id);
  const poem = poemsData[currentIndex];
  const prevPoem = currentIndex > 0 ? poemsData[currentIndex - 1] : null;
  const nextPoem =
    currentIndex < poemsData.length - 1 ? poemsData[currentIndex + 1] : null;

  if (!poem) {
    return (
      <div className="min-h-screen bg-literary-gradient text-warm-ivory flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Poem not found</h1>
          <Link
            to={ROUTES.gallery}
            className="text-literary-gold hover:text-champagne"
          >
            Return to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const stanzas = poem.content
    .join("\n")
    .split("\n\n")
    .map((stanza) => stanza.split("\n").filter((line) => line.trim() !== ""));

  const { currentStanza, isPlaying, togglePlaying, resetReading } =
    usePoemReader({
      stanzas,
    });

  return (
    <div className="min-h-screen bg-literary-gradient text-warm-ivory">
      <Navigation />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <PoemHeader poem={poem} animationDelay={0} />

          <PoemControls
            isPlaying={isPlaying}
            onTogglePlay={togglePlaying}
            onReset={resetReading}
            animationDelay={0.3}
          />

          <PoemContent
            stanzas={stanzas}
            currentStanza={currentStanza}
            isPlaying={isPlaying}
          />

          <PoemMetadata poem={poem} animationDelay={0.6} />

          <PoemNavigation
            prevPoem={prevPoem}
            nextPoem={nextPoem}
            animationDelay={0.8}
          />
        </div>
      </div>
    </div>
  );
};

export default PoemDetail;
