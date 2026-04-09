import Navbar from "@/components/Navbar";
import ProjectCardList from "@/components/Custom/ProjectCardList";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background image — replace src with your own asset */}
        <Image
          src="/images/hero-cover.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/60" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            Digital Marketplace
          </p>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-foreground">
            Build. Ship.{" "}
            <span className="text-primary">Sell your projects.</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Discover premium, production-ready digital products crafted with
            modern stacks. One purchase, ready to deploy.
          </p>
          <div className="flex gap-3">
            <Link
              href="/marketplace"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Browse Marketplace
            </Link>
            <Link
              href="/about"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-2 text-muted-foreground">
            Hand-picked listings ready for launch.
          </p>
        </div>
        <ProjectCardList />
      </section>
    </>
  );
}
