import { redirect } from "next/navigation";

type Tprops = {
  params: {
    slug?: string[];
  };
};
export default function SearchPage({ params }: Tprops) {
  if (params.slug && params.slug.length > 1) {
    redirect("/");
  }

  return (
    <article>
      <sections>Params: {params.slug && params.slug.toString()}</sections>
    </article>
  );
}
