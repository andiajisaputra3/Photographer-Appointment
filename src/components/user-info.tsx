import { User } from "@/types"

interface UserInfoProps {
    user: User
    showEmail?: boolean
}

export default function UserInfo({ user, showEmail = false }: UserInfoProps) {
    return (
        <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{user?.name}</span>
            {showEmail && <span className="text-muted-foreground truncate text-xs">{user?.email}</span>}
        </div>
    )
}
