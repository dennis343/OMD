import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_HOSTS = new Set([
  "oooh-my-dog.de",
  "www.oooh-my-dog.de",
  "localhost",
  "127.0.0.1",
]);

export async function GET(request: Request) {
  const consent = request.headers.get("x-omd-consent");
  if (consent !== "accept") {
    return NextResponse.json({ error: "consent required" }, { status: 403 });
  }

  const origin = request.headers.get("origin") || "";
  try {
    const host = origin ? new URL(origin).hostname : "";
    if (host && !ALLOWED_HOSTS.has(host)) {
      return NextResponse.json({ error: "forbidden origin" }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ error: "invalid origin" }, { status: 400 });
  }

  const key = process.env.OMD_GMAPS_KEY || "";
  if (!key) return NextResponse.json({ error: "not configured" }, { status: 503 });

  return NextResponse.json(
    { key },
    { headers: { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex" } }
  );
}
