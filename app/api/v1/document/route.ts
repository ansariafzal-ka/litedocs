import connectDb from "@/utils/database";
import { Document } from "@/models/document.models";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

export const GET = async (request: NextRequest) => {
  try {
    await connectDb();
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const documents = await Document.find({ user: session.user.id }).sort({
      createdAt: -1,
    });

    return new NextResponse(
      JSON.stringify({
        documents: documents,
      })
    );
  } catch (error) {
    console.error("Error fetching documents: ", error);

    return new NextResponse("Error fetching documents", { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  try {
    await connectDb();
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { documentTitle } = await request.json();

    if (!documentTitle)
      return new NextResponse("Some Fields are missing", { status: 400 });

    const newDocument = await Document.create({
      documentTitle: documentTitle,
      user: session.user.id,
    });

    return new NextResponse(
      JSON.stringify({
        message: "Document created successfully",
        newDocument: newDocument,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating document: ", error);
    return new NextResponse("Error creating document", { status: 500 });
  }
};
