import GoogleLoginButton from "@/components/utils/GoogleLoginButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();
  console.log(session, "session");

  if (session) {
    redirect("/documents");
  }

  return (
    <main className="w-full h-screen bg-[#020E1C] flex justify-center items-center">
      <div className="w-[325px] sm:w-fit text-center flex flex-col gap-3 bg_secondary p-5 rounded-md">
        <div className="sm:w-[400px] text-center">
          <h1 className="mb-2 text-xl font-medium">Welcome to LiteDocs</h1>
          <p className="text-muted-foreground">
            your goto platform for creating awesome text documents
          </p>
        </div>
        <GoogleLoginButton />
      </div>
    </main>
  );
};

export default page;
