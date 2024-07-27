import { pgTable, serial } from "drizzle-orm/pg-core";

export const bids = pgTable("pb_bids", {
  id: serial("id").primaryKey(),
});
