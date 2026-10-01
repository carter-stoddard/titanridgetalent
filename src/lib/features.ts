// Feature flags — flip to re-enable hidden surfaces.
// JOBS_VISIBLE controls every public-facing link and CTA that points to /jobs.
// The /jobs route itself stays mounted; only its entry points are hidden.
export const JOBS_VISIBLE = false;

// CAREERS_VISIBLE controls the /careers page (Avionté job board embed).
// The route stays mounted; only its navbar link + sitemap entry are gated.
export const CAREERS_VISIBLE = true;

// CAREERS_LISTINGS_VISIBLE controls the job listings on /careers (featured
// listing graphics + the Avionté widget). Off for now: the page shows a simple
// application form instead. Flip to true to bring the listings back.
export const CAREERS_LISTINGS_VISIBLE = false;

// CAREERS_FORM_VISIBLE controls the on-page application form on /careers.
// Off for now: the page asks candidates to email their resume instead
// (modeled on a simple "Email Resume" pattern). Flip to true to bring the form back.
export const CAREERS_FORM_VISIBLE = false;
