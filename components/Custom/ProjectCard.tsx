import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/constants/TQ-Projects";

type ProjectCardProps = Pick<
  Project,
  | "slug"
  | "name"
  | "description"
  | "technologies"
  | "imageUrl"
  | "price"
  | "status"
>;

export default function ProjectCard({
  slug,
  name,
  description,
  technologies,
  imageUrl,
  price,
  status,
}: ProjectCardProps) {
  return (
    <Card className="w-72 flex flex-col overflow-hidden p-0 gap-0">
      {/* Thumbnail */}
      <div className="relative h-40 w-full bg-muted">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          onError={() => {}} /* placeholder fallback handled by bg-muted */
        />
        <Badge
          variant={status === "Available" ? "default" : "secondary"}
          className="absolute right-3 top-3"
        >
          {status}
        </Badge>
      </div>

      <CardHeader className="pt-4">
        <CardTitle className="text-base">{name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-1">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </CardContent>

      <CardFooter className="mt-auto flex items-center justify-between">
        <span className="text-sm font-semibold">{price}</span>
        <Link
          href={`/marketplace/${slug}`}
          className={cn(buttonVariants({ size: "sm" }))}
        >
          View details
        </Link>
      </CardFooter>
    </Card>
  );
}
