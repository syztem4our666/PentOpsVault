import { type HomeLayoutProps } from "fumadocs-ui/home-layout";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src="icon.png" 
          style={{ width: 24, height: 24, marginRight: 8 }} 
        />
        PentOpsVault
      </div>
    ),
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "Blog",
      url: "/blog",
      active: "nested-url",
    },
    {
      text: "GitHub",
      url: "https://github.com/syztem4our666",
      active: "url",
    },
  ],
};
