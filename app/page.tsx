import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="w-full h-screen bg-[#020E1C] flex justify-center items-center">
      <div className="w-[325px] md:w-fit text-center flex flex-col gap-3 bg_secondary p-5 rounded-md">
        <div className="md:w-[400px] text-center">
          <h1 className="mb-2 text-xl font-medium">Welcome to LiteDocs</h1>
          <p className="text-muted-foreground">
            your goto platform for creating awesome text documents
          </p>
        </div>
        <Link href="/documents" type="button" className="btn btn_dark">
          <img src="google.svg" alt="google-logo" className="w-5 h-5 me-2" />
          Continue with Google
        </Link>
      </div>
    </main>
  );
};

export default page;
