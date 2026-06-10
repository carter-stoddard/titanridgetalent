// Feature flags — flip to re-enable hidden surfaces.
// JOBS_VISIBLE controls every public-facing link and CTA that points to /jobs.
// The /jobs route itself stays mounted; only its entry points are hidden.
export const JOBS_VISIBLE = false;

// CAREERS_VISIBLE controls the /careers page (Avionté job board embed).
// The route stays mounted; only its navbar link + sitemap entry are gated.
export const CAREERS_VISIBLE = false;
