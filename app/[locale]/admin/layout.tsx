import { AdminMenu } from "@/components/organisms/admin/AdminMenu";
import { PropsWithChildren } from "react";

export default function AdminLayout({children}: PropsWithChildren) {
    return <div className="bg-white">
        <AdminMenu/>
        <main>{children}</main>
    </div>
}