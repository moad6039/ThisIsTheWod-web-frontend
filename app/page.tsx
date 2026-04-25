// app/page.tsx
// Point d'entrée — redirige vers l'écran de login.

import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/screens/login");
}
