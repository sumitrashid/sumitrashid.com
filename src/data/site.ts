// =====================================================
// YOUR SITE SETTINGS
// Edit the text between the quotation marks.
// Keep the quotation marks and the commas.
// =====================================================

export const site = {
  name: 'Sumit Rashid',
  tagline: 'A curious mind. An evolving perspective.',
  description:
    'The personal publication of Sumit Rashid: essays, journal entries, travel stories, photography, and notes on film, books, music and art.',
  url: 'https://sumitrashid.com',

  // CHANGE THIS to your real email address
  email: 'your-email@example.com',

  // CHANGE THESE to your real profile addresses
  social: {
    instagram: 'https://www.instagram.com/your-username',
    linkedin: 'https://www.linkedin.com/in/your-username',
  },

  // HOMEPAGE INTRODUCTION (first draft, refine freely)
  introHeadline:
    'I write, photograph and travel in order to understand what I am paying attention to.',
  introParagraphs: [
    'This is where I keep what I find: essays that begin as questions, notes from places I have passed through, photographs of ordinary light, and the films and books that stayed with me.',
    'It will change as I do, and that is rather the point.',
  ],

  // HOMEPAGE PHOTOS: upload your photos to the "public/images" folder,
  // then change the file names below (keep the /images/ part).
  featuredPhoto: {
    src: '/images/placeholder-portrait.svg',
    alt: 'A placeholder for the featured photograph',
    caption: 'Caption goes here.',
    place: 'LOCATION · YEAR',
  },
  photoStrip: [
    { src: '/images/placeholder-dark.svg', alt: 'Photograph placeholder', height: 420 },
    { src: '/images/placeholder-portrait.svg', alt: 'Photograph placeholder', height: 540 },
    { src: '/images/placeholder-dark.svg', alt: 'Photograph placeholder', height: 360 },
  ],

  // MAIN MENU (top of every page)
  nav: [
    { label: 'Perspectives', href: '/perspectives/' },
    { label: 'Journal', href: '/journal/' },
    { label: 'Travel & Places', href: '/travel/' },
    { label: 'Photography', href: '/photography/' },
    { label: 'Cinema & Culture', href: '/culture/' },
    { label: 'About', href: '/about/' },
  ],

  // FOOTER LINKS (email, Instagram, LinkedIn and RSS are added automatically)
  footerNav: [
    { label: 'About', href: '/about/' },
    { label: 'Professional Work', href: '/work/' },
  ],
};

// TITLES AND DESCRIPTIONS of each section's own page
export const sections: Record<string, { title: string; intro: string; layout: string }> = {
  perspectives: {
    title: 'Perspectives',
    intro: 'Essays, opinions and reflections on ideas that keep me thinking.',
    layout: 'cards',
  },
  journal: {
    title: 'Journal',
    intro: 'Shorter notes and personal stories, written as they happen.',
    layout: 'index',
  },
  travel: {
    title: 'Travel & Places',
    intro: 'Journeys and cultural observations from places near and far.',
    layout: 'cards',
  },
  photography: {
    title: 'Photography',
    intro: 'Street, landscape, architecture and everyday life, in photo essays and series.',
    layout: 'gallery',
  },
  culture: {
    title: 'Cinema & Culture',
    intro: 'Notes on films, books, music and art.',
    layout: 'index',
  },
};
