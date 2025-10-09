import Link from "next/link";

export const dynamic = "force-static";

type SlugParams = { slug: string[] };

export default async function PprPage({ params }: { params: Promise<SlugParams> }) {
  const resolved = await params;
  const parts = Array.isArray(resolved.slug) ? resolved.slug : [resolved.slug];
  const slugSegment = parts[0];
  return (
    <main>
      <div className="mb-4">
        <Link href="/" prefetch={false}>Back to Home</Link>
      </div>
      <h2>PPR page</h2>
      <p>slug: {slugSegment}</p>
    </main>
  );
}
