import { redirect } from "next/navigation";

// Redirect to overview page
export default function AboutPage() {
  redirect("/about/overview");
}
