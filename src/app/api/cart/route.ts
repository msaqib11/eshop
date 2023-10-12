import { cartTable, db } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { and, eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
  // Fetch all products from the cart table
  const req = request.nextUrl;
  const uid = req.searchParams.get("user_id") as string;
  if (!uid) {
    return NextResponse.json({ message: "user id doesn't provided" });
  } else {
    try {
      const res = await db
        .select()
        .from(cartTable)
        .where(eq(cartTable.user_id, uid));

      // if (res.length === 0) {
      //   return NextResponse.json({ message: "cart is empty" };
      // }

      return NextResponse.json(res);
    } catch (error) {
      console.log(error);
    }
  }
};

export const DELETE = async (request: NextRequest) => {
  // Get the user id and product id from the request
  const uid = request.nextUrl.searchParams.get("user_id") as string;
  const pid = request.nextUrl.searchParams.get("product_id") as string;
  if (!uid || !pid) {
    return NextResponse.json({ message: "user ID OR product ID doesn't provided" });
  } else {
    try {
      // Delete the product from the cart table for the given user id and product id
      await db
        .delete(cartTable)
        .where(and(eq(cartTable.product_id, pid), eq(cartTable.user_id, uid)))
        .returning({ pid: cartTable.product_id });
      // Return a JSON response with a success message
      return NextResponse.json({
        message: "Product successfully deleted from cart",
      });
    } catch (error) {
      console.log(error);
      
    }
  }
};

export const POST = async (request: NextRequest) => {
  // Get the request body
  const req = await request.json();

  // Declare the uid variable as a let variable
  let uid;

  // Get the user ID from the cookies
  uid = cookies().get("user_id")?.value;

  // If the user does not have a cookie, set one
  if (!uid) {
    uid = uuid();
    cookies().set("user_id", uid);
  }

  // Insert the new cart item into the cart table
  const res = await db
    .insert(cartTable)
    .values({
      product_id: req.product_id,
      quantity: req.quantity,
      user_id: uid as string,
    })
    .returning();

  return NextResponse.json({ res });
};
