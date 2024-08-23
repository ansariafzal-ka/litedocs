"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

const NavBar = () => {
  const session = useSession();

  const logoutHandler = () => {
    signOut();
  };

  return (
    <nav className="w-full flex justify-between items-center">
      <Link href="/documents" className="text-lg font-bold">
        LiteDocs
      </Link>
      <div className="flex justify-center items-center gap-4">
        <Avatar>
          <AvatarImage src={session.data?.user?.image || ""} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <button
          onClick={logoutHandler}
          className="btn btn_outline flex justify-center items-center gap-2 "
        >
          <span className="hidden sm:block">logout</span>
          <LogOut width={18} height={18} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
