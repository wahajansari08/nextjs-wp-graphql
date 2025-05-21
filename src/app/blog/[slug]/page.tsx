import { Metadata, ResolvingMetadata } from "next";
import { getPostsBySlug } from "@/app/lib/queries";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPostsBySlug(params.slug);
  const previousImage = (await parent).openGraph?.images || [];

  return {
    title: post?.title,
    openGraph: {
      images: ["/open-graph.jpg", ...previousImage],
    },
  };
}





export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostsBySlug(params.slug);

  if (!post) {
    return <div>Post not found.</div>;
  }

  const formattedDate = new Date(post.date);
  const date = formattedDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      <h1
        className="font-bold text-2xl mb-4"
        dangerouslySetInnerHTML={{ __html: post.title }}
      ></h1>
      <div>
        Published on <b>{date}</b> by {post?.author?.node?.name}
      </div>
      <div className="article" dangerouslySetInnerHTML={{ __html: post?.content }} />
    </div>
  );
}
