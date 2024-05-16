"use client";
import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { Button } from "../button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SearchInput from "@/components/SearchInput";

const Navbar = () => {
  const router = useRouter();
  const { userId } = useAuth();

  return (
    <div className="sticky top-0 border border-b-primary/10 bg-secondary shadow z-20">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              width={35}
              height={35}
              src={"/icons/hotel-logo.svg"}
              alt={"Logo hotel digital"}
            />
            <h2 className="text-3xl font-bold text-primary">D. Hotel</h2>
          </Link>
        </div>
        <SearchInput />
        <div className="gap-3 flex items-center">
          <UserButton afterSignOutUrl="/" />
          {!userId && (
            <>
              <Button onClick={() => router.push("/sign-in")} size="sm" variant="outline">
                Sign In
              </Button>

              <Button onClick={() => router.push("/sign-up")} size="sm">Sign up</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
