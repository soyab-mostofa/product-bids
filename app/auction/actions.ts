"use server";
import { db } from "@/db/database";
import { itemsTable } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createItem = async (formData: FormData) => {
  const itemName = formData.get("item") as string;
  const itemDescription = formData.get("description") as string;
  const startingBid = formData.get("startingBid") as string;
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }
  try {
    await db.insert(itemsTable).values({
      name: itemName,
      description: itemDescription,
      userId: user.id,
      startingBid: startingBid,
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error creating item:", error);
  } finally {
    redirect("/");
  }
};
