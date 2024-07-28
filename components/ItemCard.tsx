import React from "react";

interface ItemCardProps {
  id: number;
  name: string;
  startingBid: string | null;
}

const ItemCard = (item: ItemCardProps) => {
  return (
    <div
      key={item.id}
      className="border border-gray-200 rounded-lg p-4 space-y-2"
    >
      <p className="text-xl font-semibold">{item.name}</p>
      <p>
        Starting Bid:{" "}
        <span className="font-bold text-green-500 ">
          {item.startingBid || "0"}$
        </span>
      </p>
    </div>
  );
};

export default ItemCard;
