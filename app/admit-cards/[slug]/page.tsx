import { redirect } from "next/navigation";

export default async function AdmitCardDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  await params;
  redirect("/sarkari-yojna");
}
