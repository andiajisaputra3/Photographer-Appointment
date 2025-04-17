import { useEffect, useState } from 'react'
import AppLayouts from '../layouts/app-layouts'
import PageTitle from '@/components/page-title'
import { ScheduleProps } from '@/types';
import { scheduleCard } from '@/lib/schedule-items';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Schedule() {

    const [schedule, setSchedule] = useState<ScheduleProps[]>([]);

    useEffect(() => {
        setSchedule(scheduleCard)
    }, [])

    return (
        <AppLayouts>
            <PageTitle title='Schedule' />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {schedule.map((item) => {
                    return (
                        <Card key={item.id} className='w-full'>
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <h1>Date : {item.date}</h1>
                                <p>Time : {item.time}</p>
                                <div className="mt-1">
                                    {item.available ? (
                                        <span className="inline-block bg-green-600 text-white rounded-full px-4 py-1 text-sm">
                                            Tersedia
                                        </span>
                                    ) : (
                                        <span className="inline-block bg-red-600 text-white rounded-full px-4 py-1 text-sm">
                                            Penuh
                                        </span>
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter className='flex justify-end'>
                                {item.available ? (
                                    <Link to={`/appointment-form/${item.id}`}>
                                        <Button>Make Appointment</Button>
                                    </Link>
                                ) : (
                                    <Button disabled>Make Appointment</Button>
                                )}
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
        </AppLayouts>
    )
}