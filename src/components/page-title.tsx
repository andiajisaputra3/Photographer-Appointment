import { useEffect } from "react"

interface PageTitleProps {
    title: string
}

export default function PageTitle({ title }: PageTitleProps) {

    useEffect(() => {
        document.title = `${title} | Photographer Appointment`
    }, [title])

    return (
        <h1 className='font-bold text-4xl mb-2 text-center'>{title}</h1>
    )
}
