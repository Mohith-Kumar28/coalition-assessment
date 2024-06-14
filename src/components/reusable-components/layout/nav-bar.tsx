"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Calendar,
  CircleUser,
  CreditCard,
  Ellipsis,
  EllipsisVertical,
  Home,
  Menu,
  MessageSquare,
  Package2,
  Search,
  Settings,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
  icon: React.ReactElement;
  isSelected?: boolean;
};

const navItems: NavItem[] = [
  {
    href: "#",
    label: "Overview",
    icon: <Home className="size-5" />,
    isSelected: false,
  },
  {
    href: "#",
    label: "Patients",
    icon: <Users className="size-5" />,
    isSelected: true,
  },
  {
    href: "#",
    label: "Schedule",
    icon: <Calendar className="size-5" />,
    isSelected: false,
  },
  {
    href: "#",
    label: "Message",
    icon: <MessageSquare className="size-5" />,
    isSelected: false,
  },
  {
    href: "#",
    label: "Transactions",
    icon: <CreditCard className="size-5" />,
    isSelected: false,
  },
];

type Props = {};

export default function NavBar({}: Props) {
  return (
    <header className="sticky z-50 top-0 flex h-16 items-center justify-between gap-4 border-b bg-card px-4 mx-4 mt-4 md:mx-8 md:mt-8 rounded-full md:px-6">
      <Link
        href="#"
        className="hidden lg:flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Image
          alt="main logo"
          width={150}
          height={100}
          src={"/assets/mainLogo.svg"}
        />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="hidden flex-col gap-6 text-lg font-medium lg:flex lg:flex-row lg:items-center lg:gap-8 lg:text-sm ">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`text-muted-foreground transition-colors hover:text-foreground flex gap-2 align-middle justify-center ${
              item.isSelected
                ? "bg-primary rounded-full px-3 py-2 text-white"
                : "text-gray-700"
            } `}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image
                alt="main logo"
                width={150}
                height={100}
                src={"/assets/mainLogo.svg"}
              />
              <span className="sr-only">Tech care</span>
            </Link>
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground flex gap-2 align-middle "
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex justify-end items-center gap-4  md:gap-2 lg:gap-4">
        {/* <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form> */}
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
        <div className="flex items-center gap-4">
          <Avatar className="hidden size-9 sm:flex">
            <AvatarImage src="/assets/people/01.png" alt="Avatar" />
            <AvatarFallback>JT</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Dr. Jose Simmons</p>
            <p className="text-sm text-muted-foreground">General Practioner</p>
          </div>
          <div className="ml-auto flex gap-2 font-medium pl-5  border-l-2">
            <Settings />
            <EllipsisVertical />
          </div>
        </div>
      </div>
    </header>
  );
}
