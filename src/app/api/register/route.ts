import { create } from "domain";
import { NextRequest, NextResponse } from "next/server";
import { date } from "zod";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    const webhook = process.env.N8N_EMPLOYER_WEBHOOK;
    if (!webhook) {
      throw new Error("N8N_EMPLOYER_WEBHOOK is not set");
    }

    const url = new URL(webhook);

    const body = {
      id : new Date().getTime(),
      nama_perusahaan: payload.nama_perusahaan ?? payload["Nama Perusahaan / Individu"] ?? "",
      email: payload.email ?? "",
      whatsapp: payload.whatsapp ?? payload.WhatsApp ?? "",
      lokasi: payload.lokasi ?? "",
      peran_pekerjaan: payload.peran_pekerjaan ?? payload["Peran / Pekerjaan"] ?? "",
      mulai: payload.mulai ?? "",
      skills: payload.skills ?? payload["Skill yang dibutuhkan"] ?? "",
      catatan: payload.catatan ?? "",
      created_at: new Date().toISOString(),
    };

    const r = await fetch(url.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!r.ok) {
      const text = await r.text();
      return NextResponse.json(
        { ok: false, error: "n8n responded with error", status: r.status, body: text },
        { status: 502 }
      );
    }

    const data = await r.json().catch(() => ({}));
    return NextResponse.json({ ok: true, forwarded: true, n8n: data }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}