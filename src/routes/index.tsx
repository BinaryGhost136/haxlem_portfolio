import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HOUNKPE Moïse Louis | HAXELM — Finance, Audit & Fintech" },
      { name: "description", content: "Découvrez HOUNKPE Yémangnissè Moïse Louis, étudiant à l’IAE de Tours et fondateur du Groupe HAXELM Financial Intelligence Hub. Finance, audit bancaire, fintech, parcours et projets." },
      { property: "og:title", content: "HOUNKPE Moïse Louis | HAXELM — Finance, Audit & Fintech" },
      { property: "og:description", content: "Discipline aujourd'hui, empire demain. Le parcours, les compétences et les projets de HOUNKPE Moïse Louis, fondateur de HAXELM et étudiant à l’IAE de Tours." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
