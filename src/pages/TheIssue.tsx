const stats = [
  { number: "1 in 3", text: "patients report feeling judged by their doctor about their weight." },
  { number: "69%", text: "of women in higher weight categories have experienced weight stigma from healthcare providers." },
  { number: "50%", text: "of physicians describe their patients in higher-weight bodies as 'non-compliant.'" },
  { number: "54%", text: "of patients who experienced weight bias said they avoided seeking future medical care." },
];

const TheIssue = () => (
  <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
    <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8">
      The Issue
    </h1>

    <div className="space-y-6 text-foreground/85 leading-relaxed text-lg mb-16">
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
