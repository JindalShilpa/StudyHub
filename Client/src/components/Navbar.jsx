import React, { useEffect } from "react";
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
import profileImage from "@/assets/profile.png";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet.jsx";

import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);

  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();

  const navigate = useNavigate();

  const logoutHandler = async () => {
    await logoutUser();
    navigate("/login");
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message || "User logout successfully.");
    }
  }, [isSuccess]);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 h-16 border-b bg-white dark:bg-[#0A0A0A] border-b-gray-200 dark:border-b-gray-800 duration-300">
      {/* Desktop View */}
      <div className="hidden md:flex max-w-7xl mx-auto justify-between items-center h-full px-4">
        <Link to="/">
          <div className="flex items-center gap-2">
            <School size={30} />
            <h1 className="text-2xl font-extrabold">StudyHub</h1>
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <DarkMode />
          {user ? (
            <UserMenu user={user} onLogout={logoutHandler} />
          ) : (
            <AuthButtons />
          )}
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <Link to="/">
          <h1 className="text-2xl font-extrabold">StudyHub</h1>
        </Link>
        <MobileNavBar />
      </div>
    </header>
  );
};

export default Navbar;

// User Dropdown for Desktop
const UserMenu = ({ user, onLogout }) => {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src={user?.profileUrl || profileImage}
            alt="user image"
          />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link to="my-learning">My Learning </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="profile">Edit Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onLogout}>Log out</DropdownMenuItem>
        </DropdownMenuGroup>
        {user.role === "instructor" && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigate("/admin/dashboard")}
              className="font-semibold text-green-600 hover:text-green-700"
            >
              Dashboard
            </DropdownMenuItem>
          </>
        )}
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
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" onClick={() => navigate("/login")}>
        Login
      </Button>
      <Button onClick={() => navigate("/login")}>Signup</Button>
    </div>
  );
};
