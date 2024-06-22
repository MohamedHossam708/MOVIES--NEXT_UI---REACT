import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Movies",
    "WatchList",
    
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
       
          <p className="font-bold text-inherit text-2xl">M <span className="text-red-700">O</span> V I E S</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink color="foreground" to="/">
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem >
          <NavLink to="/movies" color="foreground">
            Movies
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to="/watchList">
          WatchList
          </NavLink>
        
            
        </NavbarItem>
      </NavbarContent>


      <NavbarContent justify="end">
       
      </NavbarContent>



      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              className="w-full"
              to={item=="Home"?"":item}
              size="lg"
            >
              {item}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>


      
    </Navbar>
  );
}
