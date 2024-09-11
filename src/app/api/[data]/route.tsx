import { NextRequest, NextResponse } from "next/server";
import connectToDb from "@/app/mongoose/connect-to-db";

export const revalidate = 0;

export const GET = async (req: NextRequest, { params }: any) => {
  const { client, bucket } = await connectToDb();

  const { data } = params;

  const files = await bucket
    .find({
      filename: data,
    })
    .toArray();

  // the resulat is an array and i take the first
  //element that i found
  const file = files[0];

  //reading file using openDownloadStreamByName
  const stream = bucket.openDownloadStreamByName(file.filename);

  return new NextResponse(stream, {
    headers: { "Content-Type": file.contentType },
  });
};
