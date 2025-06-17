import Image from "next/image";
import React from "react";
import MainLogo from "@/assets/svgs/main-logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-black bg-footer bg-no-repeat bg-cover bg-right-bottom blade-top-padding blade-bottom-padding border-t border-opacity-10 border-gray">
      <div className="w-container max-w-screen-lg">
        <div>
          <div>
            <Link href="/">
              <Image
                src={MainLogo}
                className="h-10 md:h-12 xlg:h-12"
                alt="Supreme logo"
                title="logo"
              />
            </Link>
          </div>

          {/* Desktop footer */}
          <div className="md:flex hidden md:flex-row flex-col items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-4 2xl:mt-10 mt-8">
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="mb-2 sg-translate font-semibold uppercase text-opacity-90">
                Applications
              </li>
              <li>
                <Link
                  color="dark"
                  className="block whitespace-nowrap"
                  href="/applications/apparel"
                >
                  {" "}
                  Apparel{" "}
                </Link>
              </li>
              <li>
                <Link
                  color="dark"
                  className="block whitespace-nowrap"
                  href="/applications/automotive"
                >
                  {" "}
                  Automotive{" "}
                </Link>
              </li>
              <li>
                <Link
                  color="dark"
                  className="block whitespace-nowrap"
                  href="/applications/filtration"
                >
                  {" "}
                  Filtration{" "}
                </Link>
              </li>
              <li>
                <Link
                  color="dark"
                  className="block whitespace-nowrap"
                  href="/applications/customised-nonwoven"
                >
                  {" "}
                  Customised Nonwoven{" "}
                </Link>
              </li>
            </ul>

            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="mb-2 sg-translate uppercase font-bold">Company</li>
              <li>
                <Link color="dark" href="/who-we-are">
                  {" "}
                  Who We Are{" "}
                </Link>
              </li>
              <li>
                <Link color="dark" href="/global-competency">
                  {" "}
                  Global Compentency{" "}
                </Link>
              </li>
              <li>
                <Link color="dark" href="/innovation">
                  {" "}
                  Innovation{" "}
                </Link>
              </li>
              <li>
                <Link color="dark" href="/esg-impact">
                  {" "}
                  ESG Impact{" "}
                </Link>
              </li>
            </ul>

            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="mb-2 sg-translate font-semibold uppercase text-opacity-90">
                More
              </li>
              <li>
                <Link color="dark" href="/contact-us">
                  {" "}
                  Contact Us{" "}
                </Link>
              </li>
              <li>
                <Link
                  color="dark"
                  className="block whitespace-nowrap"
                  href="/careers"
                >
                  {" "}
                  Careers{" "}
                </Link>
              </li>
            </ul>

            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="mb-2 sg-translate font-semibold uppercase text-opacity-90">
                Follow Us
              </li>

              <li>
                <Link
                  className="block text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap"
                  href="https://www.linkedin.com/company/supreme-group-company/"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile footer */}
          <div className="grid grid-cols-2 md:hidden items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-6 2xl:mt-10 mt-8">
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="font-semibold uppercase text-opacity-90">
                Applications
              </li>
              <li>
                <Link
                  color="dark"
                  className="block whitespace-nowrap"
                  href="/applications/apparel"
                >
                  {" "}
                  Apparel{" "}
                </Link>
              </li>
              <li>
                <Link
                  color="dark"
                  className="block whitespace-nowrap"
                  href="/applications/automotive"
                >
                  {" "}
                  Automotive
                </Link>
              </li>
              <li>
                <Link
                  color="dark"
                  className="block whitespace-nowrap"
                  href="/applications/filtration"
                >
                  {" "}
                  Filtration{" "}
                </Link>
              </li>
              <li>
                <Link
                  color="dark"
                  className="block whitespace-nowrap"
                  href="/applications/customised-nonwoven"
                >
                  {" "}
                  Customised Nonwoven{" "}
                </Link>
              </li>
            </ul>

            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="uppercase font-bold">Company</li>
              <li>
                <Link color="dark" href="/who-we-are">
                  {" "}
                  Who we are{" "}
                </Link>
              </li>
              <li>
                <Link color="dark" href="/global-competency">
                  {" "}
                  Global Compentency{" "}
                </Link>
              </li>
              <li>
                <Link color="dark" href="/innovation">
                  {" "}
                  Innovation{" "}
                </Link>
              </li>
              <li>
                <Link color="dark" href="/esg-impact">
                  {" "}
                  ESG Impact{" "}
                </Link>
              </li>
            </ul>

            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="font-semibold uppercase text-opacity-90">More</li>
              <li>
                <Link color="dark" href="/contact-us">
                  {" "}
                  Contact Us{" "}
                </Link>
              </li>
              <li>
                <Link
                  color="dark"
                  className="block whitespace-nowrap"
                  href="/careers"
                >
                  {" "}
                  Careers{" "}
                </Link>
              </li>
              {/* <li>
                <Link color="dark" className="block whitespace-nowrap" href="/sitemap" text="Sitemap" />
              </li> */}
            </ul>

            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="font-semibold uppercase text-opacity-90">
                Follow Us
              </li>
              <li>
                <Link
                  className="block text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap"
                  href="https://www.linkedin.com/company/supreme-group-company/"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & address */}
        <div className="flex gap-3 md:flex-row flex-col justify-between items-center blade-top-padding-xl">
          <h6 className="md:block hidden text-sm text-black whitespace-nowrap">
            ©2024. All Rights Reserved.
          </h6>
          <h6 className="md:block hidden text-sm text-black whitespace-nowrap">
            Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
          </h6>
          <h6 className="md:hidden block text-sm text-black whitespace-nowrap">
            ©2024. All Rights Reserved.
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
