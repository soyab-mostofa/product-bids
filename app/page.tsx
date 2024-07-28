import { bids as bidsSchema, itemsTable } from "@/db/schema";
import Image from "next/image";
import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/db/database";
import { createItem } from "@/actions";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return <div>Unauthenticated</div>;
  }

  const items = await db.select().from(itemsTable);
  return (
    <div className="container mx-auto py-12">
      <form
        className="flex gap-4 mb-4 text-neutral-950"
        action={async (FormData) => {
          "use server";
          const itemName = FormData.get("item") as string;
          const description = FormData.get("description") as string;
          await createItem({ name: itemName, description: description });
        }}
      >
        <Input type="text" name="item" placeholder="item" />
        <Input type="text" name="description" placeholder="description" />
        <Button type="submit">Submit bids</Button>
      </form>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
