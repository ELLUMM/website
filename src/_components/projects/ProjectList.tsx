import type { Project } from "@/_datas/projects.data";
import ProjectCard from "./ProjectCard";

type Props = {
	projects: Project[];
	cardButtonText?: string;
	animate?: boolean;
	baseDelayMs?: number;
	stepDelayMs?: number;
};

export default function ProjectList({
	projects,
	cardButtonText,
	animate = false,
	baseDelayMs = 0,
	stepDelayMs = 90,
}: Props) {
	return (
		<ul className="grid grid-cols-3 gap-x-6 gap-y-10 w-full">
			{projects.map((p, i) => (
				<li
					key={p.id}
					style={
						animate
							? {
									opacity: 0,
									transform: "scale(0.2)",
									transformOrigin: "center",
									animationName: "fadeUp",
									animationDuration: "320ms",
									animationTimingFunction: "ease-out",
									animationFillMode: "both",
									animationDelay: `${baseDelayMs + i * stepDelayMs}ms`,
							  }
							: undefined
					}
				>
					<ProjectCard project={p} buttonText={cardButtonText} />
				</li>
			))}
		</ul>
	);
}
