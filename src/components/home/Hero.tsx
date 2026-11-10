import Image from "next/image";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SocialLinks } from "@/components/ui/SocialLinks";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="container pb-16 pt-10 sm:pb-24 sm:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div>
          {profile.availability && (
            <p
              className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-ink-soft"
              style={delay(0)}
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </p>
          )}

          <h1
            id="hero-heading"
            className="animate-fade-up font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            style={delay(100)}
          >
            Hi, I&apos;m {profile.name}.
          </h1>
          <p className="mt-4 animate-fade-up font-display text-2xl text-accent sm:text-3xl" style={delay(180)}>
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-ink-soft" style={delay(260)}>
            {profile.intro}
          </p>

          <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-3" style={delay(340)}>
            <ButtonLink href="/projects" size="lg">
              Explore My Projects
              <ArrowDown className="h-4 w-4 -rotate-90 transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href={profile.resume} variant="secondary" size="lg" download>
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </ButtonLink>
          </div>

          <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-5" style={delay(420)}>
            <SocialLinks links={profile.socials} />
            <span className="flex items-center gap-1.5 text-sm text-ink-muted">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up lg:max-w-none" style={delay(200)}>
          <div
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-accent/30"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-accent-soft shadow-lift">
            <Image
              src={profile.avatar}
              alt={profile.avatarAlt}
              fill
              priority
              sizes="(min-width: 1024px) 400px, 80vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <dl className="mt-16 grid animate-fade-up grid-cols-3 gap-4 border-t border-line pt-8 sm:mt-24" style={delay(500)}>
        {profile.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse">
            <dt className="mt-1 text-xs text-ink-muted sm:text-sm">{stat.label}</dt>
            <dd className="font-display text-3xl font-medium tracking-tight sm:text-4xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
