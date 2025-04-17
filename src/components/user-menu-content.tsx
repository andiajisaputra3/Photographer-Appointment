import { useAuth } from '@/context/auth-context'
import { DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from './ui/dropdown-menu';
import { LogOut } from 'lucide-react';
import UserInfo from './user-info';

export default function UserMenuContent() {

    const { user, logout } = useAuth();

    if (!user) {
        return null
    }

    return (
        <>
            <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <UserInfo user={user} showEmail={true} />
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
                <button type='submit' className='w-full' onClick={logout}>
                    <LogOut className="mr-2" />
                    Log out
                </button>
            </DropdownMenuItem>
        </>
    )
}
