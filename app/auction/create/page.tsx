import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { createItem } from "../actions";

const BidsCreatePage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Create a new bid</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <form className="flex flex-col gap-4 mb-4" action={createItem}>
          <Input required type="text" name="item" placeholder="item" />
          <Input
            required
            type="text"
            name="description"
            placeholder="description"
          />
          <Input
            required
            type="number"
            name="startingBid"
            step="any"
            placeholder="What is the starting bid?"
          />
          <Button type="submit">Submit bids</Button>
        </form>
      </div>
    </div>
  );
};

export default BidsCreatePage;
