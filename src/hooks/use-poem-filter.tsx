import { useState, useMemo } from "react";
import { Poem } from "@/types/poem";

interface UsePoemFilterOptions {
  poems: Poem[];
  initialCategory?: string;
  initialMood?: string;
}

export function usePoemFilter({
  poems,
  initialCategory = "All",
  initialMood = "All",
}: UsePoemFilterOptions) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedMood, setSelectedMood] = useState(initialMood);

  const categories = useMemo(() => {
    return ["All", ...new Set(poems.map((poem) => poem.category))];
  }, [poems]);

  const moods = useMemo(() => {
    return ["All", ...new Set(poems.map((poem) => poem.mood))];
  }, [poems]);

  const filteredPoems = useMemo(() => {
    return poems.filter((poem) => {
      const matchesSearch =
        poem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        poem.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || poem.category === selectedCategory;

      const matchesMood = selectedMood === "All" || poem.mood === selectedMood;

      return matchesSearch && matchesCategory && matchesMood;
    });
  }, [poems, searchTerm, selectedCategory, selectedMood]);

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedMood,
    setSelectedMood,
    categories,
    moods,
    filteredPoems,
  };
}
