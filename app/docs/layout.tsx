import { pageTree } from '../source';
import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={pageTree} nav={{ title: (
      <div className="flex items-center">
        <img src="https://media3.giphy.com/media/ujD9uqqj3Grtr11afG/giphy.gif" alt="GIF" className="w-8 h-8 mr-2" />
        <span>PentOpsVault</span> 
      </div>
    ) }}>
      {children}
    </DocsLayout>
  );
}
