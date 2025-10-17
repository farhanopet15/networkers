import { redirect } from "next/navigation";

export default function Work() {
  redirect(process.env.NEXT_PUBLIC_TELEGRAM_JOIN_LINK!);
}