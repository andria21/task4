import User from "@/models/User";
import connect from "@/utils/db";
import { signOut } from "next-auth/react";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    await connect();
    const body = await req.json();
    const userIds = body.ids;
    const name = body.buttonName;

    if (name === "block") {
      await User.updateMany(
        { _id: { $in: userIds } },
        { $set: { isBlocked: true } }
      );
    } else {
      await User.updateMany(
        { _id: { $in: userIds } },
        { $set: { isBlocked: false } }
      );
    }

    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    await connect();
    const body = await req.json();
    const userIds = body.ids;

    await User.deleteMany(
      { _id: { $in: userIds } },
      { $pull: { _id: userIds } }
    );

    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
