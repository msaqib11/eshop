import { cartTable, db } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import { eq, sql } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
  // Fetch all products from the cart table
  const req = request.nextUrl;
  const uid = req.searchParams.get("user_id") as string;
  if (!uid) {
    return NextResponse.json({ message: "user id doesn't provided" });
  } else {
    try {
      const cartCount = await db
        .select({
          cartCount: sql<number>`sum(${cartTable.quantity})`,
        })
        .from(cartTable)
        .where(eq(cartTable.user_id, uid));
      if(cartCount[0].cartCount>0){
        return NextResponse.json(cartCount);
      }else{
        return NextResponse.json({ cartCount: 0 });
      }
    } catch (error) {
      console.log(error);
    }
  }
};
