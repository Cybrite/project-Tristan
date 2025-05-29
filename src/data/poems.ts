export interface Poem {
  id: string;
  title: string;
  content: string[];
  excerpt: string;
  category: string;
  subCategory: "named" | "unnamed";
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
    subCategory: "named",
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
    subCategory: "named",
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
    subCategory: "named",
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
    subCategory: "named",
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
    subCategory: "named",
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
    subCategory: "named",
    date: "August 2024",
    readTime: "2 min",
    inspiration: "A dream I had about a knight",
  },
  {
    id: "7",
    title: "Poem 16th",
    content: [
      `My queen ,My princess,
Stay here with me.
You are my shooting star,
You are pendant to my heart.

You are so far away from here,
You are so calm, and my soul demere.

My princess, My Queen, 
You were never near and I was never far.
As I hold you,while our hearts spar.

Tell me,How many more scars till,
We are no more apart.`,
    ],
    excerpt: `My queen, My princess...`,
    category: "Love and Relationships",
    subCategory: "unnamed",
    date: "October 2023",
    readTime: "1 min",
    inspiration: "Last time i was in love, I wrote this poem",
  },
  {
    id: "8",
    title: "Poem 22nd",
    content: [
      `Raft of the soul,
Filled with miserable gold,
Headed for the strait dark blue,
Following the love clue?!?

Raft of certain malignant,
Stench of death never so fragrant,
Serpent of sea quenches his thirst,
With the sorrows of hearts turned like foul august!

Thinking about the ship sank long ago,
How long on this raft, must I go?

Sun of sins ,
burns my skin.
Hunger of love,
but food is not something all deserve.

As my lips dry out of kindness,
And skin blister with regrets,
Eyes hollow of hope,
Leaving my heart with grief untold,

On this raft as I lay,
Even when I reach ashore, what will I retain?`,
    ],
    excerpt: `Raft of the soul...`,
    category: "Self-Reflection",
    subCategory: "unnamed",
    date: "August 2024",
    readTime: "2 min",
    inspiration: "Struggling with my own thoughts",
  },
  {
    id: "9",
    title: "A night in my Dreams",
    content: [
      `if I may sleep on your lap,
Will you lemme see stars in your eyes.
If I bleed in your arms,
Will your hands lemme use them as cotton.
Can we talk about our sins,
We have long forgotten.

To see you as a object of flesh,
And let you feel me as a sculpt hollow,
Hold you in my arms,
Like there's no tomorrow,
But the thrones of past pinch like unfixed sorrow.

Not fond of this bond's stagnation,
But you only flow in my imagination.

Tell me O maiden crimson eyed,
Skin pale and demeanour so sweet, and skin of golden hide,
What's the price of things I ask?
Will the payment of my love, suffice??`,
    ],
    excerpt: `if I may sleep on your lap,
Will you lemme see stars in your eyes....`,
    category: "Love and Relationships",
    subCategory: "named",
    date: "October 2024",
    readTime: "2 min",
    inspiration: "Felt like writing a poem about love",
  },
  {
    id: "10",
    title: "Poem 25th",
    content: [
      `How does it feels to remember,
Deep in your heart flaming ambers.
Burning so bright that you forgot,
But the shadow it casts, still remembers.

Holding hand, futile try,
As Resolve of once heart waver,
I can't cry,
So I bleed on paper.

How to fix what was never broken ?,
How to steal what was destined ?,
How to forget what was to be remembered?,
and How to write what was meant to be said?

Have faded image of a face,
forbidden tune is a voice,
In fades is some memories.

Locked in depth of my heart,
Cage strong as titan's wall,
something lurks, that is to fear,
something or someone i hold so Dear.

Unknown of the hurt, i forgot i need both not one,
now this is the hill i die on.`,
    ],
    excerpt: `How does it feels to remember,
Deep in your heart flaming ambers..`,
    category: "Existential",
    subCategory: "unnamed",
    date: "October 2024",
    readTime: "2 min",
    inspiration: "A moment of reflection on lost love",
  },
  {
    id: "11",
    title: "Garden in Arms",
    content: [
      `With my hands stretched out,
And garden in my arms.
Shower of tears from my eyes,
Flowers the plant of my own harm.

Roses to lovers,
Dahlia to strong,
Tulips to friends,
A Garden to those whose life ends.

Touching their roots is a mesh of connected sorrows,
Misery Is the soil,
Making the flowers throny and vile.

Looking at the field with colorful wonders,
What will happen if I kiss lavenders ?🪻

Fullfiled and defiled,
Bloomed and rotten,
Such a weak stem,
Crushed by wind,and to be forgotten.`,
    ],
    excerpt: `With my hands stretched out,
And garden in my arms...`,
    category: "Existential",
    subCategory: "named",
    date: "November 2024",
    readTime: "1 min",
    inspiration: "Flowers of Evil.",
  },
  {
    id: "12",
    title: "Poem 29th",
    content: [
      `Owl on my shoulder,
Speaks my mind,
Speech is sharp and bolder,
Words of despise.

Stalks my dreams at night,
filling them with copper and lies,
Sees no truth,But tells many,
Has no bonds, but breaks many.
Under its gaze, nothing's in harmony.

Fear is love and Love is fear,
It Always reminds me, I have lost my soul demear.

It flies around my horizon,
And hoots at every step,
It sees every inch,
And feeds on my flesh.

Each piece it tears,
Takes away memories of my years,
Retells me in its voice in my ears.

Soon it will eat me to bone,
With,
No stories to tell,
No shoulder to hold,
No dreams to stalk,
And love to fear,
It would make my smile disappear.

Moving forward like a tumbling husk,
No stop from dawn to dusk.`,
    ],
    excerpt: `Owl on my shoulder,
Speaks my mind...`,
    category: "Existential",
    subCategory: "unnamed",
    date: "December 2024",
    readTime: "2 min",
    inspiration: "Got back into depression",
  },
  {
    id: "13",
    title: "Poem 31st",
    content: [
      `A love so pure, a love so deep,
A heart that yearns, a soul that’s asleep.

“I love you so much, I love you lots,
My heart melts like chocolate, when you cross my thoughts,”
A sweet surrender, a lover’s knots.

A celestial promise, a shooting star’s flight,
A wish eternal, pure and bright.
Though wings may be broken, dreams take flight,
A spirit unbroken, a hopeful sight.

A love so enduring, a bond so strong,
A timeless melody, a heartfelt song.`,
    ],
    excerpt: `A love so pure, a love so deep,
A heart that yearns, a soul that’s asleep...`,
    category: "Love and Relationships",
    subCategory: "unnamed",
    date: "January 2025",
    readTime: "1 min",
    inspiration: "Writing about love after a long time",
  },
  {
    id: "14",
    title: "Poem 32nd",
    content: [
      `Once upon a time, there lived a wizard,  
Wandering aimless, a life so haphazard.  
Traveling alone, with no goal at all,  
Just endless roads and stories to recall.  

One of his tales, I’ll share with you—  
Listen closely, it may touch you too.  

He once found a dandelion, soft and small,  
Breaking apart, losing it all.  
The wizard knelt and asked with care,  
"Tell me your story, if you dare."  

The flower spoke in a voice so light,  
"I wish to fly and touch the sky bright.  
I want to escape, to break away,  
And chase the winds far from this place."  

They traveled together through starry skies,  
Through moonlit dreams and shadowed nights.  
The tiny bud made him believe again,  
"Hold on to hope," she said, "my dear.  
Tie a knot at the end of the rope—  
And never let go of your thread of hope."  

Eventually, the time drew near,  
The dandelion whispered, soft and clear,  
"Wizard, my heart is ready to fly,  
Grant me the spell to kiss the sky."  

The wizard smiled and said, "Alright,
You’ll have my spell—take flight tonight."  
But deep inside, his chest grew tight,  
For love is hard when you must let it fly.  

He'd grown fond of the tiny bloom,  
Her laughter had scattered every gloom.  
Yet he knew she couldn’t stay,  
For flowers must fly—it’s their way.  

He gave the spell, though it hurt inside,  
Watching her dance on the wind as her guide.  
Her golden seeds rose high and free,  
A bittersweet wish upon the breeze.  

The wizard stood with tear-filled eyes,  
As she disappeared into the skies.  
He wandered on with a heavy heart,  
Through quiet lands, falling apart.  
A lonely soul with eyes turned cold,  
Carrying a love he’d never hold.`,
    ],
    excerpt: `Once upon a time, there lived a wizard,  
Wandering aimless, a life so haphazard...`,
    category: "Love and Relationships",
    subCategory: "unnamed",
    date: "February 2025",
    readTime: "4 min",
    inspiration: "A story about a wizard and a dandelion",
  },
  {
    id: "15",
    title: "Poem 35th",
    content: [
      `To dream big and die for it,
To see the unseen and search for it.
To feel it's gaze and not acknowledge it,
To love it and then burn it.

To dream in blood and die in flame,
To seek the void and curse it's name.
To crave it's touch, yet bear the scar,
To love too close, then break the star.

To dream of you and risk it all,
To hear love’s whisper, heed its call.
To feel your gaze, yet look aside,
To love you deep, then let it die.

To dream so grand and fall with pride,
To seek the truth where shadows hide.
To meet its gaze yet show no fear,
To love, then cast it to the spear.`,
    ],
    excerpt: `To dream big and die for it,
To see the unseen and search for it...`,
    category: "Nihilistic",
    subCategory: "unnamed",
    date: "May 2025",
    readTime: "1 min",
    inspiration: "Thinking about dreams and how i give up on them",
  },
  {
    id: "16",
    title: "Poem 13th",
    content: [
      `A wound, a blade and an unfixed sorrow,
      where is the peace?, 
      and the end of golden gallow.
      
      As the will of thousands kneel,
      and despair filled in their eyes,
      what is that dream? they need.
      
      They stood still with the flase iron will,
      on the remains of depart,
      and the enemy just moments apart,
      they killed them with no regard.
      
      Now,when rivers are red,
      rot fills the sky,
      holding them, why do they cry?`,
    ],
    excerpt: `A wound, a blade and an unfixed sorrow...`,
    category: "Self-Reflection",
    subCategory: "unnamed",
    date: "Febuary 2023",
    readTime: "1 min",
    inspiration: "Just after Joining NITR.",
  },
  {
    id: "17",
    title: "Poem 12th",
    content: [
      `I will say, I am quiet,
      without any light,
      in my eyes,
      and a heart full of lies,
      with no respect to the ties.

      No one to look above,
      none to look behind.
      Not even my father tried,
      How come you think,
      I will trust you Blind?
      `,
    ],
    excerpt: `I will say, I am quite...`,
    category: "Nihilistic",
    subCategory: "unnamed",
    date: "January 2023",
    readTime: "1 min",
    inspiration: "Just after JEE results.",
  },
  {
    id: "18",
    title: "Poem 15th",
    content: [
      `I have seen thousands of eyes,
      but none felt warm as yours,
      I have been to many places,
      but with you i find my home.
      
      I have held many hands, but
      I feel the one that will fit is only yours.
      Nothing has ever touched my heart,
      other than that sweet voice of yours.
      
      if i only exist for you to hurt,
      I will gladly be your stepping stone,
      Not just this, but for other life,
      I will wait,
      Till i see my name on those lips of yours.`,
    ],
    excerpt: `I have seen thousands of eyes,
      but none felt warm as yours...`,
    category: "Love and Relationships",
    subCategory: "unnamed",
    date: "June 2023",
    readTime: "1 min",
    inspiration: "Hopeless I am...",
  },
  {
    id: "19",
    title: "Poem 17th",
    content: [
      `Between stars, seas and lands between,
      What a grace it is to walk on same land as you.

      To look at the stars, through glimmer of your black eyes,
      and to be able to dream under same stars as you.

      Do you remember me?
      As fragments of our sweey lie,
      is flooding my mind with an longing of you.
      `,
    ],
    excerpt: `Betwenn stars, seas abd lands between...`,
    category: "Love and Relationships",
    subCategory: "unnamed",
    date: "June 2023",
    readTime: "1 min",
    inspiration: "I was delusional back then, and still am.",
  },
  {
    id: "20",
    title: "Poem 18th",
    content: [
      `Who am I?
      I am open to all,
      but close to none.

      I am almost never serious,
      but always calculating.
      I am an non-believer but,
      also an hopeless dreamer.

      I avoid being lonely but,
      Thats where I find my peace.

      I want to burn the world to feel it's warmth,
      but also to disappear in peace.

      I am but a collection of paradoxes,
      In thousands of agonies, I exist.

      I am Sybrite.
      `,
    ],
    excerpt: `I am Sybrite...`,
    category: "Existential",
    subCategory: "unnamed",
    date: "July 2023",
    readTime: "1 min",
    inspiration: "About me first try.",
  },
   {
    id: "21",
    title: "Poem 19th",
    content: [
      `Should I talk to you a little longer,
      Can i illude myself a little further,
      Will you amuse me a bit more???

      I want to tell you a poem,
      that is scratched on the wall of my throat.

      Can you preten to understand?
      till i get bored with myself.

      Too tired, too long, too hurt,
      to feel hope, to pretend hurt.

      Can you be my illusion?
      Cause I can't help but,
      to live in my delusion.
      `,
    ],
    excerpt: `Should I talk to you a little longer...`,
    category: "Existential",
    subCategory: "unnamed",
    date: "July 2023",
    readTime: "2 min",
    inspiration: "Should I text her again?",
  },
  {
    id: "22",
    title: "Poem 20th",
    content: [
      `Mirror, mirror on the wall,
      What will make me keep her all?

      Should i write a love song,
      To string her hearts wall.
      Like a singing siren,
      in midest of meadow hall.

      Can it be of in ways of sins,
      So i can pin her with blasphemous grin.

      To see her bathe in vermillion light,
      touch her lips snow white,
      keep her heart of all despite.

      Will she ask me "Why?",
      I may indulge in our lie.
      `,
    ],
    excerpt: `Mirror, mirror on the wall,
      What will make me keep her all?...`,
    category: "Self-Reflection",
    subCategory: "unnamed",
    date: "August 2023",
    readTime: "2 min",
    inspiration: "I was thinking about her, and how to keep her.",
  },
  {
    id: "23",
    title: "Poem 27th",
    content: [
      `Have you ever felt so numb,
      that even a threat is like,
      a word from your mum?
      To be ignored and non-chalant,
      But admitted nonetheless.

      Can't comprehend, why you suffer so much?,
      What is meaning of an act foolish as such?

      Tell me,
      What is it like, to have ambition?
      Don't you get tired of this repetition?
      What is this need to get admired?

      Why does every breath has to be of constant hassle?
      Is it not enough to get a bread and a soft basel?
      `,
    ],
    excerpt: `Have you ever felt so numb...`,
    category: "Existential",
    subCategory: "unnamed",
    date: "October 2023",
    readTime: "1 min",
    inspiration: "Burnout hit me like a truck.",
  },
];
