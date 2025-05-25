import { Skeleton } from "@/components/ui/skeleton";

const MySkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
        >
          {/* Thumbnail */}
          <Skeleton className="h-40 w-full" />

          {/* Text Section */}
          <div className="p-4 space-y-3">
            <Skeleton className="h-6 w-3/4" /> {/* Course Title */}
            <div className="flex items-center gap-3">
              <Skeleton className="h-8 w-8 rounded-full" /> {/* Avatar */}
              <Skeleton className="h-4 w-1/3" /> {/* Instructor Name */}
            </div>
            <Skeleton className="h-4 w-1/4" /> {/* Any extra info */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MySkeleton;
