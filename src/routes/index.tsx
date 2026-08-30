import { createFileRoute } from "@tanstack/react-router";
import FishingBook from "@/components/FishingBook";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Horgászási Technikák – FiveM horgász könyv UI" },
      {
        name: "description",
        content:
          "Régies, animált horgászkönyv felület FiveM szerverre: kinyíló bőrkötés, lapozható oldalak és halismereti leírások.",
      },
      { property: "og:title", content: "Horgászási Technikák – FiveM horgász könyv UI" },
      {
        property: "og:description",
        content:
          "Animált, antik hatású horgászkönyv UI lapozható halismereti oldalakkal FiveM szerverekhez.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="desk">
      <h1 className="sr-only">Horgászási Technikák – halismereti könyv</h1>
      <FishingBook />
    </main>
  );
}
