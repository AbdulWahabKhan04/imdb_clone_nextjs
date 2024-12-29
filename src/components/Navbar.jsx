import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex p-4 justify-center gap-4 items-center lg:text-lg dark:bg-amber-600 bg-amber-100">
      <NavbarItem title={"Top Trending"} param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  );
}
