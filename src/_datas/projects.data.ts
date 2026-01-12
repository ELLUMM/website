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
    id: "first-children",
    title: "Ayanami Rei",
    description:
      "Ayanami Rei is the First Children and the pilot of Evangelion Unit-00. She is a quiet and emotionally reserved character whose identity is closely tied to themes of loneliness, self-sacrifice, and existential uncertainty. Rei’s presence throughout the series reflects questions about individuality, humanity, and what it means to exist as oneself.",
    coverImage: {
      src: "/projects/ayanami.png",
      alt: "The First Children",
    },
  },
  {
    id: "second-children",
    title: "Soryu Asuka Langley",
    description:
      "Soryu Asuka Langley is the Second Children and the pilot of Evangelion Unit-02. She is confident, outspoken, and driven by a strong desire to prove her own worth. Beneath her bold exterior, Asuka struggles with deep-seated insecurity and fear of abandonment, making her character a portrayal of pride, vulnerability, and emotional conflict.",
    coverImage: {
      src: "/projects/soryu.png",
      alt: "The Second Children",
    },
  },
  {
    id: "third-children",
    title: "Ikari Shinji",
    description:
      "Ikari Shinji is the Third Children and the pilot of Evangelion Unit-01. He is an introverted and sensitive character who is constantly torn between the need for human connection and the fear of being hurt. Shinji’s journey centers on themes of isolation, self-worth, and the difficulty of facing reality while seeking acceptance from others.",
    coverImage: {
      src: "/projects/ikari.png",
      alt: "The Third Children",
    },
  },
];