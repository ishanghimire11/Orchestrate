import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import NavItems from "../NavItems";

const MobileNav = () => {
  return (
    <div className="block lg:hidden self-end">
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon />
        </SheetTrigger>
        <SheetContent className="py-8 bg-white">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>

            <Separator />

            <NavItems />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
