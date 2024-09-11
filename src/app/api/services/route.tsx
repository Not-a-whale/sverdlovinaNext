import { NextRequest, NextResponse } from "next/server";
import serviceTextModel from "@/app/mongoose/schemas/service-text";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const serviceText = await serviceTextModel.find({
    serviceTextName: searchParams.get("slug"),
    serviceLocale: searchParams.get("locale"),
  });

  const { _id, serviceLocale, serviceTextName, ...serviceTextData } =
    serviceText[0]._doc || {};

  return serviceText.length
    ? NextResponse.json(serviceTextData)
    : NextResponse.json([]);
};
