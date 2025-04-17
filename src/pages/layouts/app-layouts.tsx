import AppContent from "@/components/app-content";
import AppHeader from "@/components/app-header";

interface AppLayoutProps {
    children: React.ReactNode
}

export default function AppLayouts({ children }: AppLayoutProps) {
    return (
        <>
            <AppHeader />
            <AppContent>
                {children}
            </AppContent>
        </>
    )
}
