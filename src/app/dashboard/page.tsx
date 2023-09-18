import { Metadata } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { db } from "@/lib/db";
import ApiDashboard from "@/components/ui/ApiDashboard";
import ReqApiKey from "@/components/ui/ReqApiKey";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Similarity Api Dashboard"
}

export default async function Dashboard({ }) {
    const user = await getServerSession(authOptions);
    if (!user) {
        return notFound();
    }
    const apiKey = await db.apiKey.findFirst({
        where: {userId: user.user.id, enabled: true}
    })
    return <div className="max-w-7xl mx-auto mt-16">
        {apiKey ? <ApiDashboard />: <ReqApiKey />}
    </div>
}
