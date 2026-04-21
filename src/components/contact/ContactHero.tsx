import PageHero from "@/components/ui/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      eyebrow="Get in Touch"
      headline="Let\u2019s Find the Right Fit."
      subtitle="Whether you're looking to hire or ready for your next role, the conversation starts here."
      image="/images/contact-hero.webp"
      imageAlt="Two professionals in genuine conversation — contact Titan Ridge"
      overlayAlpha={0.82}
    />
  );
}
