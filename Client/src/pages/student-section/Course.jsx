import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

function Course({ course }) {
  return (
    <Link
      to={`/course-detail/${course._id}`}
      state={{ course }}
      className="block"
    >
      <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
        <div className="relative">
          <img
            src={course.courseThumbnail}
            alt="Course"
            className="w-full h-36 object-cover rounded-t-lg "
          />
        </div>
        <CardContent className="px-5  space-y-3">
          <h1 className="hover:underline font-bold text-lg line-clamp-2">
            {course.courseTitle}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={
                    course.creator?.photoUrl || "https://github.com/shadcn.png"
                  }
                  alt="user image"
                />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
              <h1 className="font-medium text-sm">{course.creator?.name}</h1>
            </div>
            <Badge className="bg-green-400 text-white px-2 py-1 text-xs rounded-full ml-3">
              {course.courseLevel}
            </Badge>
          </div>
          <div>
            <span className="text-lg font-bold">₹{course.coursePrice}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default Course;
