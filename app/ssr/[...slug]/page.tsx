import Link from "next/link";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
// NOTE: Uncomment this to fix the issue
// export const revalidate = 0;

type SlugParams = { slug: string[] };

export default async function SsrPage({ params }: { params: Promise<SlugParams> }) {
  const resolved = await params;
  const slugSegment = Array.isArray(resolved.slug) ? resolved.slug[0] : resolved.slug;
  const renderedAt = new Date().toISOString();

  return (
    <main>
      <div className="mb-4">
        <Link href="/" prefetch={false}>Back to Home</Link>
      </div>
      <div className="text-sm mb-2">Rendered at: {renderedAt} (SSR - Dynamic)</div>
      <div className="mb-4 p-3" style={{ background: "#f6f6f6" }}>
        <h3>Debug</h3>
        <p><strong>Slug:</strong> {slugSegment}</p>
        <p><strong>Full slug array:</strong> {JSON.stringify(resolved.slug)}</p>
      </div>
    </main>
  );
}
