import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="w-full h-screen flex flex-col justify-center py-12 md:py-24 lg:py-32 xl:py-48 relative">
      {/* Div para el fondo de GIF */}
      <div className="absolute inset-0 flex justify-center items-center" style={{ marginTop: "-45vh" }}>
        <img
          src="https://media3.giphy.com/media/ujD9uqqj3Grtr11afG/giphy.gif"
          alt="Background GIF"
          className="w-24 h-auto sm:w-32 sm:h-auto md:w-40 md:h-auto lg:w-48 lg:h-auto xl:w-56 xl:h-auto object-cover"
          style={{ zIndex: -1 }}
        />
      </div>

      {/* Contenido de la sección */}
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
              {/* Enlace a una sección específica */}
              <Link href="#" className="underline underline-offset-2"></Link>
            </p>
            <p className="text-sm text-white dark:text-white">
              Go to 
              {/* Enlace a la sección de documentos */}
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
