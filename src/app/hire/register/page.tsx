import EmployerForm from "@/components/EmployerForm";

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h2 className="text-3xl font-bold mb-2">Posting lowongan cepat</h2>
      <p className="text-gray-600 mb-6">Isi form, kami undang pekerja terdekat lewat Telegram dalam hitungan menit.</p>
      <EmployerForm />
    </div>
  );
}