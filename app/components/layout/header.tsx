import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

export default function Header() {
  return (
    <>
      <header className="relative top-0 z-50 w-full bg-slate-100 py-3 mb-2">
        <div className="container mx-auto px-4 flex max-w-[500px] flex-wrap items-center justify-between gap-3 xl:max-w-screen-xl xl:gap-7">
          <Link className="is-logo " href="/">
            <Image
              src="/bmw.png"
              width={100}
              height={100}
              alt={"Logo strony"}
              priority
            ></Image>
          </Link>

          <Menu></Menu>
        </div>
      </header>
    </>
  );
}
