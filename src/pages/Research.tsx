const Research = () => (
  <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
    <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
      What Research Says
    </h1>
    <p className="text-muted-foreground text-lg mb-12">
      The research is clear: weight bias is not just about hurt feelings. It affects how people are
      treated by doctors, how comfortable they feel getting care, and how society decides which
      bodies are seen as healthy.
    </p>

    <div className="space-y-12 mb-16">
      <section>
        <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
          Weight Is Not the Same Thing as Health
        </h2>
        <div className="space-y-4 text-foreground/85 leading-relaxed text-lg">
          <p>
            One of the biggest problems is that weight gets treated like a simple answer. A person
            walks into a doctor's office with pain, fatigue, or another concern, and the conversation
            can quickly turn into a lecture about the scale. Marilyn Wann argues in <em>The Fat
            Studies Reader</em> that calling fat people "obese" turns body size into a medical
            problem instead of recognizing it as one kind of human difference.
          </p>
          <p>
            This matters because BMI was not created to tell the full story of one person's health.
            It is a shortcut, and shortcuts can be harmful when they replace listening, testing, and
            real medical attention. If a doctor assumes weight explains everything, they may miss
            what is actually going on.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 py-3 bg-card rounded-r-lg">
            <p className="font-serif text-lg text-foreground italic">
              "Health is not a number, but rather a subjective experience with many influences."
            </p>
            <cite className="block mt-2 text-sm text-muted-foreground not-italic">
              Marilyn Wann, <em>The Fat Studies Reader</em> (2009)
            </cite>
          </blockquote>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
          Weight Bias Has a History
        </h2>
        <div className="space-y-4 text-foreground/85 leading-relaxed text-lg">
          <p>
            Weight bias did not appear out of nowhere. Sabrina Strings' book <em>Fearing the Black
            Body</em> explains that Western ideas about fatness became connected to racism,
            especially anti-Blackness, over hundreds of years. Her work shows that thinness was often
            treated as a sign of control, intelligence, and superiority, while fatness was connected
            to unfair stereotypes about race and morality.
          </p>
          <p>
            That history helps explain why fatphobia affects people differently. A thin white patient,
            a fat Black patient, a disabled patient, and a fat woman may all be read differently before
            they even speak. The point is not that every experience is the same. The point is that
            bodies are judged through ideas that society has been building for a long time.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
          Doctors Can Carry Bias Too
        </h2>
        <div className="space-y-4 text-foreground/85 leading-relaxed text-lg">
          <p>
            Research also shows that weight bias can show up inside healthcare itself. In a 2001
            study, M. R. Hebl and J. Xu asked physicians to review patient charts where the patient's
            size was changed. The study found that a patient's weight affected doctors' attitudes and
            the care they said they would provide.
          </p>
          <p>
            That is the part that makes this a healthcare issue, not just a social issue. If a patient
            expects to be judged or ignored, they may put off appointments. If a doctor assumes a
            patient is lazy or non-compliant, the patient may get less careful treatment. Trust breaks
            down on both sides, and the patient is the one most likely to pay for it.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
          Stigma Can Harm Health
        </h2>
        <div className="space-y-4 text-foreground/85 leading-relaxed text-lg">
          <p>
            A. Janet Tomiyama and her coauthors argue that weight stigma can harm health instead of
            improving it. Their review connects weight stigma with stress, healthcare avoidance,
            disordered eating, and other outcomes that make people's lives harder. In other words,
            shame is not a treatment plan.
          </p>
          <p>
            Rebecca Puhl and Chelsea Heuer make a similar point in the <em>American Journal of Public
            Health</em>. They argue that stigma should be treated as a public health problem because it
            can create more harm and make healthcare less effective. That means the solution cannot
            just be telling patients to change their bodies. Healthcare providers and institutions
            also have to change how they treat people.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 py-3 bg-card rounded-r-lg">
            <p className="font-serif text-lg text-foreground italic">
              "Weight discrimination will continue to thrive so long as efforts to end it focus on
              changing people's bodies rather than changing people's minds."
            </p>
            <cite className="block mt-2 text-sm text-muted-foreground not-italic">
              Marilyn Wann, <em>The Fat Studies Reader</em> (2009)
            </cite>
          </blockquote>
        </div>
      </section>
    </div>

    <section className="border-t border-border pt-10">
      <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
        Bibliography
      </h2>
      <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        <li>Hebl, M. R., & Xu, J. "Weighing the Care: Physicians' Reactions to the Size of a Patient." <em>International Journal of Obesity</em> 25 (2001): 1246-1252.</li>
        <li>Puhl, Rebecca M., and Chelsea A. Heuer. "Obesity Stigma: Important Considerations for Public Health." <em>American Journal of Public Health</em> 100.6 (2010): 1019-1028.</li>
        <li>Strings, Sabrina. <em>Fearing the Black Body: The Racial Origins of Fat Phobia.</em> NYU Press, 2019.</li>
        <li>Tomiyama, A. Janet, et al. "How and Why Weight Stigma Drives the Obesity 'Epidemic' and Harms Health." <em>BMC Medicine</em> 16 (2018): 123.</li>
        <li>Wann, Marilyn. "Foreword: Fat Studies: An Invitation to Revolution." <em>The Fat Studies Reader</em>, edited by Esther Rothblum and Sondra Solovay, NYU Press, 2009, pp. ix-xxvi.</li>
      </ul>
    </section>
  </div>
);

export default Research;
