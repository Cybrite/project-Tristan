import { useState, useMemo } from "react";
import { Poem } from "@/types/poem";

type SortOrder = "newest" | "oldest";

interface UsePoemFilterOptions {
  poems: Poem[];
  initialCategory?: string;
  initialSubCategory?: string;
  initialSortOrder?: SortOrder;
}

export function usePoemFilter({
  poems,
  initialCategory = "All",
  initialSubCategory = "All",
  initialSortOrder = "newest",
}: UsePoemFilterOptions) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubCategory, setSelectedSubCategory] =
    useState(initialSubCategory);
  const [sortOrder, setSortOrder] = useState<SortOrder>(initialSortOrder);

  const categories = useMemo(() => {
    return ["All", ...new Set(poems.map((poem) => poem.category))];
  }, [poems]);

  const subCategories = useMemo(() => {
    return ["All", "named", "unnamed"];
  }, []);

  const filteredPoems = useMemo(() => {
    const filtered = poems.filter((poem) => {
      const matchesSearch =
        poem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        poem.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || poem.category === selectedCategory;

      const matchesSubCategory =
        selectedSubCategory === "All" ||
        poem.subCategory === selectedSubCategory;

      return matchesSearch && matchesCategory && matchesSubCategory;
    });

    // Sort by date
    return filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });
  }, [poems, searchTerm, selectedCategory, selectedSubCategory, sortOrder]);

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
    sortOrder,
    setSortOrder,
    categories,
    subCategories,
    filteredPoems,
  };
}
