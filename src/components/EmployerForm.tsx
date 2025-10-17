"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const Schema = z.object({
  company: z.string().min(2),
  contactEmail: z.string().email(),
  whatsapp: z.string().min(8),
  location: z.string().min(2),
  role: z.string().min(2),
  skills: z.string().min(2),
  startDate: z.string().optional(),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof Schema>;

export default function EmployerForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<FormData>({ resolver: zodResolver(Schema) });
  const [done, setDone] = useState(false);

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) setDone(true);
  };

  if (done) {
    return (
      <div className="rounded-xl border p-6">
        <h3 className="font-semibold mb-2">Terima kasih!</h3>
        <p className="text-sm text-gray-600">
          Tim kami akan menghubungi Anda sebentar lagi via email/WhatsApp untuk konfirmasi job.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Nama Perusahaan / Individu</label>
        <input className="w-full rounded-lg border px-3 py-2"
               {...register("company")} />
        {!!errors.company && <p className="text-sm text-red-600">{errors.company.message}</p>}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input className="w-full rounded-lg border px-3 py-2" {...register("contactEmail")} />
          {!!errors.contactEmail && <p className="text-sm text-red-600">{errors.contactEmail.message}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">WhatsApp</label>
          <input className="w-full rounded-lg border px-3 py-2" {...register("whatsapp")} />
          {!!errors.whatsapp && <p className="text-sm text-red-600">{errors.whatsapp.message}</p>}
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm mb-1">Lokasi</label>
          <input className="w-full rounded-lg border px-3 py-2" {...register("location")} />
        </div>
        <div>
          <label className="block text-sm mb-1">Peran / Pekerjaan</label>
          <input className="w-full rounded-lg border px-3 py-2" {...register("role")} />
        </div>
        <div>
          <label className="block text-sm mb-1">Mulai (opsional)</label>
          <input type="date" className="w-full rounded-lg border px-3 py-2" {...register("startDate")} />
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Skill yang dibutuhkan</label>
        <input className="w-full rounded-lg border px-3 py-2" placeholder="cleaning, angkut barang, ART" {...register("skills")} />
      </div>
      <div>
        <label className="block text-sm mb-1">Catatan</label>
        <textarea rows={4} className="w-full rounded-lg border px-3 py-2" {...register("notes")} />
      </div>

      <button disabled={isSubmitting}
              className="rounded-2xl px-5 py-3 bg-black text-white">
        {isSubmitting ? "Mengirim..." : "Kirim lowongan"}
      </button>
    </form>
  );
}
