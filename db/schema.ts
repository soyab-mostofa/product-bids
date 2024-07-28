import { relations } from "drizzle-orm";
import {
  boolean,
  json,
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
  email: varchar("email", { length: 255 }), // Email]
  firstName: varchar("first_name", { length: 255 }), // First Name
  lastName: varchar("last_name", { length: 255 }), // Last Name
  createdAt: timestamp("created_at").notNull().defaultNow(), // Created At
  imageUrl: varchar("image_url", { length: 255 }), // Image URL
});

export const itemsTable = pgTable("pb_items", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(), // Name
  description: varchar("description", { length: 255 }), // Description
  imageUrls: json("image_urls"), // Image URL
  startingBid: varchar("starting_bid", { length: 255 }), // Price
  quantity: varchar("quantity", { length: 255 }), // Quantity
  createdAt: timestamp("created_at").notNull().defaultNow(), // Created At
  updatedAt: timestamp("updated_at").notNull().defaultNow(), // Updated At
  userId: varchar("user_id", { length: 255 }), // User ID
});
export const itemsRelations = relations(itemsTable, ({ one }) => ({
  author: one(userTable, {
    fields: [itemsTable.userId],
    references: [userTable.id],
  }),
}));
export const userRelations = relations(userTable, ({ many }) => ({
  items: many(itemsTable),
}));
