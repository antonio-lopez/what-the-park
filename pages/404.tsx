import { Button } from "@/components/ui/button";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="h-[100dvh] bg-[url('https://res.cloudinary.com/dloisor1x/image/upload/v1702348506/what-the-park/placeholder_y8mihe.webp')] bg-cover bg-center bg-no-repeat">
      <div className="layout h-full">
        <div className="flex h-full flex-col items-center justify-center space-y-6 text-backgroundPrimary">
          <h1>Page Not Found</h1>
          <div className="text-center">
            <p>
              Uh oh, we can&apos;t seem to find the page you&apos;re looking
              for.
            </p>
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

export default Custom404;
