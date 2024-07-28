import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-neutral-900">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 md:py-8">
          <div>Product Bids</div>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
