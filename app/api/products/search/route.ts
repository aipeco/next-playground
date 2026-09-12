import { db } from "@/db";
import { productsTable } from "@/schema";
import { like, or } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const products = await db
    .select()
    .from(productsTable)
    .where(
      or(
        like(productsTable.title, `%${query}%`),
        like(productsTable.description, `%${query}%`),
      ),
    );

  return NextResponse.json({ products: products });
}
