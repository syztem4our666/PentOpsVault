import Link from 'next/link';


export default function HomePage() {
  return (
    <section className="w-full pt-8 pb-12 md:pt-16 md:pb-24 lg:pt-24 lg:pb-32 xl:pt-32 xl:pb-48 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center items-center space-y-6 text-center">
          {/* GIF Image and Heading */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <img
                src="https://i.gifer.com/PuK3.gif" // Reemplaza esto con la ruta a tu GIF
                alt="Decorative GIF"
                className="w-32 h-32" // Ajusta el tamaño del GIF (32x32 rem)
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                PentOpsVault
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-lg dark:text-zinc-100 mx-auto">
              Personal GitBook for pentesting, network security, and system administration.
              </p>
            </div>
          </div>
          {/* Link to Documentation */}
          <div>
            <Link href="/docs" className="text-blue-400 underline hover:text-blue-300">
              Go to Vault
            </Link>
          </div>
          {/* About Me Section */}
          <div className="mt-12 text-center">
            <div className="flex flex-col items-center space-y-4">
              {/* Profile Image */}
              <img
                src="https://pbs.twimg.com/profile_images/1777394892408340480/BLK_lKwq_400x400.jpg" // Reemplaza esto con la URL de tu foto de perfil
                alt="Profile"
                className="w-16 h-16 rounded-full border-2 border-gray-600" // Ajusta el tamaño y añade borde
              />
              {/* Profile Information */}
              <p className="text-lg text-white font-semibold">@syztem4our666</p>
              <p className="text-zinc-400 dark:text-zinc-300 text-sm">
                syztem4our666 © 2023 ~ 2024
              </p>
              {/* Navigation Links */}
              <div className="flex justify-center space-x-4 mt-4">
                <Link href="/docs" className="text-blue-400 hover:text-blue-300">Home</Link>
                <Link href="/blog" className="text-blue-400 hover:text-blue-300">Blog</Link>
                <Link href="/docs" className="text-blue-400 hover:text-blue-300">Vault</Link>
              </div>
              {/* Social Links */}
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://github.com/syztem4our666" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.icons8.com/material-outlined/24/ffffff/github.png" // Reemplaza esto con el ícono de GitHub
                    alt="GitHub"
                    className="w-8 h-8"
                  />
                </a>
                <a href="https://twitter.com/syztem4our666" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.icons8.com/?size=100&id=5MQ0gPAYYx7a&format=png&color=000000" // Reemplaza esto con el ícono de Twitter
                    alt="Twitter"
                    className="w-8 h-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
