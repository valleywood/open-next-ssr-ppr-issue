import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Reproduction Repo</h1>
      <p>Testing SSR blank page issue with OpenNext/Cloudflare</p>
      
      <div style={{ marginTop: "2rem" }}>
        <h2>Test Links:</h2>
        <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          <Link href="/ppr/test">PPR Page (Static)</Link>
          <Link href="/ssr/test">SSR Page (Dynamic) - This one fails</Link>
        </div>
      </div>
    </main>
  );
}