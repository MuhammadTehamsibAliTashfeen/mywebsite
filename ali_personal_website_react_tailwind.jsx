import { useMemo } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, GraduationCap, BookOpenText, BriefcaseBusiness, Wrench, Award, ExternalLink } from "lucide-react";

// Single‑file personal website built from your CV.
// TailwindCSS is available in this preview. No external setup required to view.
// Tip: Export this file into your project as `app/page.tsx` (Next.js) or any React entry.

const TAG = (text: string) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium shadow-sm">
    {text}
  </span>
);

const Section = ({ id, title, icon, children }: { id: string; title: string; icon: JSX.Element; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24">
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
      className="mb-8 flex items-center gap-2">
      <div className="rounded-xl border p-2 shadow-sm">{icon}</div>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
    </motion.div>
    <div className="space-y-4">{children}</div>
  </section>
);

export default function PortfolioSite() {
  const skills = useMemo(
    () => ({
      Languages: ["Python", "SQL", "Java"],
      "ML / Stats": [
        "Logistic Regression",
        "Regularization",
        "Tree Ensembles (XGBoost/LightGBM)",
        "Class Imbalance",
        "A/B Testing",
        "SHAP",
        "Cross-Validation",
        "Model Monitoring",
      ],
      "NLP / LLMs": [
        "Prompting",
        "RAG",
        "Function Calling / Tools",
        "Agentic orchestration (LangChain / LangGraph)",
        "OpenAI & HF Ecosystem",
      ],
      "Big Data / Distributed": [
        "PySpark (Spark SQL, DataFrames)",
        "Dask (DataFrame/Delayed)",
        "Parquet",
        "Delta-style patterns",
      ],
      "Cloud / MLOps": ["AWS (S3, IAM, ECR, EKS, Batch/EMR)", "Docker", "Kubernetes", "Makefiles", "GitHub Actions"],
      "Data Eng": ["Data modeling", "Feature stores (files/SQL)", "Airflow-style orchestration", "Logging/Observability"],
    }),
    []
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="text-base font-semibold tracking-tight">Muhammad Tehmasib Ali Tashfeen</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:underline" href="#skills">Skills</a>
            <a className="hover:underline" href="#experience">Experience</a>
            <a className="hover:underline" href="#projects">Projects</a>
            <a className="hover:underline" href="#education">Education</a>
            <a className="hover:underline" href="#certs">Certifications</a>
            <a className="hover:underline" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main id="top" className="mx-auto max-w-6xl px-4">
        <section className="grid gap-6 md:grid-cols-3 md:gap-10 py-10">
          <div className="md:col-span-2">
            <motion.h1 initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="text-3xl md:text-4xl font-bold tracking-tight">
              Data Scientist & AI Engineer
            </motion.h1>
            <p className="mt-3 text-gray-600 leading-relaxed">
              I build reliable data/ML systems and ship explainable models. Recent work spans large‑scale
              code/data processing with Dask & PySpark, model development (Logistic, LightGBM, XGBoost), and
              LLM‑powered static analysis agents using LangChain/LangGraph.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 font-medium shadow-sm">
                <Mail className="h-4 w-4" /> Contact
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 font-medium shadow-sm">
                <BookOpenText className="h-4 w-4" /> See Projects
              </a>
            </div>
          </div>
          <aside className="md:col-span-1">
            <div className="grid gap-3">
              <a href="mailto:mxalitashfeen@shockers.wichita.edu" className="flex items-center gap-3 rounded-2xl border p-3 shadow-sm hover:shadow">
                <Mail className="h-4 w-4" /> mxalitashfeen@shockers.wichita.edu
              </a>
              <a href="tel:+13162148670" className="flex items-center gap-3 rounded-2xl border p-3 shadow-sm hover:shadow">
                <Phone className="h-4 w-4" /> +1 (316) 214‑8670
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/muhammad-tehmasib-ali-tashfeen-b683831a5/" className="flex items-center gap-3 rounded-2xl border p-3 shadow-sm hover:shadow">
                <Linkedin className="h-4 w-4" /> LinkedIn <ExternalLink className="h-4 w-4 ml-auto" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/MuhammadTehamsibAliTashfeen" className="flex items-center gap-3 rounded-2xl border p-3 shadow-sm hover:shadow">
                <Github className="h-4 w-4" /> GitHub <ExternalLink className="h-4 w-4 ml-auto" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://scholar.google.com/citations?user=hlxSvmsAAAAJ&hl=en&oi=ao" className="flex items-center gap-3 rounded-2xl border p-3 shadow-sm hover:shadow">
                <GraduationCap className="h-4 w-4" /> Google Scholar <ExternalLink className="h-4 w-4 ml-auto" />
              </a>
            </div>
          </aside>
        </section>

        {/* Skills */}
        <Section id="skills" title="Technical Skills" icon={<Wrench className="h-5 w-5" />}>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(skills).map(([k, v]) => (
              <div key={k} className="rounded-2xl border p-4 shadow-sm">
                <h3 className="text-sm font-semibold tracking-tight mb-3">{k}</h3>
                <div className="flex flex-wrap gap-2">
                  {v.map((item) => (
                    <span key={item} className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience" icon={<BriefcaseBusiness className="h-5 w-5" />}>
          <div className="space-y-4">
            <ExpCard
              role="Graduate Research Assistant"
              org="Wichita State University — Software Analysis & Intelligence Laboratory"
              where="Wichita, KS"
              when="Aug 2023 – Present"
              bullets=[
                "Built Python pipelines for large‑scale code/data processing; used Dask to parallelize feature extraction across thousands of artifacts; exploratory PySpark jobs on Parquet.",
                "Trained Logistic Regression, XGBoost, and LightGBM prototypes; evaluated with stratified CV, PR‑AUC, and SHAP explainability.",
                "Containerized ML jobs with Docker and deployed demos to Kubernetes (local & EKS‑style); added structured logging for reproducibility.",
                "Developed LLM patterns (RAG + tool calling) for static‑analysis triage; implemented agentic flows with LangChain/LangGraph.",
              ]
            />
            <ExpCard
              role="Senior Consultant — Technology Risk"
              org="Ernst & Young Ford Rhodes"
              where="Islamabad, Pakistan"
              when="Mar 2023 – Jun 2023"
              bullets=[
                "Led cybersecurity audit for PTCL/Ufone covering data centers, network security, and SOC; identified vulnerabilities and compliance gaps.",
                "Assessed security controls and incident response mechanisms; aligned practices with standards and risk management best practices.",
              ]
            />
            <ExpCard
              role="Information Systems Auditor"
              org="The Bank of Punjab"
              where="Lahore, Pakistan"
              when="Nov 2020 – Mar 2023"
              bullets=[
                "Evaluated 100+ applications and security solutions to surface vulnerabilities and compliance issues.",
                "Produced quarterly IS assurance reports for the Board with executive‑ready risk heat maps and remediation timelines.",
              ]
            />
            <ExpCard
              role="Executive Engineer"
              org="Iron Bridge Systems"
              where="Lahore, Pakistan"
              when="Jan 2020 – Nov 2020"
              bullets=[
                "Implemented network & infrastructure security: Firewalls, SIEM, WAFs, AV — reducing incidents by ~90% at client sites.",
              ]
            />
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" icon={<BookOpenText className="h-5 w-5" />}>
          <ProjectCard
            name="Hospital Operations Analytics"
            stack={["Python", "Pandas", "Dask", "PySpark", "AWS S3", "Logistic Regression", "LightGBM", "XGBoost", "Kubernetes"]}
            bullets=[
              "Scaled EDA and feature engineering with Dask/PySpark; added window functions and schema validation.",
              "Trained Logistic/LightGBM/XGBoost models with imbalance handling; delivered SHAP explainability and model cards.",
            ]
          />
        </Section>

        {/* Education */}
        <Section id="education" title="Education" icon={<GraduationCap className="h-5 w-5" />}>
          <EduCard
            school="Wichita State University"
            degree="M.S. in Computer Science"
            where="Wichita, Kansas"
            when="Aug 2023 – May 2026"
          />
          <EduCard
            school="National University of Computer and Emerging Sciences"
            degree="B.E. in Electrical Engineering"
            where="Islamabad, Pakistan"
            when="Aug 2015 – May 2019"
          />
        </Section>

        {/* Certifications */}
        <Section id="certs" title="Certifications" icon={<Award className="h-5 w-5" />}>
          <ul className="space-y-2">
            <li className="rounded-2xl border p-4 shadow-sm">
              <p className="font-medium">EC‑Council: Certified Ethical Hacker (CEH v11)</p>
              <p className="text-sm text-gray-600">ID: ECC9765324108</p>
            </li>
            <li className="rounded-2xl border p-4 shadow-sm">
              <p className="font-medium">(ISC)² Certified in Cybersecurity</p>
              <p className="text-sm text-gray-600">ID: 914385</p>
            </li>
          </ul>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Get in touch" icon={<Mail className="h-5 w-5" />}>
          <div className="grid gap-3 md:grid-cols-2">
            <a href="mailto:mxalitashfeen@shockers.wichita.edu" className="flex items-center gap-3 rounded-2xl border p-4 shadow-sm hover:shadow">
              <Mail className="h-5 w-5" /> mxalitashfeen@shockers.wichita.edu
            </a>
            <a href="tel:+13162148670" className="flex items-center gap-3 rounded-2xl border p-4 shadow-sm hover:shadow">
              <Phone className="h-5 w-5" /> +1 (316) 214‑8670
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/muhammad-tehmasib-ali-tashfeen-b683831a5/" className="flex items-center gap-3 rounded-2xl border p-4 shadow-sm hover:shadow">
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/MuhammadTehamsibAliTashfeen" className="flex items-center gap-3 rounded-2xl border p-4 shadow-sm hover:shadow">
              <Github className="h-5 w-5" /> GitHub
            </a>
          </div>
        </Section>

        <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Muhammad Tehmasib Ali Tashfeen · Built with React + Tailwind</footer>
      </main>
    </div>
  );
}

function ExpCard({ role, org, where, when, bullets }: { role: string; org: string; where: string; when: string; bullets: string[] }) {
  return (
    <article className="rounded-2xl border p-4 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h3 className="text-sm font-semibold tracking-tight">{role}</h3>
        <p className="text-xs text-gray-600">{when}</p>
      </div>
      <p className="mt-1 text-sm text-gray-700">{org}</p>
      <p className="text-xs text-gray-500">{where}</p>
      <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
}

function EduCard({ school, degree, where, when }: { school: string; degree: string; where: string; when: string }) {
  return (
    <article className="rounded-2xl border p-4 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h3 className="text-sm font-semibold tracking-tight">{school}</h3>
        <p className="text-xs text-gray-600">{when}</p>
      </div>
      <p className="mt-1 text-sm">{degree}</p>
      <p className="text-xs text-gray-500">{where}</p>
    </article>
  );
}

function ProjectCard({ name, stack, bullets }: { name: string; stack: string[]; bullets: string[] }) {
  return (
    <article className="rounded-2xl border p-4 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h3 className="text-sm font-semibold tracking-tight">{name}</h3>
        <div className="flex flex-wrap gap-2">{stack.map((s) => TAG(s))}</div>
      </div>
      <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
