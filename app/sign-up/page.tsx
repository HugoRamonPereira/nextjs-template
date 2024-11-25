import Image from "next/image";
import authenticateImage from "../../public/assets/images/authenticate.png";
import Form from "@/components/form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MdOutlineArrowBack } from "react-icons/md";

export default function Signup() {
  return (
    <section className="w-full h-screen bg-background flex justify-center select-none">
      <div className="relative hidden w-1/2 h-screen md:flex md:flex-col items-center justify-center space-y-4 border-r border-purple-tertiary">
        <Link href="/" className="absolute top-8 left-8">
          <Button variant="outline">
            <MdOutlineArrowBack />
          </Button>
        </Link>
        <Image
          src={authenticateImage}
          alt="Authenticate Illustration"
          width={500}
          height={500}
        />
      </div>
      <div className="w-11/12 md:w-1/2 mx-4 md:mx-8 h-screen flex flex-col items-center justify-center">
        <div className="w-11/12 sm:w-5/6 md:w-4/5 xl:w-3/5 border border-purple-tertiary rounded-xl px-4 sm:px-6 md:px-8 lg:px-10 pb-6 sm:pb-8 lg:pb-10">
          <Form formType="sign-up" />
        </div>
      </div>
    </section>
  );
}
