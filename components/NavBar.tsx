import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center">
      <Link href="/documents" className="text-lg font-bold">
        LiteDocs
      </Link>
      <div className="flex justify-center items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Link href="/" className="btn btn_outline">
          logout
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
