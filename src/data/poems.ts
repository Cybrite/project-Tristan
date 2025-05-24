
export interface Poem {
  id: string;
  title: string;
  content: string[];
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  mood: string;
  inspiration?: string;
}

export const poemsData: Poem[] = [
  {
    id: "1",
    title: "Digital Dreams",
    content: [
      "In pixels and code we find our voice,",
      "Binary whispers, quantum choice.",
      "Through fiber optic veins of light,",
      "Our stories travel through the night.",
      "",
      "Each keystroke births a universe,",
      "Where thoughts in endless loops traverse.",
      "The screen reflects our inner world—",
      "A consciousness both vast, unfurled."
    ],
    excerpt: "In pixels and code we find our voice, binary whispers of the digital age...",
    category: "Technology",
    date: "March 2024",
    readTime: "2 min",
    mood: "contemplative",
    inspiration: "The intersection of humanity and technology"
  },
  {
    id: "2",
    title: "Midnight Reverie",
    content: [
      "When darkness wraps the world in silk,",
      "And stars like scattered diamonds spill",
      "Across the velvet canvas night,",
      "I find myself in perfect light.",
      "",
      "The moon, a silver coin tossed high,",
      "Illuminates the sleeping sky.",
      "In silence, secrets softly shared",
      "Between the earth and heaven paired."
    ],
    excerpt: "When darkness wraps the world in silk, and stars like scattered diamonds spill...",
    category: "Nature",
    date: "February 2024",
    readTime: "2 min",
    mood: "peaceful",
    inspiration: "A quiet night of stargazing"
  },
  {
    id: "3",
    title: "The Weight of Words",
    content: [
      "Letters carry more than sound—",
      "They bear the weight of souls unbound.",
      "Each syllable a stepping stone",
      "Across the chasm, heart to heart.",
      "",
      "In poetry, we find our truth,",
      "The essence of eternal youth.",
      "Words dance like fire in the dark,",
      "Igniting every hidden spark."
    ],
    excerpt: "Letters carry more than sound—they bear the weight of souls unbound...",
    category: "Meta",
    date: "January 2024",
    readTime: "1 min",
    mood: "introspective",
    inspiration: "Reflection on the power of language"
  },
  {
    id: "4",
    title: "Ocean's Whisper",
    content: [
      "Waves crash against the weathered shore,",
      "Each drop a story, ancient lore.",
      "The salt-kissed air carries dreams",
      "Of distant lands and silver streams.",
      "",
      "Beneath the surface, mysteries deep,",
      "Where seahorses and mermaids sleep.",
      "The ocean's song, both wild and free,",
      "Echoes through eternity."
    ],
    excerpt: "Waves crash against the weathered shore, each drop a story, ancient lore...",
    category: "Nature",
    date: "December 2023",
    readTime: "2 min",
    mood: "nostalgic",
    inspiration: "Childhood memories at the beach"
  },
  {
    id: "5",
    title: "Coffee Shop Chronicles",
    content: [
      "Steam rises from the ceramic cup,",
      "Like prayers ascending, spiraling up.",
      "The chatter blends with jazz that flows,",
      "While outside, autumn wind still blows.",
      "",
      "Here stories meet and intertwine,",
      "Over lattes and vintage wine.",
      "Each table holds a different scene—",
      "Love, loss, and everything between."
    ],
    excerpt: "Steam rises from the ceramic cup, like prayers ascending, spiraling up...",
    category: "Urban",
    date: "November 2023",
    readTime: "2 min",
    mood: "warm",
    inspiration: "Observations from a favorite café"
  }
];
