import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import { BookIcon } from 'lucide-react';
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
      <div className="flex items-center">
        <img
          src="https://icons.iconarchive.com/icons/gakuseisean/ivista-2/128/Network-Globe-Disconnected-icon.png"
          width="32"
          height="32"
          alt="Internet Icon"
          className="mr-2"
        />
        <span>PentOpsVault</span>
      </div>
    ),
  },
  links: [
    {
      text: "Documentation",
      icon: <BookIcon />,
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "Blog",
      icon: <BookIcon />,
      url: "/blog",
      active: "nested-url",
    },
    {
      text: "GitHub",
      icon: <GitHubLogoIcon />,
      url: "https://github.com/syztem4our666",
      active: "url",
    },
  ],
};
