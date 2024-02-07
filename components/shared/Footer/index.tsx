import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/orchestrate.svg";
import { Button } from "@/components/ui/button";
import { footerInformation, footerSocials } from "@/constants";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 bg-neutral-900 text-white px-4 md:px-12 lg:px-16 mt-auto">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16 lg:mb-20">
          <h2 className="max-w-[800px] text-3xl md:text-4xl text-left lg:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 uppercase bg-clip-text text-transparent">
            Managing events has never been this easier.
          </h2>
        </div>

        <div className="pb-16 flex flex-col gap-y-12 lg:justify-between lg:gap-x-20 lg:gap-y-0 lg:flex-row">
          {footerInformation.map((heading) => {
            return (
              <div key={heading.id}>
                <h3 className="uppercase text-xl lg:text-2xl opacity-50 pb-4">
                  {heading.subheading}
                </h3>
                {heading.links.map((info) => {
                  return (
                    <Link
                      href={info.link}
                      key={info.id}
                      target="_blank"
                      className="block pb-2 w-fit hover:underline"
                    >
                      {info.title}
                    </Link>
                  );
                })}
              </div>
            );
          })}

          <div>
            <h3 className="uppercase text-2xl opacity-50 pb-4">Newsletter</h3>
            <form className="w-fit" action={"/"}>
              <Input
                type="email"
                required
                name="newsletter"
                id="footer-newsletter"
                className="w-fit lg:w-full rounded-lg bg-gray-300 px-6 py-2 mb-4 block text-black focus-visible:outline-0"
                placeholder="Enter your email"
              />
              <Button
                type="submit"
                className="w-full uppercase text-lg bg-gray-300 block text-black hover:bg-gray-400 rounded-lg focus:outline-none"
              >
                submit
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-16 border-t border-t-neutral-700 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between md:gap-x-16 md:text-left">
          <div className="lg:flex lg:flex-row lg:items-end lg:gap-x-6 lg:mb-0 mb-6 flex-wrap">
            <div>
              <Link
                href="/"
                className="flex items-center gap-x-2 justify-center md:justify-start"
              >
                <Image
                  src={logo}
                  height={"100"}
                  width={"100"}
                  alt={"Orcherstrate"}
                  className="w-10 md:w-14 footer-logo"
                />
                <h3 className="text-3xl md:text-4xl font-semibold tracking-widest mb-2 w-fit text-center lg:mb-0 md:w-fit ">
                  Orchestrate
                </h3>
              </Link>
            </div>
            <div>
              <span className="opacity-70 text-center md:text-left block">
                {" "}
                &copy; Orchestrate 2023. Made by{" "}
                <Link href="#" className="hover:underline">
                  Ishan Ghimire.
                </Link>
              </span>
            </div>
          </div>

          <div>
            <ul className="flex flex-wrap items-end gap-x-4">
              {footerSocials.map((social) => {
                return (
                  <li key={social.id} className="h-[38px]">
                    <Link
                      target="_blank"
                      href={social.link}
                      className="h-fit inline-block border border-neutral-700 rounded-full p-2 text-4xl hover:border-neutral-400"
                    >
                      {social.icon}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
