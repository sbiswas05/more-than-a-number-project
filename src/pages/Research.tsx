const Research = () => (
  <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
    <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
      What Research Says
    </h1>
    <p className="text-muted-foreground text-lg mb-12">
      A summary of key scholarship on weight stigma, medicalization of the body, and structural bias.
    </p>

    <div className="space-y-12 mb-16">
      {/* Section 1 */}
      <section>
        <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
          The Medicalization of Body Size
        </h2>
        <p className="text-foreground/85 leading-relaxed text-lg">
          [Placeholder: Discuss how weight became pathologized through the BMI — a tool originally 
          designed for population-level statistics, not individual health assessment. Reference the 
          work of scholars like Sabrina Strings, who traces anti-fat bias to its racist and 
          colonial origins, and Ancel Keys, who created the BMI index. Explain how the medical 
          establishment adopted weight as a primary health indicator despite significant evidence 
          questioning this framework.]
        </p>
      </section>

      {/* Section 2 */}
      <section>
        <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
          Feminist & Critical Perspectives
        </h2>
        <p className="text-foreground/85 leading-relaxed text-lg">
          [Placeholder: Summarize feminist critiques of how bodies — particularly women's and 
          marginalized bodies — are disciplined through medical authority. Reference thinkers 
          like Susan Bordo on the cultural construction of the body, Michel Foucault on biopower, 
          and contemporary fat studies scholars like Cat Pausé and Amy Erdman Farrell. Discuss 
          how weight stigma intersects with race, gender, class, and disability.]
        </p>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
          Health Outcomes & The Evidence Gap
        </h2>
        <p className="text-foreground/85 leading-relaxed text-lg">
          [Placeholder: Present research on how weight stigma itself contributes to poor health 
          outcomes — increased cortisol, avoidance of care, disordered eating. Cite studies from 
          researchers like A. Janet Tomiyama and Rebecca Puhl. Address the "obesity paradox" and 
          evidence that fitness and metabolic health are more predictive of outcomes than BMI alone.]
        </p>
      </section>
    </div>

    {/* Bibliography */}
    <section className="border-t border-border pt-10">
      <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
        Bibliography
      </h2>
      <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        <li>Strings, Sabrina. <em>Fearing the Black Body: The Racial Origins of Fat Phobia.</em> NYU Press, 2019.</li>
        <li>Bordo, Susan. <em>Unbearable Weight: Feminism, Western Culture, and the Body.</em> University of California Press, 2003.</li>
        <li>Puhl, Rebecca M., and Chelsea A. Heuer. "Obesity Stigma: Important Considerations for Public Health." <em>American Journal of Public Health</em> 100.6 (2010): 1019–1028.</li>
        <li>Tomiyama, A. Janet, et al. "How and Why Weight Stigma Drives the Obesity 'Epidemic' and Harms Health." <em>BMC Medicine</em> 16.1 (2018): 123.</li>
        <li>Farrell, Amy Erdman. <em>Fat Shame: Stigma and the Fat Body in American Culture.</em> NYU Press, 2011.</li>
        <li>[Add additional sources here]</li>
      </ul>
    </section>
  </div>
);

export default Research;
