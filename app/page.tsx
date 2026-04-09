import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import ProjectCard from "@/components/Custom/ProjectCard";
import { projects } from "@/constants/TQ-Projects";

export default function Home() {
  return (
    <Card className="w-full h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Truqorun Marketplace
        </h1>
        <p className="text-lg mb-6">
          Discover and trade unique digital assets on our platform.
        </p>
        <Link href="/explore">
          <Button>Explore Marketplace</Button>
        </Link>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          {Object.values(projects).map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
