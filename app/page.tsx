import { bids as bidsSchema } from "@/db/schema";
import Image from "next/image";
import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/db/database";
import { useUser } from "@clerk/nextjs";

export default async function Home() {
  const bids = await db.select().from(bidsSchema);
  return (
    <div className="container mx-auto py-12">
      <form
        action={async (FormData) => {
          "use server";
          const bid = FormData.get("bid");
          await db.insert(bidsSchema).values({});
          revalidatePath("/");
        }}
      >
        <Input type="text" name="bid" placeholder="bid" />
        <Button type="submit">Submit bids</Button>
      </form>
      <div>
        {bids.map((bid) => (
          <div key={bid.id}>
            <p>{bid.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
