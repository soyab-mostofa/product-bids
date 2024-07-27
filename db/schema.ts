import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const bids = pgTable("pb_bids", {
  id: serial("id").primaryKey(),
});

export const userTable = pgTable("user", {
  id: text("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  email: text("email").notNull(),
});
