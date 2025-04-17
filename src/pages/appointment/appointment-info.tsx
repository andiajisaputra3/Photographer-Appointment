import PageTitle from "@/components/page-title";
import AppLayouts from "../layouts/app-layouts";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function AppointmentInfo() {
    return (
        <AppLayouts>
            <PageTitle title="Appointment Info" />
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md">

                <p className="text-center text-muted-foreground mb-6">
                    On this page you can learn how to make an appointment.
                </p>

                <ul className="space-y-4 mb-4">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                        <span>
                            Choose an available schedule from the{" "}
                            <Link
                                to="/schedule"
                                className="text-blue-600 font-semibold underline hover:text-blue-800 transition"
                            >
                                Schedule
                            </Link>{" "}
                            page.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                        <span>Click on <strong>"Make Appointment"</strong> to proceed.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                        <span>Fill in the required information on the appointment form.</span>
                    </li>
                </ul>

                <p className="text-sm text-gray-600 mt-4 text-center">
                    Once submitted, your appointment will appear on the{" "}
                    <span className="font-bold text-gray-800">"My Appointments"</span> page.
                </p>
            </div>
        </AppLayouts>
    )
}
