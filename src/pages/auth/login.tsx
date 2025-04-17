import { useEffect, useState } from 'react'
import AuthLayouts from '../layouts/auth-layouts'
import { LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link, useNavigate } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { useAuth } from '@/context/auth-context'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from '@/schemas/login-schema'
import { z } from 'zod'

type LoginForm = z.infer<typeof loginSchema>

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
        mode: "onSubmit",
    });

    const [processing, setProcessing] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (data: LoginForm) => {
        setProcessing(true);

        try {
            const loginSuccess = await login(data);
            if (loginSuccess) {
                navigate('/schedule')
            } else {
                toast.error("Incorrect Email and Password!")
            }
        } catch (error) {
            console.log(error);
            toast.error('Login failed! Try again later.');
        } finally {
            setProcessing(false);
        }
    }

    useEffect(() => {
        if (errors.email) {
            toast.error(errors.email.message);
        } else if (errors.password) {
            toast.error(errors.password.message);
        }
    }, [errors])

    useEffect(() => {
        document.title = "Login | Photographer Appointment"
    }, [])

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
                <form className="flex flex-col gap-6" onSubmit={handleSubmit(handleLogin)} >
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                autoFocus
                                tabIndex={1}
                                autoComplete="email"
                                {...register("email")}
                                placeholder="email@example.com"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                tabIndex={2}
                                autoComplete="current-password"
                                {...register("password")}
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
