import { useState, useMemo } from "react";
import { Poem } from "@/types/poem";

interface UsePoemFilterOptions {
  poems: Poem[];
  initialCategory?: string;
}

export function usePoemFilter({
  poems,
  initialCategory = "All",
}: UsePoemFilterOptions) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const categories = useMemo(() => {
    return ["All", ...new Set(poems.map((poem) => poem.category))];
  }, [poems]);

  const filteredPoems = useMemo(() => {
    return poems.filter((poem) => {
      const matchesSearch =
        poem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        poem.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || poem.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [poems, searchTerm, selectedCategory]);

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredPoems,
  };
}
