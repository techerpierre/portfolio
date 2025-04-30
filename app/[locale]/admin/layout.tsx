import { AdminMenu } from "@/components/organisms/admin/AdminMenu";
import { ImageProvider } from "@/components/organisms/admin/assets/ImageContext";
import { PropsWithChildren } from "react";

export default function AdminLayout({children}: PropsWithChildren) {
    return <ImageProvider>
        <div className="bg-white">
            <AdminMenu/>
            <main>{children}</main>
        </div>
    </ImageProvider> 
}