import { redirect } from "next/navigation";
import { applicationDetailPath } from "@/admin/lib/config";

/** Directory detail reuses the application workspace route. */
export default async function PsychologistDetailRedirect({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  redirect(applicationDetailPath(id));
}
