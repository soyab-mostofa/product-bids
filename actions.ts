"use server";
import { db } from "@/db/database";
import { userTable } from "./db/schema";
import { eq } from "drizzle-orm";
import { User } from "@clerk/nextjs/server";
export const getUser = async (loggedUser: User) => {
  const dbUser = db
    ?.select()
    .from(userTable)
    .where(eq(userTable.id, loggedUser.id));

  console.log(dbUser);
  return { success: true, error: null };
};
