import React from "react";
import { School, Menu } from "lucide-react";
import { Button } from "./ui/Button";
import DarkMode from "../DarkMode.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar.jsx";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet.jsx";

import { Separator } from "@radix-ui/react-dropdown-menu";

const Navbar = () => {
  const user = true;

  return (
    <header className="fixed top-0 left-0 right-0 z-10 h-16 border-b bg-white dark:bg-[#0A0A0A] border-b-gray-200 dark:border-b-gray-800 duration-300">
      {/* Desktop View */}
      <div className="hidden md:flex max-w-7xl mx-auto justify-between items-center h-full px-4">
        <div className="flex items-center gap-2">
          <School size={30} />
          <h1 className="text-2xl font-extrabold">StudyHub</h1>
        </div>
        <div className="flex items-center gap-6">
          <DarkMode />
          {user ? <UserMenu /> : <AuthButtons />}
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <h1 className="text-2xl font-extrabold">StudyHub</h1>
        <MobileNavBar />
      </div>
    </header>
  );
};

export default Navbar;

// User Dropdown for Desktop
const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="user image" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>My Learning</DropdownMenuItem>
          <DropdownMenuItem>Edit Profile</DropdownMenuItem>
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="font-semibold text-blue-600 hover:text-blue-700">
          Dashboard
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// Mobile Sheet Nav
const MobileNavBar = () => {
  const role = "instructor";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          aria-label="Open mobile menu"
          className="rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          variant="outline"
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="flex flex-col p-6 gap-6">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle className="text-xl font-bold">StudyHub</SheetTitle>
          <DarkMode />
        </SheetHeader>

        <Separator className="bg-gray-300 dark:bg-gray-700 h-px" />

        <nav className="flex flex-col gap-4 text-base font-medium text-gray-800 dark:text-gray-100">
          <button className="text-left hover:text-primary transition">
            My Learning
          </button>
          <button className="text-left hover:text-primary transition">
            Edit Profile
          </button>
          <button className="text-left hover:text-primary transition">
            Log out
          </button>
          {role === "instructor" && (
            <SheetClose asChild>
              <Button className="w-full">Dashboard</Button>
            </SheetClose>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

// Login / Signup Buttons (Desktop Only)
const AuthButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline">Login</Button>
      <Button>Signup</Button>
    </div>
  );
};
