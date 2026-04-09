import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type ProjectCardProps = {
  name: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard({
  name,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <Card className="w-64 flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-wrap gap-1">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </CardFooter>
    </Card>
  );
}
