interface HeroContentProps {
  hero: JSX.Element;
  title: string;
  description: string;
}

export const sharedSpan = (sentence: string) => {
  return <span className="text-4xl font-bold tracking-wider">{sentence}</span>;
};

export function HeroContent({ hero, title, description }: HeroContentProps) {
  return (
    <div className="flex flex-col items-center justify-between pt-28 gap-12">
      {hero}
      <div className="flex flex-col items-center justify-center gap-5">
        {sharedSpan(title)}
        <span className="text-xl font-bold opacity-60">{description}</span>
      </div>
    </div>
  );
}
