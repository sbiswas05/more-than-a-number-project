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
        For thousands of people, going to the doctor can feel like a burden, an exercise where their worth is reduced to a number. Conversations about symptoms, health concerns and medical history all circle back to a single topic, their weight. Reports of chronic pain, respiratory issues or even broken bones are dismissed with a single “fix”, to lose weight. 

      </p>
      <p>
        Studies have consistently shown that there are strong implicit and explicit biases that healthcare professionals show against people in larger bodies. These biases can slow down diagnoses, lead to inadequate treatment and cause a breakdown of trust in patient-provider relationships. Patients hesitate more and more to see a doctor, not because they don’t care about their health but rather because it feels like the healthcare system doesn’t care about them. 
      </p>
      <p>
        Fatphobia is not just rude behavior when placed in a medical environment. It becomes a structural problem which stems from things like medical education, clinical guidelines, and healthcare culture itself. When weight is treated as a moral failing instead of a complex problem with countless factors, everyone suffers from it, but some far more than others. 
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
        As author and activist Marilyn Wann documents, many physicians view overweight patients with a more negative attitude and avoid spending as much time with them compared to non-overweight patients. (Hebl & Xu, 2001). Even specialists doctors and researchers who have a focus on obesity often still harbor negative stereotypes in regards to large bodied people. Obese women (BMI of 35) are around 25% to 39% less likely to receive things like breast exams, Pap smears or gynecological exams compared to non-obese women (BMI of 25) according to a study “Body Weight and Health Care Among Women in the General Population” (Fontaine et al., 1998).

      </p>
      <p>
        The consequences are becoming increasingly severe, fat patients are more likely to avoid doctors due to the disrespectful or embarrassing treatment they receive as well as due to the negative attitude many providers show. In an extreme case cited by Wann, an overweight man in London was told for an entire decade that his abdominal pain was caused exclusively by his weight, until doctors finally did a scan on him, locating and removing a 55 lb malignant tumor (Wann, 2009).

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
