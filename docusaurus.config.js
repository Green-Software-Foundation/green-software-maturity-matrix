// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Green Software Maturity Matrix',
  tagline: 'A green tech self assessment tool for organisations',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://maturity-matrix.greensoftware.foundation/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/green-software-maturity-matrix',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Green Software Foundation', // Usually your GitHub org/user name.
  projectName: 'green-software-maturity-matrix', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Green-Software-Foundation/green-software-maturity-matrix/edit/dev/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "Green Software Maturity Matrix",
        logo: {
          alt: "Green Software Maturity Matrix Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://greensoftware.foundation/",
            position: "right",
            label: "Green Software Foundation project",
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'disclaimer',
        content:
          'This is a draft document only and has not been approved or adopted by the Green Software Foundation. this draft may not be relied upon for any purpose other than review of the current state of development.',
        backgroundColor: '#EBF2D7',
        textColor: '#006d69',
        isCloseable: false,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Github",
                href: "https://github.com/Green-Software-Foundation/green-software-maturity-matrix/",
              },
              {
                label: "Website",
                href: "https://maturity-matrix.greensoftware.foundation",
              },
            ],
          },
          {
            title: "LEGAL",
            items: [
              {
                label: "Trademark Policy",
                href: "https://greensoftware.foundation/policy/trademark",
              },
              {
                label: "Terms and Privacy Policy",
                href: "https://greensoftware.foundation/policy/terms",
              },
            ],
          },
          {
            title: "GSF",
            items: [
              {
                label: "Green Software Foundation",
                href: "https://greensoftware.foundation",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/gsfcommunity",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/green-software-foundation/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Joint Development Foundation Projects, LLC, Green Software Foundation Series`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
