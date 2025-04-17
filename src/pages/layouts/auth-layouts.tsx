import { Link } from 'react-router-dom'

interface AuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayouts({ children }: AuthLayoutProps) {
    return (
        <div className="relative grid h-dvh flex-col items-center justify-center px-8 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
                <div className="absolute inset-0 bg-zinc-900" />
                <Link to="/" className="relative z-20 flex items-center text-lg font-medium">
                    Photographer Appointment
                </Link>
            </div>
            <div className="w-full lg:p-8">
                {children}
            </div>
        </div>
    )
}
