import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";

export default function TermsAndConditions() {
  return (
    <section className="bg-background min-h-screen w-full relative">
      <Link href="/" className="hidden sm:block absolute top-8 left-8">
        <Button variant="outline">
          <MdOutlineArrowBack />
        </Button>
      </Link>
      <div className="max-w-[85%] md:max-w-[60%] h-full mx-auto flex flex-col items-center pb-14">
        <h1 className="text-purple-tertiary text-3xl my-10 tracking-wider font-charlevoix-bold">
          Termos e Condições
        </h1>
        <div className="text-purple-tertiary text-justify font-charlevoix-medium leading-6 text-sm mb-6">
          <p className="font-charlevoix-bold text-lg">
            Next.js 15 | Shadcn-UI Template
          </p>
          <br />
          These Terms and Conditions govern your use of the{" "}
          <span className="font-charlevoix-bold tracking-wide">
            Next.js 15 and Shadcn Template
          </span>{" "}
          provided by{" "}
          <span className="font-charlevoix-bold tracking-wide">
            Hugo Ramon Pereira
          </span>{" "}
          ("we," "us," or "our"). By downloading, accessing, or using the
          Template, you agree to comply with these terms. If you do not agree,
          please refrain from using the Template.
          <br />
          <br />
          <ul className="list-disc">
            <li className="list-none text-lg font-charlevoix-bold">
              License and Usage
              <br />
              <br />
              <ul className="list-disc text-sm font-charlevoix-medium">
                <li>
                  License: Upon purchase or download, we grant you a
                  non-exclusive, non-transferable, revocable license to use the
                  Template for personal or commercial projects, subject to these
                  Terms.
                </li>
                <br />
                <li>
                  Permitted Use: You may: Use the Template to create unlimited
                  websites or applications for yourself or clients. Modify or
                  customize the Template to suit your project requirements.
                </li>
                <br />
                <li>
                  Prohibited Use: You may not: Redistribute, resell, or
                  sublicense the Template or any derivative works. Use the
                  Template in any way that violates applicable laws or
                  regulations. Claim ownership or authorship of the Template in
                  its original or modified form.
                </li>
              </ul>
            </li>
            <br />
            <li>
              Intellectual Property Rights The Template, including its design,
              code, and related assets, is the intellectual property of
              <span className="font-charlevoix-bold">
                &nbsp;Hugo Ramon Pereira
              </span>
              . This includes all components, styles, and configurations built
              using
              <span className="font-charlevoix-bold">
                &nbsp;Next.js 15 and Shadcn-UI
              </span>
              . All rights not expressly granted are reserved
            </li>
            <br />
            <li>
              Disclaimer of Warranties The Template is provided "as is," without
              warranties of any kind, either express or implied, including but
              not limited to fitness for a particular purpose or
              non-infringement. We do not guarantee that the Template will be
              error-free, function uninterrupted, or meet your specific
              requirements.
            </li>
            <br />
            <li>
              Limitation of Liability To the fullest extent permitted by law, we
              shall not be liable for any indirect, incidental, consequential,
              or punitive damages arising from the use or inability to use the
              Template, even if we have been advised of the possibility of such
              damages.
            </li>
            <br />
            <li>
              Updates and Support 5.1 Updates: We may provide updates or
              improvements to the Template. Access to updates may depend on the
              terms of your purchase or download. 5.2 Support: Support for the
              Template is provided as outlined in our Support Policy or at our
              discretion.
            </li>
            <br />
            <li>
              Termination We reserve the right to terminate your license to use
              the Template if you breach any of these Terms. Upon termination,
              you must cease using the Template and delete all copies in your
              possession.
            </li>
            <br />
            <li>
              Governing Law These Terms are governed by the laws of
              <span className="font-charlevoix-bold">&nbsp;Brazil</span>. Any
              disputes arising out of or relating to these Terms shall be
              resolved in the courts of
              <span className="font-charlevoix-bold">&nbsp;Brazil</span>.
            </li>
            <br />
            <li>
              Changes to Terms We may revise these Terms at any time without
              prior notice. The updated Terms will be effective upon posting on
              our website or distribution alongside the Template. Continued use
              of the Template constitutes acceptance of the revised Terms.
            </li>
            <br />
            <li>
              Contact Information For questions or concerns about these Terms,
              please contact us at:
              <a
                href="mailto:hramonp-dev@outlook.com"
                className="underline underline-offset-4 hover:text-purple-quinary"
              >
                <span className="font-charlevoix-bold">
                  &nbsp;hramonp-dev@outlook.com
                </span>
              </a>
            </li>
            <br />
            <li>
              De acordo com a lei do consumidor, o participante pode cancelar e
              solicitar reembolso em até 7 dias após a compra. Para cancelamento
              e reembolso, entre em contato com a equipe:{" "}
              <a
                href="mailto:hramonp-dev@outlook.com"
                className="underline underline-offset-4 hover:text-purple-quinary"
              >
                <span className="font-charlevoix-bold">
                  &nbsp;hramonp-dev@outlook.com
                </span>
              </a>
              .
            </li>
            <br />
            <li>
              Ao efetuar a compra do ingresso e aceitar os Termos e Condições do
              Eventbrite, o participante declara ter lido, compreendido e aceito
              estes Termos e Condições da Hack in Cariri, estando ciente dos
              direitos e obrigações decorrentes deste documento.
            </li>
          </ul>
        </div>
        <Link href="/">
          <Button className="flex" variant="outline">
            Voltar para o Início <FaHome />
          </Button>
        </Link>
      </div>
    </section>
  );
}
