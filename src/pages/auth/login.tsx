import React, { useState } from 'react'
import AuthLayouts from '../layouts/auth-layouts'
import { LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link, useNavigate } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

type LoginForm = {
    email: string,
    password: string
}

export default function Login() {
    const [formData, setFormData] = useState<LoginForm>({ email: "", password: "" });
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setProcessing(true);

        setTimeout(() => {
            try {
                const loginSuccess = true;
                if (loginSuccess) {
                    navigate('/')
                } else {
                    toast.error("Email atau Password salah!")
                }
            } finally {
                setProcessing(false);
            }
        }, 1000)
    }

    return (
        <AuthLayouts>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <Link to="/" className="relative z-20 flex items-center justify-center lg:hidden">
                    Photographer Appointment
                </Link>
                <div className="flex flex-col items-start gap-2 text-left sm:items-center sm:text-center">
                    <h1 className="text-xl font-medium">Log in to your account</h1>
                    <p className="text-muted-foreground text-sm text-balance">Enter your email and password below to log in</p>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-6" onSubmit={handleSubmit} >
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="email@example.com"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                tabIndex={2}
                                autoComplete="current-password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                placeholder="Password"
                            />
                        </div>

                        <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                            {processing ? (
                                <>
                                    <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
                                    Logging in...
                                </>
                            ) : (
                                <>
                                    Log in
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </AuthLayouts>
    )
}
