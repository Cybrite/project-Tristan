export interface Poem {
  id: string;
  title: string;
  content: string[];
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  inspiration?: string;
}

export const poemsData: Poem[] = [
  {
    id: "1",
    title: "The God I Hate",
    content: [
      `I scrape myself from the bathroom mirror each morning,
Pathetic creature, with your grandiose dreams,
Sybrite, you're nothing but vomit dressed in department store jeans,
A collapsed star too dim for anyone's mourning.
Father's footsteps echo in your absence—
The first man to see through my facade,
The first to run from what he had created.

College halls echo with my invisible footsteps,
They can't see the universe inside my skull
While my hands shake too much to birth it at all,
Sybrite, king of a kingdom where only I accept.
Anxiety wraps around my throat like loving hands,
Squeezing promises of greatness into whimpers,
Each breath a battle I'm too tired to fight.

Her eyes found mine across crowded rooms,
Hope blossomed like weeds through concrete cracks.
"Not ready," she said, with kindness that burned worse than hate,
Seven days later, wrapped in another man's arms.
Sybrite watches from shadows, abandoned thrice,
Love's jester, wearing rejection like a second skin,
My heart a museum of beautiful things I cannot keep.

Mother's eyes—once bright as morning—now dimmed with despair,
Her trembling hands clutch my degree applications.
"You'll make it," she whispers, faith unfounded but fierce,
While I drown in the weight of being her final anchor.
Sybrite, the savior who can't save himself,
Must somehow rise from these ashes of potential
To build her a kingdom from the ruins of our lives.

Skin that never fits right, voice that cracks and falters,
Eyes that girls look through, not into—
My parents' investment rotting in real time,
Her hope curdling inside Sybrite's hollow altar.
Her sacrifice hangs heavy on slumped shoulders,
Her tears watering the garden of my failures,
Another mess she prays I can still clean up.

At night I crown myself with delusions,
By day I crawl through hours like a wounded thing.
The divine tragedy of being Sybrite—
Too repulsive to touch, too special for conclusions.
Cynicism my only faithful companion,
The world dissected into disappointments,
Each dream autopsy reveals the same cause of death.

Each night I drown in sweat-soaked nightmares,
Where even my subconscious can't stand my company.
Sybrite, god of nothing, king of nowhere,
Messiah of my own private apocalypse.
Doubt circles like vultures above my bed,
Picking clean the bones of possibility,
Tomorrow another battlefield I lack the armor for.

No homeland claims me, no tribe calls my name,
Sybrite drifts between spaces others inhabit with ease.
In lecture halls I'm a ghost with tuition debt,
In crowded rooms I'm the empty chair no one notices.
Yet in mother's gaze, I'm her whole universe,
A responsibility that crushes and elevates—
God of her diminished world, unworthy of worship.

Father's voice haunts: "You'll amount to nothing,"
Mother's whispers counter: "You could be anything."
Between these poles, Sybrite swings like a broken compass,
Mapping territories of failure with scientific precision.
The mirror shows a god with feet of clay,
Crumbling under the weight of his own divinity,
A tragedy written in first person, present tense, unending.
`,
    ],
    excerpt:
      "I scrape myself from the bathroom mirror each morning,Pathetic creature, with your grandiose dreams...",
    category: "Self-Reflection",
    date: "April 2025",
    readTime: "5 min",
    inspiration: "Who am I? A question that haunts me daily",
  },
  {
    id: "2",
    title: "Obsidian Star",
    content: [
      `Look at my heart,Burned and ruined.
Look me in my eyes,Can you see?
My emotionless void.
It burns a lot,It hurts a lot.
It feels like hell,I can't hide it well.

Now my body trembles,
At a single sight of yours.
What did I do wrong?
To whom can I now,Sing this song?

Lost, lost, lost I did.
Heart in my hand,
Why am I trying to hide?
Hunger engulfs me,So I ate my hide.

Through darkened skies I roam at night,
Searching for a glimpse of light.
Memories dance before my eyes,
Like moths beneath the starlit skies.

Each step I take leads me astray,
As shadows steal my hope away.
The obsidian gleams with cold delight,
Reflecting back my endless plight.
Time slips through my fingers fast,
While I remain trapped in the past.

The moon above hangs cold and bright,
A witness to my lonely fight.
In dreams I see your face so clear,
But wake to find you're nowhere near.

This emptiness inside my breast
Denies my heart its peaceful rest.
Each echo of your fading name
Ignites this never-ending flame.
I walk these halls of memory,
Until your ghost sets me free.
`,
    ],
    excerpt: `Look at my heart,Burned and ruined.
Look me in my eyes,Can you see?...`,
    category: "Heartbreak",
    date: "Febuary 2025",
    readTime: "2 min",
    inspiration: "Reflection on personal struggles and loss",
  },
  {
    id: "3",
    title: "When I Will Become",
    content: [
      `When I will become god,
  There will be no sky but crimson void,
  Nor hell, for Earth suffices.
  Temple walls weep children's blood deployed,
  While maggot-priests, their souls destroyed,
  Chant blasphemous devices.
  
  When I will become lord,
  My crown forged from broken bones.
  Through fields of flayed and screaming souls,
  I'll build my thousand thrones.
  Each victory demands its tolls—
  My flesh carved into groaning stones.
  
  When I will become noble,
  Children's nightmares speak my name,
  As kingdoms burn on obsidian tables,
  Their flesh feeds glory's flame.
  Until sweet treachery enables
  Death to stake its claim.
  
  When I will become nothing,
  My corpse feeds ravens' feast divine,
  While worms thread through my hollow eyes,
  And roots claim what was mine.
  The earth drinks deep my final cries,
  Like vintage bitter wine.
  
  When I will become memory,
  Tales twist like tortured things in pain,
  Some curse my name with poisoned breath,
  Some worship death's dark reign.
  But all who speak of me find death
  Has marked them for its gain.
  `,
    ],
    excerpt: `When I will become god,
  There will be no sky but crimson void...`,
    category: "Nihilistic",
    date: "January 2025",
    readTime: "3 min",
    inspiration: "I was having a bad day.",
  },
  {
    id: "4",
    title: "Numb",
    content: [
      `Why am I so numb inside,
Extension of me so dumb, no place to hide?
Looking like a glut in this space,
Talking like a rave at a frantic pace.
Why is there no peace to be found,
In my delusional cave, where echoes resound?

I am the sinner of the seven seas,
Bearing the weight of seven sins with unease.
I belong to none and none belong to me,
Adrift in a world where I can't be free.

Why should I wait for the future ahead
When I know it is full of sutures that dread?

The chains of my past grow heavier each day,
Darkness surrounds me, leading me astray.
Yet somewhere within, a small flame still fights,
Pushing against the cold, endless nights.

Perhaps there's a shore beyond these seven seas,
Where even a sinner might find some release.
Is it death? That I must cease ?!!
`,
    ],
    excerpt: `Why am I so numb inside,
    Extension of me so dumb, no place to hide?...`,
    category: "Existential",
    date: "March 2025",
    readTime: "1 min",
    inspiration: "Numb is a feeling I often experience",
  },

  {
    id: "5",
    title: "Unspoken Love on the wind",
    content: [
      `Your siblings never asked for your love, did they?
Did your best friend beg for the love they give?
Your family cared without asking,
That's the love they live.
And when they smile as you speak,
Don’t you wish they loved you too?

You fought with your mother,
Yet when you leave the house,
A tear falls for her,
Knowing you're her world, like no other.

You think your friends have left you,
Like whispers in the breeze,
But the sky of memories, and nights of glories,
Still tell you their stories.

You wonder, if they don't love you, who will?
Like Jack rolling down the hill,
With zeal, O fair Madonna,
That’s how Life shows you its thrill.

Not your brother, nor your sisters,
Not your parents, nor your friends,
Or even your lovers,
Asked for love, and neither did you.

Love came like a swallow on the wind's trail,
And settled on you, soft as a tale.
`,
    ],
    excerpt: `Your siblings never asked for your love, did they?...`,
    category: "Love and Relationships",
    date: "October 2024",
    readTime: "1 min",
    inspiration: "Observations from a favorite café",
  },
  {
    id: "6",
    title: "Hiragana",
    content: [
      `Loved a Knight, on first sight,
Took her sword in my pride,
Clutched her hair, felt her plight,
Looked at her face filled with blight.

Can’t keep my disgust,
Can’t suppress my lust,
But as her hand reached my face,
With words of despair,and heart of warm affairs.

What is this?, that my heart feels?
Sympathy, apathy, mercy or zeal ?!

She jumped with a furious reed,
Gauntlet on my neck, teaching me how she feels.

As she closed on me,
Sparks were not only out of blade,
But also of hearts that played.

How evil is my flesh, to want to kill,to feel zeal,
to let her die,So my heart can heal !

As our blade broke,
So did our anger, lust and pride.

Tired, my eyes wide,Fell in her arms.
Her knife in my heart,As i tore her throat half.

Laid in blood,
As one Hiragana,
At last, she held my head on her armour crest,
We kissed and gasped for air,
As darkness fills my eye on her bosom,
We will meet again to eat Tachibana.
`,
    ],
    excerpt: `Loved a Knight, on first sight,
Took her sword in my pride...`,
    category: "Self-Reflection",
    date: "August 2024",
    readTime: "2 min",
    inspiration: "A dream I had about a knight",
  },
];
