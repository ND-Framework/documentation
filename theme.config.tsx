import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';
import { useTheme } from 'nextra-theme-docs';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://localhost:3000${asPath}`;
  const description = frontMatter.description || "Documentation for ND Framework.";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/static/nd.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function useNextSeoProps() {
    const { asPath } = useRouter();
    const arr = asPath.replace(/[-_]/g, ' ').split('/');
    const category = (arr[1][0] !== '#' && arr[1]) || 'ND Framework';
    const rawTitle = arr[arr.length - 1];
    const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

    return {
        titleTemplate: `${title} - ${
            rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
        }`,
    };
}

function logoImage() {
    const { theme } = useTheme();
    const logoSrc = theme === 'light'
        ? 'https://i.imgur.com/7k3dJmx.png'
        : 'https://user-images.githubusercontent.com/86536434/193913064-01b8a9b4-97a2-4bd2-9f33-99f89558ac01.png';
    return (
        <img src={logoSrc} className="mainLogo" />
    );
}

const config: DocsThemeConfig = {
  logo: logoImage,
  project: {
    link: 'https://github.com/ND-Framework',
  },
  chat: {
    link: 'https://discord.gg/andys-development-857672921912836116',
  },
  docsRepositoryBase: 'https://github.com/ND-Framework/documentation',
  footer: {
    text: 'Copyright © 2023 ND Framework',
  },
  head: useHead,
  useNextSeoProps: useNextSeoProps,
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
}

export default config
