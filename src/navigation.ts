import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'Consulting', href: '/consulting' },
    { text: 'Real World Ready', href: '/real-world-ready' },
    { text: 'Blog', href: getBlogPermalink() },
    { text: 'Testimonials', href: '/testimonials' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Consulting', href: '/consulting' },
        { text: 'Real World Ready', href: '/real-world-ready' },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],

  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],

  socialLinks: [
    {
      ariaLabel: 'X (Twitter)',
      icon: 'tabler:brand-x',
      href: 'https://x.com/the_2nd_design',
    },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/the.second.design',
    },
    {
      ariaLabel: 'YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://www.youtube.com/@theseconddesign',
    },
    {
      ariaLabel: 'RSS',
      icon: 'tabler:rss',
      href: getAsset('/rss.xml'),
    },
    {
      ariaLabel: 'Github',
      icon: 'tabler:brand-github',
      href: 'https://github.com/TheSecondDesign',
    },
  ],

  footNote: `
    © ${new Date().getFullYear()} The Second Design. All rights reserved.
  `,
};