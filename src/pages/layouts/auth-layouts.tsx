import { Camera } from 'lucide-react'
import ImageLogin from '../../assets/images/img-login.jpg'

interface AuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayouts({ children }: AuthLayoutProps) {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="relative hidden bg-muted lg:block">
                <img
                    src={ImageLogin}
                    alt="Image"
                    className="absolute inset-0 w-full h-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
                <div className='absolute top-8 left-6 z-10'>
                    <a href="#" className="flex items-center gap-2 text-white font-bold">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <Camera className="size-6" />
                        </div>
                        Photograper Appointment
                    </a>
                </div>
            </div>
            <div className="flex flex-col p-6 md:p-10 bg-slate-50">
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
