import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db/index";
import { registrations } from "@/db/schema";
import { corsHeaders, handleOptions } from "@/lib/api-utils";

const registerSchema = z.object({
  nama: z.string().min(1, "Nama wajib diisi").max(255),
  wa: z.string().min(1, "WA wajib diisi").max(50),
  email: z.string().email("Email tidak valid").nullable().optional(),
  program: z.string().min(1, "Program wajib diisi").max(255),
  jenjang: z.string().min(1, "Jenjang wajib diisi").max(50),
  paket: z.string().max(255).nullable().optional(),
  harga: z.number().nullable().optional(),
  jenisLes: z.string().max(50).nullable().optional(),
  alamat: z.string().nullable().optional(),
  waktuLes: z.string().max(255).nullable().optional(),
  durasi: z.string().max(50).nullable().optional(),
  orangTua: z.string().max(255).nullable().optional(),
  pesan: z.string().nullable().optional(),
  invoiceNo: z.string().max(100).nullable().optional(),
});

export async function OPTIONS() {
  return NextResponse.json(null, { headers: corsHeaders() });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const headers = corsHeaders(origin);

  try {
    const body = await request.json();
    const parsed = registerSchema.parse(body);
    const rows = await db.insert(registrations).values(parsed).returning();
    return NextResponse.json(rows[0], { status: 201, headers });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validasi gagal", details: error.issues },
        { status: 400, headers },
      );
    }
    return NextResponse.json(
      { error: "Gagal mendaftarkan" },
      { status: 500, headers },
    );
  }
}
