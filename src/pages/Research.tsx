const Research = () => (
  <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
    <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
      What Research Says
    </h1>
    <p className="text-muted-foreground text-lg mb-12">
      A summary of key scholarship on weight stigma, medicalization of the body, and structural bias — 
      grounded in feminist, queer, and critical race theory.
    </p>

    <div className="space-y-12 mb-16">
      {/* Section 1 */}
      <section>
        <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
          The Medicalization of Body Size
        </h2>
        <div className="space-y-4 text-foreground/85 leading-relaxed text-lg">
          <p>
            Weight became pathologized largely through the Body Mass Index (BMI) — a tool originally 
            designed for population-level statistics, not individual health assessment. As Marilyn Wann 
            writes, the BMI is a way to "collapse height and weight into one number" that tells us 
            nothing meaningful about a person's health. In 1998, when BMI cutoff points were lowered, 
            "millions of people became fat overnight" — not because their bodies changed, but because 
            the definition did.
          </p>
          <p>
            Sabrina Strings traces anti-fat bias to its racist and colonial origins in <em>Fearing the 
            Black Body</em> (2019), showing how fatphobia was constructed alongside anti-Blackness as a 
            tool of racial hierarchy. The medical establishment adopted weight as a primary health 
            indicator despite significant evidence questioning this framework — evidence that Wann 
            describes as showing "sometimes being fat protects against disease" and "sometimes fatter 
            people live longer."
          </p>
          <blockquote className="border-l-4 border-primary pl-6 py-3 bg-card rounded-r-lg">
            <p className="font-serif text-lg text-foreground italic">
              "Calling fat people 'obese' medicalizes human diversity. Medicalizing diversity inspires 
              a misplaced search for a 'cure' for naturally occurring difference."
            </p>
            <cite className="block mt-2 text-sm text-muted-foreground not-italic">
              — Marilyn Wann, <em>The Fat Studies Reader</em> (2009)
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Section 2 */}
      <section>
        <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
          Feminist & Critical Perspectives
        </h2>
        <div className="space-y-4 text-foreground/85 leading-relaxed text-lg">
          <p>
            Feminist scholars have long examined how bodies — particularly women's and marginalized 
            bodies — are disciplined through medical authority. Susan Bordo's <em>Unbearable Weight</em> (2003) 
            analyzes the cultural construction of the body and how thinness became a marker of moral 
            virtue. Fat studies, as Wann argues, sits alongside "feminist studies, queer studies, and 
            disability studies" as a field that "can show us who we are via the lens of weight."
          </p>
          <p>
            Wann draws on Patrick Colm Hogan's concept of <em>micro-hierarchization</em> to explain how weight 
            bias operates: "People feel superiority or self-loathing based on each calorie or gram of 
            food consumed or not consumed, in each belt notch, pound, or inch gained or lost." This 
            constant ranking leaves "little room for people to recognize and revolt against the overall 
            system that alienates us from our own bodies." Weight stigma intersects with race, gender, 
            class, and disability — creating compounding harm for those living at multiple intersections 
            of marginalization.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 py-3 bg-card rounded-r-lg">
            <p className="font-serif text-lg text-foreground italic">
              "Every person who lives in a fat-hating culture inevitably absorbs anti-fat beliefs, 
              assumptions, and stereotypes, and also inevitably comes to occupy a position in relation 
              to power arrangements that are based on weight."
            </p>
            <cite className="block mt-2 text-sm text-muted-foreground not-italic">
              — Marilyn Wann
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
          Health Outcomes & The Evidence Gap
        </h2>
        <div className="space-y-4 text-foreground/85 leading-relaxed text-lg">
          <p>
            Research shows that weight stigma itself contributes to poor health outcomes. Patients 
            who experience weight bias avoid seeking care — as Wann documents, "even when fat women 
            have health insurance, we avoid doctors because of disrespectful treatment." A. Janet 
            Tomiyama's research demonstrates how weight stigma drives increased cortisol, disordered 
            eating, and healthcare avoidance, creating a vicious cycle that worsens the very outcomes 
            doctors claim to prevent.
          </p>
          <p>
            The so-called "obesity paradox" — evidence that people in "overweight" BMI categories 
            often have <em>better</em> health outcomes — further undermines the assumption that thinner 
            is always healthier. Katherine Flegal's landmark CDC study found 86,000 <em>fewer</em> deaths 
            among people labeled "overweight" compared to those at "normal" weight. As Rebecca Puhl's 
            research emphasizes, fitness and metabolic health are far more predictive of outcomes than 
            BMI alone.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 py-3 bg-card rounded-r-lg">
            <p className="font-serif text-lg text-foreground italic">
              "Health is not a number, but rather a subjective experience with many influences. 
              Stepping onto a scale cannot prove a person healthy or unhealthy."
            </p>
            <cite className="block mt-2 text-sm text-muted-foreground not-italic">
              — Marilyn Wann
            </cite>
          </blockquote>
        </div>
      </section>
    </div>

    {/* Bibliography */}
    <section className="border-t border-border pt-10">
      <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
        Bibliography
      </h2>
      <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        <li>Amy, N.K., Aalborg, A., Lyons, R., & Keranen, L. "Barriers to Routine Gynecological Cancer Screening for White and African-American Obese Women." <em>International Journal of Obesity</em> 30.1 (2006): 147–155.</li>
        <li>Bordo, Susan. <em>Unbearable Weight: Feminism, Western Culture, and the Body.</em> University of California Press, 2003.</li>
        <li>Farrell, Amy Erdman. <em>Fat Shame: Stigma and the Fat Body in American Culture.</em> NYU Press, 2011.</li>
        <li>Flegal, K.M., et al. "Excess Deaths Associated with Underweight, Overweight, and Obesity." <em>Journal of the American Medical Association</em> 293 (2005): 1861–1867.</li>
        <li>Fontaine, K.R., et al. "Body Weight and Health Care Among Women in the General Population." <em>Archives of Family Medicine</em> 7 (1998): 381–384.</li>
        <li>Hebl, M.R., & Xu, J. "Weighing the Care: Physicians' Reactions to the Size of a Patient." <em>International Journal of Obesity</em> 25.8 (2001): 1246–1252.</li>
        <li>Puhl, Rebecca M., and Chelsea A. Heuer. "Obesity Stigma: Important Considerations for Public Health." <em>American Journal of Public Health</em> 100.6 (2010): 1019–1028.</li>
        <li>Schwartz, M.B., et al. "Weight Bias Among Health Professionals Specializing in Obesity." <em>Obesity Research</em> 11.9 (2003): 1033–1039.</li>
        <li>Strings, Sabrina. <em>Fearing the Black Body: The Racial Origins of Fat Phobia.</em> NYU Press, 2019.</li>
        <li>Tomiyama, A. Janet, et al. "How and Why Weight Stigma Drives the Obesity 'Epidemic' and Harms Health." <em>BMC Medicine</em> 16.1 (2018): 123.</li>
        <li>Wann, Marilyn. "Foreword: Fat Studies: An Invitation to Revolution." <em>The Fat Studies Reader</em>, edited by Esther Rothblum and Sondra Solovay, NYU Press, 2009, pp. xi–xxvi.</li>
      </ul>
    </section>
  </div>
);

export default Research;
