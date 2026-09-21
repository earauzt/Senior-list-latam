import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));

  console.log("[Senior List /api/leads stub — no email send]", {
    ...body,
    emailed: false,
    stored: "console-only",
  });

  return NextResponse.json({
    ok: true,
    emailed: false,
    stored: "console-only",
    message:
      "Lead accepted in draft mode. Nothing was emailed or written to a database.",
  });
}
