import PageTitle from "@/components/page-title";
import AppLayouts from "@/pages/layouts/app-layouts";
import { useEffect, useState } from "react";
import { AppointmentProps } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import DialogReview from "@/components/dialog-review";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { myAppointmentSchema, ReviewForm } from "@/schemas/my-appointment-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function MyAppointment() {
    const { register, handleSubmit, formState: { errors } } = useForm<ReviewForm>({
        resolver: zodResolver(myAppointmentSchema),
        mode: "onSubmit",
    })

    const [appointment, setAppointment] = useState<AppointmentProps[]>([])
    const [selectedAppointment, setSelectedAppointment] = useState<AppointmentProps>()
    const [openDialog, setOpenDialog] = useState(false)
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        const savedAppointment = JSON.parse(localStorage.getItem('appointment') || '[]')
        setAppointment(savedAppointment)
    }, [])

    const handleOpenReview = (id: number) => {
        const selected = appointment.find((item) => item.id === id)
        if (selected) {
            setSelectedAppointment(selected)
            setOpenDialog(true)
        }
    }

    const handleReview = (data: ReviewForm) => {
        if (!selectedAppointment) return;

        setProcessing(true)

        const updateAppointment = appointment.map((item) => {
            return item.id === selectedAppointment.id
                ? { ...item, review: data.review }
                : item;
        })


        setTimeout(() => {
            try {
                setAppointment(updateAppointment)
                localStorage.setItem('appointment', JSON.stringify(updateAppointment))
                toast.success("Review saved successfully!")
                setOpenDialog(false)
            } catch (error) {
                console.log(error);
                toast.error("An error occurred while saving the review!")
            } finally {
                setProcessing(false)
            }
        }, 1000)
    }

    useEffect(() => {
        if (errors.review) {
            toast.error(errors.review.message)
        }
    }, [errors])

    return (
        <AppLayouts>
            <PageTitle title='My Appointment' />

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {appointment.length > 0 ? (
                    appointment.map((item) => {
                        return (
                            <Card key={item.id} className="w-full">
                                <CardHeader>
                                    <CardTitle>Name : {item.name}</CardTitle>
                                    <CardDescription>Message : {item.message}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {item.schedule.map((sch) => (
                                        <div key={sch.id} className="mb-2">
                                            <h1 className="font-semibold">{sch.title}</h1>
                                            <p>Date : {sch.date}</p>
                                            <p>Time : {sch.time}</p>
                                        </div>
                                    ))}

                                    {item.review && (
                                        <div className="mt-2 p-2 border rounded bg-gray-50 text-sm text-gray-700">
                                            <strong>Your Review:</strong>
                                            <p>{item.review}</p>
                                        </div>
                                    )}
                                </CardContent>
                                <CardFooter>
                                    {!item.review && (
                                        <Button onClick={() => handleOpenReview(item.id)}>
                                            Review
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        )
                    })
                ) : (
                    <p className="text-center mt-6 text-gray-500">
                        You have no appointments yet.
                    </p>
                )}
            </div>

            {selectedAppointment && (
                <DialogReview
                    title={selectedAppointment.schedule[0]?.title}
                    open={openDialog}
                    setOpen={setOpenDialog}
                    handleReview={handleSubmit(handleReview)}
                    processing={processing}
                    register={register}
                />
            )}
        </AppLayouts>
    )
}
