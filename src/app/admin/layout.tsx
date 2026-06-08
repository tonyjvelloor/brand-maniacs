import Link from "next/link";
import { Activity, Users, Settings } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row pt-20">
            {/* Admin Sidebar */}
            <aside className="w-full md:w-64 bg-foreground text-background border-r-4 border-background flex flex-col brutalist-shadow z-20 sticky top-20 h-[calc(100vh-5rem)]">
                <div className="p-6 border-b-4 border-background bg-accent-yellow">
                    <h2 className="font-heading text-2xl font-black uppercase tracking-tighter text-black">
                        Admin Tools
                    </h2>
                </div>

                <nav className="flex-1 p-4 flex flex-col gap-2">
                    <Link
                        href="/admin/creator-intelligence"
                        className="flex items-center gap-3 p-3 font-bold uppercase transition-none hover:bg-black hover:text-accent-yellow border-2 border-transparent hover:border-black"
                    >
                        <Users className="w-5 h-5" />
                        Creator Intel
                    </Link>

                    <Link
                        href="#"
                        className="flex items-center gap-3 p-3 font-bold uppercase transition-none text-gray-500 cursor-not-allowed border-2 border-transparent"
                    >
                        <Activity className="w-5 h-5" />
                        Audit Logs (Soon)
                    </Link>

                    <Link
                        href="#"
                        className="flex items-center gap-3 p-3 font-bold uppercase transition-none text-gray-500 cursor-not-allowed border-2 border-transparent"
                    >
                        <Settings className="w-5 h-5" />
                        Settings
                    </Link>
                </nav>

                <div className="p-6 border-t-4 border-background mt-auto">
                    <Link
                        href="/"
                        className="text-sm font-bold uppercase underline hover:text-accent-red"
                    >
                        ← Back to Site
                    </Link>
                </div>
            </aside>

            {/* Admin Content Area */}
            <main className="flex-1 p-6 md:p-10 hide-scrollbar overflow-y-auto w-full z-10 relative bg-background">
                <div className="max-w-5xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
