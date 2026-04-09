import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/TQ-Projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";

export default async function MarketplaceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) notFound();

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 pt-28 pb-24">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/marketplace"
            className="hover:text-foreground transition-colors"
          >
            Marketplace
          </Link>
          <span>/</span>
          <span className="text-foreground">{project.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* Left — details */}
          <div className="flex flex-col gap-8">
            {/* Hero image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <Image
                src={project.imageUrl}
                alt={project.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Description */}
            <div>
              <h2 className="mb-3 text-xl font-semibold">About this project</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <Separator />

            {/* Tech stack */}
            <div>
              <h2 className="mb-3 text-xl font-semibold">Tech stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right — purchase card */}
          <aside className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-5 sticky top-24">
              <div>
                <Badge
                  variant={
                    project.status === "Available" ? "default" : "secondary"
                  }
                  className="mb-2"
                >
                  {project.status}
                </Badge>
                <h1 className="text-2xl font-bold leading-snug">
                  {project.name}
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.category}
                </p>
              </div>

              <Separator />

              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold">{project.price}</span>
                <span className="text-xs text-muted-foreground">one-time</span>
              </div>

              <Button
                size="lg"
                className="w-full"
                disabled={project.status !== "Available"}
              >
                {project.status === "Available"
                  ? "Purchase now"
                  : project.status}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Full source code · Commercial license
              </p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
