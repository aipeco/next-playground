// table on db
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const productsTable = sqliteTable("products", {
    id: integer().primaryKey().notNull(),
    title: text(),
    description: text(),
});

export type Product = typeof productsTable.$inferSelect;