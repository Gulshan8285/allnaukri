import { redirect } from "next/navigation";

export default async function SarkariSchemeDetailRedirectPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  redirect(`/sarkari-yojna/${slug}`);
}
