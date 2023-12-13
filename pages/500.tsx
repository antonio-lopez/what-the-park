//http://localhost:3000/parks/dfgdf

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Custom500 = () => {
  return (
    <div className="h-[100dvh] bg-[url('https://res.cloudinary.com/dloisor1x/image/upload/v1702348506/what-the-park/placeholder_y8mihe.webp')] bg-cover bg-center bg-no-repeat">
      <div className="layout h-full">
        <div className="flex h-full flex-col items-center justify-center space-y-6 text-backgroundPrimary">
          <h1>Uh, oh!</h1>
          <div className="text-center">
            <p>An unexpected server error occurred.</p>
            <p>Try going back to the previous page or back to home.</p>
          </div>
          <Button asChild>
            <Link href={"/"}>Go to home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Custom500;
