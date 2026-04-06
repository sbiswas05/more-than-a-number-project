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
          Science as a Social Practice: Who Gets to Define "Healthy"?
        </h2>
        <div className="space-y-4 text-foreground/85 leading-relaxed text-lg">
          <p>
            Sandra Harding asks us to consider science not as a neutral pursuit of truth, but as a 
            social practice shaped by the values, biases, and power structures of the people who 
            produce it. When we apply this lens to medicine's treatment of weight, a pattern emerges: 
            the Body Mass Index — a tool originally designed for population-level statistics — was 
            adopted as a definitive measure of individual health despite significant evidence to the 
            contrary. As Marilyn Wann writes, BMI is a way to "collapse height and weight into one 
            number" that tells us nothing meaningful about a person's wellbeing. In 1998, when BMI 
            cutoff points were lowered, "millions of people became fat overnight" — not because their 
            bodies changed, but because the definition did.
          </p>
          <p>
            This is what Harding calls a "feminist question in science": not whether fat people are 
            unhealthy, but <em>who benefits</em> from framing them that way. Wann points to the 
            $58.6 billion-per-year weight-loss industry and the "medico-pharmaceutical industrial 
            complex that profits from dangerous attempts to 'cure' people of bodily difference." 
            The science of "obesity" is not value-free — it is shaped by the same social forces that 
            bell hooks identifies when she writes about systems of domination that naturalize inequality.
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
          Raced, Gendered, and Disabled Bodies: Intersecting Oppressions
        </h2>
        <div className="space-y-4 text-foreground/85 leading-relaxed text-lg">
          <p>
            Weight stigma does not exist in isolation — it is deeply entangled with race, gender, 
            and disability. Sabrina Strings' <em>Fearing the Black Body</em> (2019) traces anti-fat 
            bias to its origins in the transatlantic slave trade and Protestant moral ideology, 
            showing how fatphobia was constructed alongside anti-Blackness as a tool of racial 
            hierarchy. Sander Gilman's work on racialized bodies demonstrates how "deviant" bodies 
            have historically been constructed through medical and scientific discourse — a pattern 
            that continues when fat bodies are treated as inherently pathological.
          </p>
          <p>
            Susan Bordo's analysis of gendered embodiment reveals how women's bodies in particular 
            are disciplined through cultural norms that demand thinness as proof of self-control and 
            moral worth. Bordo shows that the "tyranny of slenderness" is not merely aesthetic — it 
            functions as a form of social control that keeps women preoccupied with managing their 
            bodies rather than exercising power in the world.
          </p>
          <p>
            Rosemarie Garland-Thomson's disability theory offers another crucial lens. She argues 
            that integrating disability into feminist theory "transforms" both fields by revealing 
            how all bodies are measured against an unmarked norm — the white, male, thin, 
            non-disabled body. Fat embodiment, like disabled embodiment, is treated as a problem 
            to be fixed rather than a form of human variation to be accommodated. Wann draws 
            this connection explicitly, placing fat studies alongside "feminist studies, queer studies, 
            and disability studies" as fields that examine how bodies are categorized and controlled.
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
            George Yancy's work on embodiment and social perception helps us understand why this cycle 
            is so difficult to break. Yancy describes how bodies are "read" through frameworks of 
            prejudice before any interaction even begins — fat patients walk into exam rooms already 
            marked as non-compliant, lazy, or unhealthy. Physicians view fat patients negatively and 
            avoid spending time with them (Hebl & Xu, 2001). Even doctors who specialize in "obesity" 
            harbor stereotypes of fat people as "lazy, stupid, and worthless" (Schwartz et al., 2003).
          </p>
          <p>
            The so-called "obesity paradox" — evidence that people in "overweight" BMI categories 
            often have <em>better</em> health outcomes — further undermines the assumption that thinner 
            is always healthier. Katherine Flegal's landmark CDC study found 86,000 <em>fewer</em> deaths 
            among people labeled "overweight" compared to those at "normal" weight. As Wann puts it, 
            "Health is not a number, but rather a subjective experience with many influences. Stepping 
            onto a scale cannot prove a person healthy or unhealthy."
          </p>
          <blockquote className="border-l-4 border-primary pl-6 py-3 bg-card rounded-r-lg">
            <p className="font-serif text-lg text-foreground italic">
              "Weight discrimination will continue to thrive so long as efforts to end it focus on 
              changing people's bodies rather than changing people's minds."
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
        <li>Garland-Thomson, Rosemarie. "Integrating Disability, Transforming Feminist Theory." <em>NWSA Journal</em> 14.3 (2002): 1–32.</li>
        <li>Gilman, Sander L. "Black Bodies, White Bodies: Toward an Iconography of Female Sexuality in Late Nineteenth-Century Art, Medicine, and Literature." <em>Critical Inquiry</em> 12.1 (1985): 204–242.</li>
        <li>Harding, Sandra. "The Feminist Question in Science." <em>The Science Question in Feminism.</em> Cornell University Press, 1986.</li>
        <li>Hebl, M.R., & Xu, J. "Weighing the Care: Physicians' Reactions to the Size of a Patient." <em>International Journal of Obesity</em> 25.8 (2001): 1246–1252.</li>
        <li>hooks, bell. "Feminist Politics: Where We Stand." <em>Feminism Is for Everybody.</em> South End Press, 2000.</li>
        <li>Puhl, Rebecca M., and Chelsea A. Heuer. "Obesity Stigma: Important Considerations for Public Health." <em>American Journal of Public Health</em> 100.6 (2010): 1019–1028.</li>
        <li>Schwartz, M.B., et al. "Weight Bias Among Health Professionals Specializing in Obesity." <em>Obesity Research</em> 11.9 (2003): 1033–1039.</li>
        <li>Strings, Sabrina. <em>Fearing the Black Body: The Racial Origins of Fat Phobia.</em> NYU Press, 2019.</li>
        <li>Tomiyama, A. Janet, et al. "How and Why Weight Stigma Drives the Obesity 'Epidemic' and Harms Health." <em>BMC Medicine</em> 16.1 (2018): 123.</li>
        <li>Wann, Marilyn. "Foreword: Fat Studies: An Invitation to Revolution." <em>The Fat Studies Reader</em>, edited by Esther Rothblum and Sondra Solovay, NYU Press, 2009, pp. xi–xxvi.</li>
        <li>Yancy, George. "Looking at Whiteness: Finding Myself Much Like a Stranger." <em>Black Bodies, White Gazes.</em> Rowman & Littlefield, 2008.</li>
      </ul>
    </section>
  </div>
);

export default Research;
