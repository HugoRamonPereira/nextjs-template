import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";

interface TechCardProps {
  image: StaticImageData;
  name: string;
  imageWidth: number;
}

export default function TechCard({ image, name, imageWidth }: TechCardProps) {
  return (
    <Card className="bg-transparent border-purple-tertiary">
      <CardContent className="flex flex-col items-center p-4">
        <Image src={image} alt="logo" width={imageWidth} height={50} />
      </CardContent>
      <CardFooter className="flex justify-center items-end text-center">
        <p className="text-nowrap text-purple-quarternary">{name}</p>
      </CardFooter>
    </Card>
  );
}
