"use client";
import React, { useState } from "react";
import Editor from "@/components/editor/Editor";
import NavBar from "@/components/NavBar";
import { Save } from "lucide-react";

const Page = () => {
  const [editorContent, setEditorContent] = useState<string>("");

  const handleSave = async () => {
    try {
    } catch (error) {}
  };

  const handleContentChange = (content: string) => {
    setEditorContent(content);
  };

  return (
    <main className="p-5 lg:px-28 min-w-full min-h-screen bg-[#020E1C] flex flex-col justify-start items-center">
      <NavBar />
      <div className="w-full">
        <div className="w-full my-6 flex justify-between items-center">
          <h1 className="text-xl font-medium">Document name</h1>
          <button
            onClick={handleSave}
            className="btn btn_primary flex justify-center items-center gap-2"
          >
            <Save width={20} height={20} />
            <span className="hidden md:block">save changes</span>
          </button>
        </div>
        <Editor onChange={handleContentChange} />
      </div>
    </main>
  );
};

export default Page;
