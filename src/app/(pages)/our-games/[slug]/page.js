import { notFound } from "next/navigation";
import { games, getGameBySlug } from "../gamesData";
import GameDetail from "./GameDetail";

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return {};

  return {
    title: `${game.title} - Eraflip Tech`,
    description: game.description,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) notFound();

  const related = games.filter((g) => g.slug !== game.slug).slice(0, 3);

  return <GameDetail game={game} related={related} />;
}
