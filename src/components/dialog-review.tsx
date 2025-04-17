import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { LoaderCircle } from 'lucide-react'
import { UseFormRegister } from 'react-hook-form'
import { ReviewForm } from '@/schemas/my-appointment-schema'

interface ReviewProps {
    open: boolean
    setOpen: (open: boolean) => void
    title: string
    handleReview: React.FormEventHandler<HTMLFormElement>
    processing: boolean
    register: UseFormRegister<ReviewForm>
}

export default function DialogReview({
    open,
    setOpen,
    title,
    handleReview,
    processing,
    register,
}: ReviewProps) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Review {title}</DialogTitle>
                    <DialogDescription>
                        Leave a review for this appointment.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleReview}>
                    <div className="grid gap-4 py-4">
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="review">Message</Label>
                            <Textarea
                                id="review"
                                {...register('review')}
                                placeholder="Type your review here."
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" tabIndex={4} disabled={processing}>
                            {processing ? (
                                <>
                                    <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
                                    Submitting ...
                                </>
                            ) : (
                                <>Submit</>
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
