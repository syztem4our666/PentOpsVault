import { type DocsLayoutProps } from 'fumadocs-ui/layout';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { pageTree } from '@/app/source';

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center space-x-4">
        {/* GIF Image */}
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmg1Y2p3ZnV5NTN1MG52amY5dWtuMHFjbGw1aGc3bjcyaTUwc3Z0ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ToMjGpsQduVVwLpZCxy/giphy.webp" // Reemplaza esto con la URL a tu GIF
          alt="Decorative GIF"
          className="w-6 h-6" // Ajusta el tamaño del GIF (8x8 rem)
        />
        {/* Title */}
        <span className="text-purple">PentOpsVault</span>
      </div>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'GitHub',
      url: 'https://github.com/syztem4our666',
      active: 'nested-url',
    },
    {
      text: 'Twitter',
      url: 'https://twitter.com/syztem4our666',
      active: 'nested-url',
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};
