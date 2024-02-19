import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <div className="flex p-4 shadow-xl justify-between">
      <div className="flex justify-center items-center gap-x-20">
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />

        <ul className="hidden md:flex md:justify-center md:items-center md:gap-x-4">
          {Menu.map((item) => (
            <Link href={item.path}>
              <li className="font-semibold cursor-pointer hover:text-blue-600 hover:scale-[1.03] transition-all ease-in-out" key={item.id}>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Header;
