"use server";
import { db } from "@/db/database";
import { userTable } from "./db/schema";
import { eq } from "drizzle-orm";

export async function createDBUser(userData: { id: string; email: string }) {
  try {
    const createdUser = await db.insert(userTable).values({
      id: userData.id,
      email: userData.email,
    });
    if (!createdUser) {
      throw new Error("Failed to create user");
    }

    console.log("User data inserted successfully");
  } catch (error) {
    console.error("Error inserting user data:", error);
  }
}
