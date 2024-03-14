"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/mithai">Mithai</HoveredLink>
            <HoveredLink href="/mithai">Namkin</HoveredLink>
            <HoveredLink href="/mithai">Mithai</HoveredLink>
          </div>
        </MenuItem>

        <Link href={"/contactus"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
            Contact Us
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
