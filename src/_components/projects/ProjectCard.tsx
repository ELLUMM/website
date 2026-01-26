import Image from "next/image";
import type { Project } from "@/_datas/projects.data";
import CustomBlackButton from "../CustomBlackButton";

type Props = {
  project: Project;
  buttonText?: string; 
};

export default function ProjectCard({ project, buttonText = "View Project →" }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800">
      <div className="relative h-[200px] w-full ">
        <Image
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          fill
          className="object-cover object-[center_top]"
          sizes="520px"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-base leading-7 text-white/60 line-clamp-3">
          {project.description}
        </p>
        <div className="mt-6">
          {/* 부모가 전달한 buttonText를 사용하고, 없으면 기본값(View Project)을 사용함 */}
          <CustomBlackButton text={buttonText} />
        </div>
      </div>
      
    </article>
  );
}