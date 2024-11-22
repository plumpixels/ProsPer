"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { BookOpen, PenLine, Search } from "lucide-react";
import Link from "next/link";
import { SearchBar } from "./search-bar";

export function Navigation() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">ProsePer</span>
          </Link>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button asChild>
              <Link href="/write">
                <PenLine className="mr-2 h-4 w-4" />
                Write
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/profile">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=40&h=40&auto=format&fit=crop"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between py-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/explore" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Explore
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/write" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Write
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <SearchBar />
        </div>
      </div>
    </header>
  );
}