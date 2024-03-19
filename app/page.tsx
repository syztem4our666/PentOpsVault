import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="w-full h-screen flex flex-col justify-center py-12 md:py-24 lg:py-32 xl:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
            👾PentOpsVault👾
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl dark:text-white">
            My curated collection of tips, tricks, and tools for Pentesting & Networking & Sysadmin. 
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <p className="text-xs text-white dark:text-white">
              <Link href="#" className="underline underline-offset-2"></Link>
            </p>
            <p className="text-sm text-white dark:text-white">
              Go to 
              <Link href="/docs" className="underline underline-offset-2 text-white">
                {' '}docs
              </Link>
              {' '}to access the documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
