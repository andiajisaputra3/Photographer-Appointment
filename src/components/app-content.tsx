import { ReactNode } from "react"

interface ContentProps {
    children: ReactNode
}

export default function AppContent({ children }: ContentProps) {
    return (
        <main className="mx-auto mt-5 flex h-full w-full px-4 max-w-7xl flex-1 flex-col gap-4 rounded-xl">
            {children}
        </main>
    )
}
