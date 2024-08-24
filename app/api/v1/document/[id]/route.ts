import connectDb from "@/utils/database";
import { Document } from "@/models/document.models";
import { NextRequest, NextResponse } from "next/server";

interface IdProps {
  id: string;
}

export const DELETE = async (
  request: NextRequest,
  { params }: { params: IdProps }
) => {
  try {
    await connectDb();
    const document = await Document.findById(params.id);
    if (!document)
      return new NextResponse("No document found with the given id", {
        status: 400,
      });

    const deletedDocument = await Document.findByIdAndDelete(params.id);

    return new NextResponse(
      JSON.stringify({
        deletedDocument: deletedDocument,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting this document: ", error);
    return new NextResponse("Error deleting this document", { status: 500 });
  }
};
