import { LatestPosts } from "../components/latest-post";
import { getAllPosts } from "../lib/queries";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const searchTerm = typeof searchParams.search === "string" ? searchParams.search : "";
  const category = typeof searchParams.category === "string" ? searchParams.category : "";
  const before = typeof searchParams.before === "string" ? searchParams.before : null;
  const after = typeof searchParams.after === "string" ? searchParams.after : null;

  // Get All Posts
  const { posts, pageInfo } = await getAllPosts(searchTerm, category, { before, after });

  const latestPostProps = {
    posts,
    pageInfo,
    category,
    searchTerm,
  };

  return (
    <div>
      <h1>Blogs</h1>
      <LatestPosts {...latestPostProps} />
    </div>
  );
}
