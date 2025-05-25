import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

import React from "react";
import Course from "./Course";
import MySkeleton from "@/components/MySkelton";
import { useLoadUserQuery } from "@/features/api/authApi";

function Profile() {
  const { data, isLoading } = useLoadUserQuery();
  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="w-8 h-8 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        <h1 className="text-lg font-medium text-gray-600">
          Profile Loading...
        </h1>
      </div>
    );

  console.log(data);
  return (
    <div className="max-w-4xl mx-auto my-24 px-4 md:px-0">
      <h1 className="font-bold text-2xl text-center md:text-left">PROFILE </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-5">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-4 ">
            <AvatarImage src={data.user.photoUrl} alt="user image" />
            <AvatarFallback>HC</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100  ">
              Name:
              <span className="font-normal  text-gray-700 dark:text-gray-300 ml-2">
                {data.user.name}
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100  ">
              Email:
              <span className="font-normal  text-gray-700 dark:text-gray-300 ml-2">
                {data.user.email}
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100  ">
              Role:
              <span className="font-normal  text-gray-700 dark:text-gray-300 ml-2">
                {data.user.role.charAt(0).toUpperCase() +
                  data.user.role.slice(1)}
              </span>
            </h1>
          </div>
          <DialogDemo />
        </div>
      </div>
      <div>
        <h1 className="font-medium text-lg">Courses you're enrolled in</h1>
        <div className="my-5">
          {isLoading ? (
            <MySkeleton />
          ) : data.user.enrolledCourses.length === 0 ? (
            <p className="text-center text-gray-500 text-sm">
              Looks like you haven’t enrolled in a course yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
              {data.user.enrolledCourses.map((course, index) => (
                <Course key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;

export function DialogDemo() {
  const isLoading = false;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="mt-2">
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Name</Label>
            <Input type="text" placeholder="Name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Profile Image</Label>
            <Input type="file" accept="image/*" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" disable={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait
              </>
            ) : (
              "Save changes"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
