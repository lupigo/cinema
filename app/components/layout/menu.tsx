"use client";

import { navConfig } from "@/app/config/nav-config";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import Link from "next/link";
import {
  usePathname,
  useRouter,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const selectedLayoutSegment = useSelectedLayoutSegment();
  // const sls = useSelectedLayoutSegments();
  const patch = usePathname();

  // console.log(layoutSegment);
  // console.log(sls);
  console.log(patch);

  const menuItems = navConfig.map(({ label, slug, layoutSegment }) => (
    <Link
      key={label}
      href={slug}
      className={cn(
        "gap-3 flex hover:text-red text-black",
        slug === patch || layoutSegment === selectedLayoutSegment
          ? "text-fuchsia-500	"
          : ""
      )}
    >
      {label}
    </Link>
  ));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button className="xl:hidden" onClick={() => setOpen(true)}>
        MENU
      </Button>
      <Select onValueChange={(selectedVal) => router.push(selectedVal)}>
        <SelectTrigger className="fixed bottom-5 z-50">
          <SelectValue placeholder="Wybierz Link"></SelectValue>
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="/">Strona Główna</SelectItem>
          <SelectItem value="/blog/pierwszy-wpis">Pierwszy wpis</SelectItem>
          <SelectItem value="/szukaj">Szukaj</SelectItem>
          <SelectItem value="/moje-konto">Moje konto</SelectItem>
          <SelectItem value="/rejestracja">Rejestracja</SelectItem>
          <SelectItem value="/logowanie">Logowanie</SelectItem>
        </SelectContent>
      </Select>

      <div className="fixed bottom-32 z-50 w-[31.25rem] space-x-5">
        <Button onClick={() => router.refresh()}>Refresh</Button>
        <Button onClick={() => router.forward()}>Forward</Button>
        <Button onClick={() => router.back()}>Back</Button>
        <Button onClick={() => router.replace("/")}>Replace</Button>
      </div>
      <nav className="flex items-center gap-3 text-lg">{menuItems}</nav>

      <DialogContent>
        <nav
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 text-lg"
        >
          {menuItems}
        </nav>
      </DialogContent>
    </Dialog>
  );
}
