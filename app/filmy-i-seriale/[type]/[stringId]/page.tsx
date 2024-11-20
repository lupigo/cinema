import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";

type TProps = {
  params: {
    type: string;
    stringId: string;
  };
};

export async function generateMetadata(
  { params }: TProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentData = await parent;

  return {
    title: `${params.type} ID: ${params.stringId}`,
  };
}

export default function MoviesTVPages({ params: { type, stringId } }: TProps) {
  if (type !== "filmy" && type !== "seriale") {
    redirect("/szukaj");
  }

  return (
    <article>
      <section>
        Typ: {type}, ID: {stringId}
      </section>
    </article>
  );
}
