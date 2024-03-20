import Create from "@/models/Create";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";

// export const POST = async (request: Request) => {
//   await connect();
//   const newCreate = await Create.create(request.json());

//   try {
//     // await newCreate.save();
//     return new NextResponse("student created successfully", { status: 200 });
//   } catch (err: any) {
//     return new NextResponse(err, {
//       status: 500,
//     });
//   }
// };

export const POST = async (request: Request, res: Response) => {
  try {
    await connect();
    const requestData = await request.json();
    const newCreate = await Create.create(requestData);
    return new NextResponse("Student created successfully", { status: 201 });
  } catch (error) {
    console.log(error);
  }
};
export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connect();
    const data = await Create.find();

    return new NextResponse(`${data}`, { status: 200 });
    // res.status(200).json(`${data}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
