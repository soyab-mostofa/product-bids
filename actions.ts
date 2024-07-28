"use server";
import { db } from "@/db/database";
import { itemsTable, userTable } from "./db/schema";
import { eq } from "drizzle-orm";
import { User, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createDBUser(userData: {
  id: string;
  email: string;
  imageUrl?: string;
  firstName?: string;
  lastName?: string;
}) {
  try {
    const createdUser = await db.insert(userTable).values({
      id: userData.id,
      email: userData.email,
      imageUrl: userData.imageUrl,
      lastName: userData.lastName,
      firstName: userData.firstName,
    });
    if (!createdUser) {
      throw new Error("Failed to create user");
    }

    console.log("User data inserted successfully");
  } catch (error) {
    console.error("Error inserting user data:", error);
  }
}
