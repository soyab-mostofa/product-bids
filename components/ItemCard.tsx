import React from "react";

interface ItemCardProps {
  id: number;
  name: string;
  startingBid: string | null;
  imageUrls: string;
}

const ItemCard = (item: ItemCardProps) => {
  const parsedImageUrls: string[] = JSON.parse(item.imageUrls);
  console.log(parsedImageUrls);
  return (
    <div
      key={item.id}
      className="border border-gray-200 rounded-lg p-4 space-y-2"
    >
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
