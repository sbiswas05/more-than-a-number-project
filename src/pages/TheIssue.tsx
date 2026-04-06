const stats = [
  { number: "1 in 3", text: "patients report feeling judged by their doctor about their weight." },
  { number: "69%", text: "of women in higher weight categories have experienced weight stigma from healthcare providers." },
  { number: "50%", text: "of physicians describe their patients in higher-weight bodies as 'non-compliant.'" },
  { number: "54%", text: "of patients who experienced weight bias said they avoided seeking future medical care." },
  { number: "93%", text: "of HR professionals said they would hire a 'normal weight' applicant over an equally qualified fat applicant." },
];

const TheIssue = () => (
  <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
    <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8">
      The Issue
    </h1>

    <div className="space-y-6 text-foreground/85 leading-relaxed text-lg mb-12">
      <p>
        For millions of people, going to the doctor is an exercise in being reduced to a number. 
        Regardless of symptoms, concerns, or medical history, the conversation circles back to weight. 
        Patients report having broken bones, chronic pain, and respiratory issues dismissed with a single 
        recommendation: "lose weight."
      </p>
      <p>
        This isn't anecdotal. Studies consistently show that healthcare providers hold strong implicit 
        and explicit biases against people in larger bodies. These biases lead to delayed diagnoses, 
        inadequate treatment, and a fundamental breakdown in the patient-provider relationship. Patients 
        stop going to the doctor — not because they don't care about their health, but because they've 
        learned that the system doesn't care about them.
      </p>
      <p>
        Fatphobia in medical settings is not just rude behavior. It is a structural problem embedded 
        in medical education, clinical guidelines, and the culture of healthcare itself. When weight 
        is treated as a moral failing rather than a complex, multifactorial trait, everyone suffers — 
        but some far more than others.
      </p>
    </div>

    {/* Wann quote callout */}
    <blockquote className="border-l-4 border-primary pl-6 py-4 mb-12 bg-card rounded-r-lg">
      <p className="font-serif text-lg md:text-xl text-foreground italic leading-relaxed">
        "Calling fat people 'obese' medicalizes human diversity. Medicalizing diversity inspires a 
        misplaced search for a 'cure' for naturally occurring difference. Far from generating sympathy 
        for fat people, medicalization of weight fuels anti-fat prejudice and discrimination in all 
        areas of society."
      </p>
      <cite className="block mt-3 text-sm text-muted-foreground not-italic">
        — Marilyn Wann, <em>The Fat Studies Reader</em> (2009)
      </cite>
    </blockquote>

    <div className="space-y-6 text-foreground/85 leading-relaxed text-lg mb-12">
      <p>
        As Wann documents, physicians view fat patients negatively and avoid spending time with them 
        (Hebl & Xu, 2001). Even doctors and researchers who specialize in "obesity" harbor stereotypes 
        of fat people as "lazy, stupid, and worthless" (Schwartz et al., 2003). Fat women are a third 
        less likely to receive breast exams, Pap smears, or gynecological exams — not because they 
        don't seek care, but because providers are reluctant to engage with larger bodies (Fontaine et al., 1998).
      </p>
      <p>
        The consequences are severe: fat patients avoid doctors because of "disrespectful treatment, 
        embarrassment at being weighed, negative attitudes of providers, unsolicited advice to lose 
        weight, and medical equipment that was too small to be functional" (Amy et al., 2006). In one 
        case Wann cites, a fat man in London was told for an entire decade that his abdominal pain was 
        due to his weight — until doctors finally scanned him and removed a fifty-five-pound malignant tumor.
      </p>
    </div>

    {/* Second quote */}
    <blockquote className="border-l-4 border-primary pl-6 py-4 mb-16 bg-card rounded-r-lg">
      <p className="font-serif text-lg md:text-xl text-foreground italic leading-relaxed">
        "Weight discrimination will continue to thrive so long as efforts to end it focus on changing 
        people's bodies rather than changing people's minds."
      </p>
      <cite className="block mt-3 text-sm text-muted-foreground not-italic">
        — Marilyn Wann, <em>The Fat Studies Reader</em> (2009)
      </cite>
    </blockquote>

    {/* Stats */}
    <section>
      <h2 className="font-serif text-2xl font-semibold text-foreground mb-8">By the Numbers</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-card rounded-lg p-6 border border-border">
            <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">{s.number}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default TheIssue;
