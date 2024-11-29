import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import { BorderBeam } from "@/components/ui/border-beam";
import ShimmerButton from "@/components/ui/shimmer-button";
import Link from "next/link"; // Importar Link de Next.js para hacer las redirecciones

export default function HomePage() {
  return (
    <main className="relative flex flex-3 justify-center text-center items-center overflow-hidden py-12"> {/* Añadir padding vertical */}
      {/* Cuadro con GridPattern */}
      <div className="relative flex w-[80vw] md:w-[73vw] h-[60vh] md:h-[70vh] items-center justify-center overflow-hidden rounded-lg border bg-background p-12 md:shadow-xl mb-8">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:radial-gradient(520px_circle_at_center,white,transparent)]",
          )}
        />

        {/* Contenido dentro del GridPattern */}
        <div className="absolute z-10 flex flex-col items-center justify-center text-center">
          {/* Icono centrado encima de PentOpsVault */}
          <img
            src="https://icons.iconarchive.com/icons/gakuseisean/ivista-2/128/Network-Globe-Disconnected-icon.png"
            width="128"
            height="128"
            alt="Internet Icon"
            className="mb-2 mx-auto" // Añadido mx-auto para centrar horizontalmente
          />

          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            PentOpsVault
          </span>
          <BorderBeam />

          <p className="text-xl text-muted-foreground mt-3">
            Personal GitBook for Pentesting, Network Security, and System Administration.
          </p>

          {/* Botones dentro del GridPattern */}
          <div className="flex gap-4 mt-4"> {/* Reducir espacio entre los botones */}
            <div className="z-10 flex items-center justify-center">
              <Link href="/docs"> {/* Enlace a la página de Docs */}
                <ShimmerButton className="shadow-2xl px-8 py-1">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Docs
                  </span>
                </ShimmerButton>
              </Link>
            </div>

            <div className="z-10 flex items-center justify-center">
              <Link href="/blog"> {/* Enlace a la página del Blog */}
                <ShimmerButton className="shadow-2xl px-8 py-1">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Blog
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
