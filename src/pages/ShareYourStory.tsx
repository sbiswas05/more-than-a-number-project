const ShareYourStory = () => (
  <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
    <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
      Share Your Story
    </h1>
    <p className="text-lg text-foreground/85 leading-relaxed mb-4">
      Have you ever felt judged, dismissed, or mistreated by a healthcare provider because of your 
      weight? You're not alone and your experience matters.
    </p>
    <p className="text-lg text-foreground/85 leading-relaxed mb-4">
      We're collecting anonymous stories from UMD students about weight bias in medical settings. 
      Whether it was a passing comment or a pattern of neglect, we want to hear from you.
    </p>
    <p className="text-sm text-muted-foreground mb-10">
      All responses are completely anonymous. Your story may be quoted on this site (without 
      identifying information) to help illustrate the scope of this issue.
    </p>

    {/* Google Form embed */}
    <div className="rounded-lg border border-border overflow-hidden bg-card">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSck3U37TLkomFZFSI_hxAYooefRtQyNeohocdwkym24jVfxJQ/viewform?embedded=true"
        width="100%"
        height="800"
        className="border-0 w-full"
        title="Share Your Story Survey"
      >
        Loading…
      </iframe>
    </div>
  </div>
);

export default ShareYourStory;
