import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => (
  <div>
    {/* Hero */}
    <section className="max-w-3xl mx-auto px-6 py-24 md:py-32">
      <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
        Your weight is not<br />your health.
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
        Weight bias in healthcare is a documented, systemic problem that affects millions of people. 
        Patients are dismissed, misdiagnosed, and driven away from the care they need — all because 
        of the number on a scale. It's time to talk about it.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base px-8">
          <a href="https://forms.google.com/placeholder" target="_blank" rel="noopener noreferrer">
            Take Our Survey
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="text-base px-8 border-border text-foreground hover:bg-muted">
          <Link to="/the-issue">Learn More</Link>
        </Button>
      </div>
    </section>

    {/* Divider quote */}
    <section className="bg-card py-16 px-6">
      <blockquote className="max-w-3xl mx-auto text-center">
        <p className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed">
          "The greatest barrier to healthcare isn't access — it's bias."
        </p>
        <cite className="block mt-4 text-sm text-muted-foreground not-italic">
          — Adapted from weight stigma research
        </cite>
      </blockquote>
    </section>

    {/* Quick links */}
    <section className="max-w-3xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "The Issue", desc: "How fatphobia shows up in the doctor's office.", to: "/the-issue" },
          { title: "The Research", desc: "What scholars and data actually say.", to: "/research" },
          { title: "Your Story", desc: "Share your experience. You're not alone.", to: "/share-your-story" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="group p-6 rounded-lg border border-border hover:border-primary/30 hover:bg-card transition-all"
          >
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default Index;
