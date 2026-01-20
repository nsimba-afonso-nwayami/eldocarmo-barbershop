import AdminLayout from "./components/AdminLayout";
import { Link } from "react-router-dom";

export default function NotFoundAdmin() {
  return (
    <>
      <title>Página não encontrada | Dashboard Admin</title>

      <AdminLayout title="Página não encontrada"></AdminLayout>
    </>
  );
}
