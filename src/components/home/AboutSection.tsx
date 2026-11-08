import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="container py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading id="about-heading" eyebrow="About" title="Building systems that last" />
          <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="text-sm font-semibold">Skills &amp; toolkit</h3>
          <dl className="mt-5 space-y-6">
            {profile.skills.map((group) => (
              <div key={group.group} className="border-t border-line pt-5">
                <dt className="text-sm text-ink-muted">{group.group}</dt>
                <dd className="mt-3">
                  <ul className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Badge variant="outline">{item}</Badge>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
