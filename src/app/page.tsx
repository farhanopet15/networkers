import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              “Grab for daily workers” — cocokkan <span className="underline">pekerja lokal</span> dengan job Anda, dalam hitungan menit.
            </h1>
            <p className="text-lg dark:text-gray-300 text-gray-600 mb-6">
              Sistem matchmaking otomatis berbasis lokasi, skill tag, dan ketersediaan. Cocok untuk UMKM, EO, rumah tangga, proyek harian.
            </p>
            <div className="flex gap-3">
              {/* <Link href="/hire/register" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-black text-white">
                Daftarkan lowongan <ArrowRight size={18}/></Link> */}
              <Link href="http://t.me/NettWorkersBot" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-black text-white">
                Saya Mencari Karyawan (Telegram)<ArrowRight size={18}/>
              </Link>
            </div>
            <p className="mt-3 text-sm dark:text-gray-300 text-gray-500">
              Menemukan Pekerja Cepat Mudah Dan Tepat.
            </p>
          </div>
          <div className="rounded-2xl border p-6">
            <ul className="space-y-3 text-sm">
              <li>✅ Otomasi komunikasi (deskripsi job, undangan, follow-up)</li>
              <li>✅ Insight perilaku & reputasi komunitas</li>
              <li>✅ Workflow instan: Posting → Undang → Konfirmasi</li>
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl border p-4">
                <div className="text-2xl font-bold">15 menit</div>
                <div className="text-xs dark:text-gray-300 text-gray-500">rata-rata waktu match</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="text-2xl font-bold">90%</div>
                <div className="text-xs dark:text-gray-300 text-gray-500">accept rate undangan</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="text-2xl font-bold">1.5k</div>
                <div className="text-xs dark:text-gray-300 text-gray-500">aktif per bulan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-6">
          {[{
              title: "Solusi",
              items: ["Match Otomatis Lokasi + Skill", "Workflow Rekrut Instan", "Akun Mode Perekrut"]
            },
            {
              title: "Keunggulan",
              items: ["Automasi Komunikasi", "Data Lokal & Reputasi", "Kepercayaan Komunitas"]
            },
            {
              title: "Channels",
              items: ["Telegram/Whatsapp", "Kemitraan Komunitas", "Referral Recruiter"]
            }
          ].map((col) => (
            <div key={col.title} className="rounded-xl border p-5">
              <h3 className="font-semibold mb-2 dark:text-gray-300 text-gray-600">{col.title}</h3>
              <ul className="list-disc pl-5 text-sm dark:text-gray-300 text-gray-600 space-y-1">
                {col.items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tambahkan Toggle Tema */}
      <ThemeToggle />
    </main>
  );
}
