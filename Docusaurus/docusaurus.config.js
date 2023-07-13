// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title:   'Podunk City',                     // Or else
  tagline: 'North Rhine-Westphalia, Germany', // Or else
  favicon: 'img/favicon.ico',                 // Or else
  // url:     'https://dummy.github.io',         // Or else
  // baseUrl: '/',                               // Or else
  // url:     'https://podunk.vlsm.org',         // Or else
  // baseUrl: '/',                               // Or else
  url:  'https://podunkcity.github.io',       // Or else
  baseUrl: '/podunk/',                        // Or else
  organizationName: 'podunkcity',             // (Usually your GitHub org/user name)
  projectName:      'Podunk',                 // (Usually your repo name)
  trailingSlash:    'true',                   // "true/" or "false"

  onBrokenLinks: 'throw',                     // ZCZC Extra
  onBrokenMarkdownLinks: 'warn',              // ZCZC Extra

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/podunk2.jpg',
      navbar: {
        title: 'HOME',
        logo: {
          alt:         'Logo',
          src:         'img/podunk2.jpg',
        },
        items: [
          {
            type:      'docSidebar',
            sidebarId: 'tutorialSidebar',
            position:  'left',
            label:     'General',
          },
          {
            to:        '/blog', 
            label:     'Blog', 
            position:  'left',
          },
          {
            href:      'https://github.com/podunkcity/podunk/',
            label:     'GitHub',
            position:  'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'General',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/podunkcity/podunk/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BinKadal, Sendirian Berhad --- 
        REV01: Thu 13 Jul 2023 23:00
`,
        // REV01: Thu 13 Jul 2023 23:00
        // START: Sun 09 Jul 2023 17:00
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
