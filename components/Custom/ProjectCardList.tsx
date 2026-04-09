"use client";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants/TQ-Projects";

export default function ProjectCardList() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {Object.values(projects).map((project) => (
        <ProjectCard
          key={project.slug}
          slug={project.slug}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          imageUrl={project.imageUrl}
          price={project.price}
          status={project.status}
        />
      ))}
    </div>
  );
}
