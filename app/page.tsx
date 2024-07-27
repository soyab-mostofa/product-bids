import { bids as bidsSchema } from "@/db/schema";
import Image from "next/image";
import { database } from "@/db/database";
import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default async function Home() {
  const bids = await database.select().from(bidsSchema);
  return (
    <div className="container mx-auto py-12">
      <form
        action={async (FormData) => {
          "use server";
          const bid = FormData.get("bid");
          await database.insert(bidsSchema).values({});
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
