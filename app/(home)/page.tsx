import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/8MFS7NbPCqNVsd8j/scene.splinecode" 
          style={{ width: '98%', height: '110%' }} 
        />
      </div>
      <section className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="container px-4 md:px-6 text-center flex flex-col items-center justify-center space-y-6">
          {/* GIF Image and Heading */}
          <div className="flex flex-col items-center space-y-4">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-8xl xl:text-20xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                PentOpsVault
              </h1>
              <p className="max-w-[500px] md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-800 mx-auto">
                Personal GitBook for Pentesting, Network Security, and System Administration.
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-4">
            <Button asChild variant="outline">
              <Link href="/docs">
                <span className="flex items-center">
                  Docs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/blog">
                <span className="flex items-center">
                  Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </Button>
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-col items-center space-y-4">

              <img
                src="https://pbs.twimg.com/profile_images/1777394892408340480/BLK_lKwq_400x400.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full border-2 border-gray-600"
              />

              <p className="text-lg text-white font-semibold">@syztem4our666</p>
              <p className="text-zinc-400 dark:text-zinc-300 text-sm">
                syztem4our666 © 2023 ~ 2024
              </p>

              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://github.com/syztem4our666" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
                    alt="GitHub"
                    className="w-8 h-8"
                  />
                </a>
                <a href="https://twitter.com/syztem4our666" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.icons8.com/?size=100&id=5MQ0gPAYYx7a&format=png&color=000000"
                    alt="Twitter"
                    className="w-8 h-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
