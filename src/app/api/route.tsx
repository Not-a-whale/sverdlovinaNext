// api/route.jsx
import { NextRequest, NextResponse } from "next/server";
import { Readable } from "stream";
import connectToDb from "../../../utils/connectToDb";
import Reviews from "../../../utils/reviews";

export const revalidate = 0;

export const POST = async (req: NextRequest) => {
  const { client, bucket } = await connectToDb();

  let name;
  let image;
  let review;
  let city;
  const formData = await req.formData();
  for (const entries of Array.from(formData.entries())) {
    const [key, value]: any = entries;
    if (key == "name") {
      name = value;
    }
    if (key == "review") {
      review = value;
    }
    if (key == "city") {
      city = value;
    }

    if (typeof value == "object") {
      image = Date.now() + value.name;
      const buffer = Buffer.from(await value.arrayBuffer());
      const stream = Readable.from(buffer);
      const uploadStream = bucket.openUploadStream(image, {});
      await stream.pipe(uploadStream);
    }
  }
  const newItem = new Reviews({
    name,
    review,
    city,
    imageUrl: image,
  });
  await newItem.save();

  return NextResponse.json({ msg: "ok" });
};

export const GET = async () => {
  const { client, bucket } = await connectToDb();
  const reviews = await Reviews.find({});
  const reviewsWithFixedImageUrl = reviews.map((review) => {
    return {
      ...review._doc,
      imageUrl: `/${review.imageUrl}`,
    };
  });
  return NextResponse.json([...reviewsWithFixedImageUrl]);
};
