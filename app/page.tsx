import { bids as bidsSchema, itemsTable } from "@/db/schema";
import Image from "next/image";
import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/db/database";
import { currentUser } from "@clerk/nextjs/server";
import ItemCard from "@/components/ItemCard";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return <div>Unauthenticated</div>;
  }

  const items = await db.select().from(itemsTable);
  return (
    <div className="container mx-auto ">
      <div>
        <h2 className="mb-4 text-xl font-semibold">Trending Bids</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              startingBid={item.startingBid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
