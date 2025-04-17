import { useAuth } from "@/context/auth-context"
import useInitials from "@/hook/use-initials";
import { mainItems } from "@/lib/nav-items";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Icon from "./ui/icon";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import UserMenuContent from "./user-menu-content";

export default function AppHeader() {
    const { user } = useAuth();
    const getInitials = useInitials();
    const location = useLocation();
    const [sheetOpen, setSheetOpen] = useState(false);
    const mainNavItems = mainItems;

    useEffect(() => {
        const isMobile = () => {
            if (window.innerWidth >= 1024 && sheetOpen) {
                setSheetOpen(false)
            }
        }

        window.addEventListener('resize', isMobile);

        return () => window.removeEventListener('resize', isMobile);

    }, [sheetOpen]);

    return (
        <div className="border-sidebar-border/80 border-b bg-zinc-900">
            <div className="mx-auto flex h-16 items-center px-4 md:max-w-7xl">
                {/* Mobile Menu */}
                <div className="lg:hidden">
                    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="mr-2 h-[34px] w-[34px]">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-sidebar flex h-full w-64 flex-col items-stretch justify-between">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <SheetHeader className="flex justify-start text-left">
                                <span className="h-6 w-6 fill-current font-bold text-black dark:text-white">
                                    Photograper
                                </span>
                            </SheetHeader>
                            <div className="flex h-full flex-1 flex-col space-y-4 p-4">
                                <div className="flex h-full flex-col justify-between text-sm">
                                    <div className="flex flex-col space-y-4">
                                        {mainNavItems.map((item) => (
                                            <Link key={item.title} to={item.href} className="flex items-center space-x-2 font-medium">
                                                {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                                <span>{item.title}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <Link to="/schedule" className="flex items-center space-x-2">
                    <span className=" w-24 fill-current font-bold text-xl text-white dark:text-white">
                        Photographer
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden h-full items-center space-x-6 lg:flex flex-1 justify-center">
                    <NavigationMenu className="flex h-full items-center">
                        <NavigationMenuList className="flex h-full space-x-4">
                            {mainNavItems.map((item, index) => {
                                const isActive = location.pathname === item.href;
                                return (
                                    <NavigationMenuItem key={index} className="relative flex h-full items-center">
                                        <Link
                                            to={item.href}
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                isActive
                                                    ? "bg-zinc-800 text-white hover:bg-zinc-800 hover:text-white dark:bg-zinc-800 dark:text-white font-semibold"
                                                    : "text-white bg-transparent hover:text-white hover:bg-zinc-800 transition-colors duration-200",
                                                "h-9 flex items-center gap-2 rounded-md"
                                            )}
                                        >
                                            {item.icon && <Icon iconNode={item.icon} className="h-4 w-4" />}
                                            {item.title}
                                        </Link>
                                    </NavigationMenuItem>
                                );
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Avatar */}
                <div className="ml-auto flex items-center space-x-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="size-10 rounded-full p-1">
                                <Avatar className="size-8 overflow-hidden rounded-full">
                                    <AvatarImage src={user?.avatar} alt={user?.name} />
                                    <AvatarFallback className="rounded-lg bg-white text-black dark:bg-neutral-700 dark:text-white">
                                        {user ? getInitials(user.name) : "AA"}
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end">
                            <UserMenuContent />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}
