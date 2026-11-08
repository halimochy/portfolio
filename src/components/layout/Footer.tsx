import Link from "next/link";
import { navigation } from "@/data/site";
import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_auto] md:items-start">
        <div>
          <p className="font-display text-xl font-medium">{profile.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
            {profile.title}. {profile.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink-soft transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks links={profile.socials} />
      </div>
      <div className="border-t border-line">
        <div className="container flex flex-col gap-1 py-5 text-xs text-ink-muted sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
