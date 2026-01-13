// _components/projects/ProjectsSection.tsx
import { projects } from "@/_datas/projects.data";
import ProjectList from "./ProjectList";
import CustomWhiteButton from "../CustomWhiteButton";

export default function ProjectsSection() {
  // projects.data.ts에서 처음 3개만 변수에 담음
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <section className="py-4 px-16">
      <h2 className="text-4xl font-thin text-white">Key Projects</h2>

      <div className="mt-16">
        {/* 3개만 전달 */}
        <ProjectList projects={featuredProjects} />
      </div>

      <div className="mt-8 flex justify-center">
        <CustomWhiteButton text="View More Projects"/>
      </div>
    </section>
  );
}