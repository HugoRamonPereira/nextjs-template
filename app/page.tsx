"use client";

import TechCard from "@/components/tech-card";
import { Button } from "@/components/ui/button";
import nextjs from "../public/assets/images/nextjs.webp";
import reactjs from "../public/assets/images/react-js-icon.png";
import shadcn from "../public/assets/images/shadcn-ui.png";
import tailwind from "../public/assets/images/tailwind.png";
import typescript from "../public/assets/images/typescript.png";
import biome from "../public/assets/images/biomejs.png";
import reacthookform from "../public/assets/images/react-hook-form.png";
import zod from "../public/assets/images/zod.png";
import tanstack from "../public/assets/images/tanstack.png";
import storybook from "../public/assets/images/storybook.png";
import jest from "../public/assets/images/jest.svg";
import node from "../public/assets/images/nodejs.png";
import { ArrowRight, PlusIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-sky-100">
      <div className="max-w-7xl mx-auto min-h-svh flex flex-col gap-8 p-10">
        <div className="flex flex-col items-center justify-center gap-4 tracking-wide w-full h-40 border border-black rounded-lg">
          <h1 className="font-[family-name:var(--charlevoix-medium)] text-lg md:text-2xl p-4 text-center">
            Welcome to the Next.js 15 | React.js 19 | Shadcn-UI Template
          </h1>
          <p className="font-[family-name:var(--charlevoix-light)] text-sm md:text-base lg:text-lg text-center pb-4">
            This template is made of the best and most modern technologies for
            Web Development
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center p-4 justify-around font-[family-name:var(--charlevoix-medium)] text-lg md:text-xl tracking-wide w-full flex-1 border border-black rounded-lg text-center">
          These are the technologies used in this project
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <TechCard image={nextjs} name="Next.js" imageWidth={60} />
            <TechCard image={reactjs} name="React.js" imageWidth={60} />
            <TechCard image={shadcn} name="Shadcn-UI" imageWidth={60} />
            <TechCard image={tailwind} name="TailwindCSS" imageWidth={90} />
            <TechCard image={typescript} name="Typescript" imageWidth={60} />
            <TechCard image={biome} name="Biome" imageWidth={80} />
            <TechCard image={reacthookform} name="Hook-Form" imageWidth={60} />
            <TechCard image={zod} name="Zod" imageWidth={70} />
            <TechCard image={tanstack} name="Tanstack" imageWidth={60} />
            <TechCard image={storybook} name="Storybook" imageWidth={45} />
            <TechCard image={jest} name="Jest" imageWidth={60} />
            <TechCard image={node} name="Node.js" imageWidth={60} />
          </div>
        </div>
        <div className="flex flex-col items-center p-4 justify-around font-[family-name:var(--charlevoix-medium)] text-lg tracking-wide w-full h-40 border border-black rounded-lg">
          <p className="text-center mb-4 sm:mb-0">
            Please sign in or sign up to have access to all of the components
          </p>
          <div className="flex gap-4 text-l">
            <Link href="sign-in">
              <Button variant="main" size="lg">
                Sign In <ArrowRight />
              </Button>
            </Link>
            <Link href="sign-up">
              <Button variant="main" size="lg">
                Sign Up <PlusIcon />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
