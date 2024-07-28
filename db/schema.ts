import {
  boolean,
  jsonb,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const bids = pgTable("pb_bids", {
  id: serial("id").primaryKey(),
});

export const userTable = pgTable("pb_users", {
  id: varchar("id").primaryKey().notNull(), // ID
  email: varchar("email", { length: 255 }).notNull(), // Email
});
