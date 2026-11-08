import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCta() {
  return (
    <section aria-labelledby="contact-heading" className="container pb-8">
      <Reveal>
        <div className="rounded-3xl bg-ink px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <h2 id="contact-heading" className="mx-auto max-w-xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Let&apos;s build something useful together.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/70">
            Have a project, role or idea in mind? I&apos;d love to hear about it.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink
              href={`mailto:${profile.email}`}
              size="lg"
              className="!bg-white !text-ink hover:!bg-accent-soft"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {profile.email}
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
