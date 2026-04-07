const About = () => (
  <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
    <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8">
      About This Project
    </h1>
    <div className="space-y-6 text-lg text-foreground/85 leading-relaxed">
      <p>
        <strong className="text-foreground">More Than a Number</strong> was created by students at the University 
        of Maryland as part of a feminist studies course focused on <em>Bodies in Contention</em>. 
        We built this site because we believe that the way bodies are policed in medical spaces is a public health issue, and a deeply personal one.
      </p>
      <p>
        This project connects academic research with real-world action. We drew on the work of scholars like Sandra Harding, who argues that science is shaped by social forces, Susan Bordo, who writes about how gender affects the way we experience our bodies, and Marilyn Wann, whose foundational fat studies work challenges harmful assumptions about weight and health. All of this scholarship grounded our project in feminist, queer, and critical race theory.
      </p>
      <p>
        Our goal is to create real change. We are not just documenting the problem of weight bias in healthcare. We are actively working to challenge it by collecting student stories, sharing data, and building a resource that pushes back against harmful assumptions about bodies and medicine. As Marilyn Wann writes, "Fat studies is a radical field, in the sense that it goes to the root of weight-related belief systems." We take that seriously.
      </p>
      <p>
        This project is part research, part advocacy, and part community building. It is designed to shift the conversation at UMD and beyond. If this site resonated with you, share it. If you have a story, tell it. And if you are a healthcare provider, we hope this gives you something to think about.
      </p>
    </div>

    {/* Discussion Questions */}
    <section className="mt-16 border-t border-border pt-10">
      <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
        Discussion Questions
      </h2>
      <ol className="space-y-4 text-lg text-foreground/85 leading-relaxed list-decimal list-inside">
        <li>
          How does the medicalization of body size, through tools like BMI, reinforce systems of power based on race, gender, and class? What would healthcare look like if weight were treated as neutral human variation?
        </li>
        <li>
          Marilyn Wann argues that "weight discrimination will continue to thrive so long as efforts to end it focus on changing people's bodies rather than changing people's minds." What kinds of interventions in medical education, public policy, or campus life could begin to shift this paradigm?
        </li>
      </ol>
    </section>
  </div>
);

export default About;
