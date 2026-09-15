/**
 * Site-wide constants. Keep nav + booking URL in one place.
 */
export const site = {
  name: 'Aaron Cabrera',
  url: 'https://aarondesign.rocks',
  calUrl: 'https://cal.com/aaron-cabrera-27ln1w',
  nav: [
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/resume', label: 'Resume' },
  ],
} as const;
