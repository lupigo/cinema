import Image from "next/image";
import React from "react";

export default function ImagesTestPage() {
  return (
    <>
      <div className="container-full">
        {/* <div className="relative h-[600px]">
          <Image
            src="/baner_ekino.jpg"
            alt=""
            fill
            // quality={80} // 75 podstawowa
            priority // wczytywane wcześniej jak najszybciej
            className="object-cover"
          ></Image>
        </div> */}

        <div className="grid xl:grid-cols-3">
          <Image
            src="/baner_ekino.jpg"
            alt=""
            width={1200}
            height={600}
            sizes="(min-width: 1200px) 33vw, 100vw)"
            // quality={80} // 75 podstawowa
            priority // wczytywane wcześniej jak najszybciej
          ></Image>

          <Image
            src="/baner_ekino_2.jpg"
            alt=""
            width={1200}
            height={600}
            sizes="(min-width: 1200px) 33vw, 100vw)"
            // quality={80} // 75 podstawowa
            priority // wczytywane wcześniej jak najszybciej
          ></Image>

          <Image
            src="https://images.unsplash.com/photo-1719937050679-c3a2c9c67b0f"
            alt=""
            width={1200}
            height={600}
            sizes="(min-width: 1200px) 33vw, 100vw)"
            // quality={80} // 75 podstawowa
            priority // wczytywane wcześniej jak najszybciej
          ></Image>
        </div>
      </div>
    </>
  );
}
