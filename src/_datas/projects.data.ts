export type Project = {
  id: string;
  title: string;
  description: string;
  coverImage: {
    src: string;
    alt: string;
  };
};

export const projects: Project[] = [
  {
    id: "first-agent",
    title: "Clove",
    description:
      "True to her concept of not fearing death, Clove's greatest strength lies in her ability to influence enemies even after death. She resembles Reina in that she restores health by killing enemies, and Phoenix in that she possesses a resurrection ultimate.",
    coverImage: {
      src: "/projects/clove2.jpg",
      alt: "The First Agent",
    },
  },
  {
    id: "second-agent",
    title: "Omen",
    description:
      "Basically, it performs the role of a smokescreen. At the same time, it is an all-weather agent that can flexibly perform the roles of a semi-entry using the Footprints of Darkness, a scout using Delusion of Persecution, and an info character using the ultimate.",
    coverImage: {
      src: "/projects/omen.jpg",
      alt: "The Second Agent",
    },
  },
  {
    id: "third-agent",
    title: "Viper",
    description:
      "The frequency of dual-smoke combinations, where a spherical smoke agent serves as the main smokescreen and a Viper, specialized in area control and installation skills, replaces the Watcher, has increased. In competitions, the Watcher can be seen as the team's tail or a separate unit, but like the strike team's Yoru and Isor, the Viper can also operate as a tail or lurker.",
    coverImage: {
      src: "/projects/viper2.jpg",
      alt: "The Third Agent",
    },
  },
];