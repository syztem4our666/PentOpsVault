import Link from "next/link";

export function Footer(): JSX.Element {
  return (
    <footer className="bg-background text-foreground py-8 px-4 mt-8 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg">PentOpsVault Directory</h3>
          <p className="text-sm">
          GitBook for pentesting, network security, and system administration.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-lg">Links</h4>
          <a
            href="https://github.com/syztem4our666"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            GitHub
          </a>
          <a
            href="https://x.com/syztem4our666/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            Twitter
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-lg">Learn</h4>
          <Link href="/docs" className="text-primary hover:text-primary/80">
            Explore Docs
          </Link>
          <Link href="/blog" className="text-primary hover:text-primary/80">
            Read Blog
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>
          Built by{" "}
          <a
            href="https://x.com/syztem4our666/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            @syztem4our666
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
