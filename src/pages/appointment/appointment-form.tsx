import AppLayouts from '../layouts/app-layouts'
import PageTitle from '@/components/page-title'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ScheduleProps } from '@/types'
import { scheduleCard } from '@/lib/schedule-items'
import { toast } from 'sonner'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import { Label } from '@radix-ui/react-label'
import { z } from 'zod'
import { appointmentFormSchema } from '@/schemas/appointment-form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

type AppointmentForm = z.infer<typeof appointmentFormSchema>

export default function AppointmentForm() {
    const { id } = useParams()

    const { register, handleSubmit, formState: { errors } } = useForm<AppointmentForm>({
        resolver: zodResolver(appointmentFormSchema),
        defaultValues: {
            id: id || ""
        },
        mode: "onSubmit",
    })

    const [processing, setProcessing] = useState(false);
    const [schedule, setSchedule] = useState<ScheduleProps | null>(null)
    const navigate = useNavigate();

    useEffect(() => {
        const data = scheduleCard.find((item) => item.id === Number(id));

        if (data) {
            setSchedule(data)
        }
    }, [id])

    const handleAppointment = async (data: AppointmentForm) => {
        setProcessing(true);

        const isSuccess = Math.random() > 0.3

        setTimeout(() => {
            try {
                if (isSuccess) {
                    const appointmentData = {
                        id: data.id,
                        name: data.name,
                        message: data.message,
                        schedule: [schedule],
                    }

                    const savingAppointment = JSON.parse(localStorage.getItem('appointment') || '[]')
                    localStorage.setItem("appointment", JSON.stringify([...savingAppointment, appointmentData]))

                    toast.success("Appointment successfully created!")

                    navigate("/appointment-info")
                } else {
                    toast.error("An error occurred while creating an appointment, please try again!")
                }
            } finally {
                setProcessing(false);
            }
        }, 1000)
    }

    useEffect(() => {
        if (errors.name) {
            toast.error(errors.name.message)
        } else if (errors.message) {
            toast.error(errors.message.message)
        }
    }, [errors])

    if (!schedule) {
        return <p className="p-4 text-gray-400">Schedule not found. Cannot make appointment</p>;
    }

    return (
        <AppLayouts>
            <PageTitle title='Appointment Form' />

            <div className="p-4">
                <Card className="max-w-[450px] mx-auto">
                    <CardHeader>
                        <CardTitle>Make Appointment for {schedule.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Date: {schedule.date}</p>
                        <p>Time: {schedule.time}</p>
                        <form onSubmit={handleSubmit(handleAppointment)} className="mt-4 flex flex-col gap-4">
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="name"
                                        {...register('name')}
                                        placeholder="Jhon Doe"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id='message' placeholder="Type your message here." {...register('message')} />
                            </div>
                            <div className='flex justify-end w-full'>
                                <Button type="submit" tabIndex={4} disabled={processing}>
                                    {processing ?
                                        <>
                                            <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
                                            Submitting ...
                                        </> :
                                        <>
                                            Submit
                                        </>
                                    }
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayouts>
    )
}
