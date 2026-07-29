export type ScholarshipCountry = "usa" | "japan";

export type ScholarshipGuide = {
  slug: string;
  country: ScholarshipCountry;
  university: string;
  title: string;
  summary: string;
  label: string;
  funding: string;
  duration: string;
  audience: string;
  realityCheck: string;
  highlights: string[];
  fit: string[];
  steps: { title: string; description: string }[];
  checklist: string[];
  cautions: string[];
  officialLinks: { label: string; href: string; description: string }[];
};

export const scholarshipGuides: ScholarshipGuide[] = [
  {
    slug: "cmu-computer-science-phd-funding",
    country: "usa",
    university: "Carnegie Mellon University",
    title: "CMU Computer Science PhD Funding Guide",
    summary:
      "How CMU CSD doctoral funding works, how to use the faculty directory for research fit, and how to prepare a focused application.",
    label: "Fully funded PhD pathway",
    funding:
      "Admitted Computer Science PhD students receive comprehensive financial support while in good standing.",
    duration: "Usually about 5 years",
    audience: "Domestic and international PhD applicants",
    realityCheck:
      "The faculty link is a research and tenure faculty directory—not a separate scholarship application. Funding is connected to admission to the Computer Science PhD program.",
    highlights: [
      "CMU states that admitted CSD doctoral students receive full financial support while they remain in good standing.",
      "The support package includes tuition, required fees and a monthly living stipend according to the official admissions information.",
      "A master's degree is not required before applying; a bachelor's degree or equivalent is required.",
      "The program is research-focused, based in Pittsburgh and admits for the fall term.",
    ],
    fit: [
      "You have a strong foundation in computer science, mathematics, engineering or a closely related field.",
      "Your research interests connect clearly with one or more active CSD research areas.",
      "You can show research potential through a thesis, publication, project, research assistantship or strong technical work.",
      "You want a full-time research doctorate rather than a course-only master's degree.",
    ],
    steps: [
      {
        title: "Map your research direction",
        description:
          "Choose two or three focused research themes. A precise direction makes it easier to evaluate faculty and explain your fit.",
      },
      {
        title: "Study the faculty directory",
        description:
          "Open relevant faculty profiles, then read their lab pages and recent papers. Shortlist genuine overlaps—not just famous names.",
      },
      {
        title: "Build evidence of fit",
        description:
          "Connect your past research, projects and technical skills to the questions you want to investigate at CMU.",
      },
      {
        title: "Prepare the application",
        description:
          "Follow the current SCS application requirements and deadline. Tailor your statement instead of sending a generic version.",
      },
      {
        title: "Evaluate the offer",
        description:
          "If admitted, read the written funding terms, good-standing conditions, insurance information and stipend details carefully.",
      },
    ],
    checklist: [
      "Focused statement of purpose",
      "Academic CV or résumé",
      "Transcripts requested by the application",
      "Strong academic or research recommendations",
      "Research/project evidence and publications, when applicable",
      "English-language test result if the current policy requires it",
    ],
    cautions: [
      "Do not describe the faculty directory itself as a scholarship.",
      "Mention faculty only when there is a defensible research connection.",
      "Do not assume master's programs receive the same funding as the PhD program.",
      "Deadlines and document rules can change each cycle—verify the official admissions page before submitting.",
    ],
    officialLinks: [
      {
        label: "CSD faculty directory",
        href: "https://csd.cmu.edu/people/research-tenure-faculty",
        description: "Find faculty and explore research alignment.",
      },
      {
        label: "CSD PhD financial support",
        href: "https://csd.cs.cmu.edu/phd-financial-support",
        description: "Read CMU's official doctoral funding explanation.",
      },
      {
        label: "SCS graduate admissions",
        href: "https://www.cs.cmu.edu/education/graduate-admissions",
        description: "Check the current application cycle, requirements and deadlines.",
      },
      {
        label: "Computer Science PhD",
        href: "https://www.csd.cs.cmu.edu/academics/doctoral/phd-in-computer-science",
        description: "Review the degree structure and academic expectations.",
      },
    ],
  },
  {
    slug: "uc-irvine-graduate-funding",
    country: "usa",
    university: "University of California, Irvine",
    title: "UC Irvine Graduate Funding & Application Guide",
    summary:
      "A practical route through the UCI application portal, program requirements and the funding questions every graduate applicant should ask.",
    label: "Graduate application & funding guide",
    funding:
      "Funding depends on the program and written admission offer; PhD support may combine fellowships, teaching assistantships and research assistantships.",
    duration: "Program-specific",
    audience: "Research master's and PhD applicants",
    realityCheck:
      "The provided UCI link opens the university's graduate application portal—not a standalone scholarship. You must first choose a program, then verify that program's funding policy and your offer terms.",
    highlights: [
      "UCI's general graduate minimum is a bachelor's degree or equivalent and a 3.0 undergraduate GPA, but programs may set higher standards.",
      "Requirements and deadlines are program-specific; Information and Computer Sciences programs accept fall admission applications.",
      "UCI reports that most PhD programs provide multi-year support, but the exact amount, source and conditions must be checked with the program and in the offer.",
      "Research master's, professional master's and PhD programs have different goals and funding patterns.",
    ],
    fit: [
      "You have identified the exact UCI graduate program that matches your academic and career goal.",
      "Your academic record meets both the Graduate Division minimum and any higher program requirement.",
      "For a research degree, you can explain your research direction and relevant preparation clearly.",
      "You have reviewed the realistic cost and funding position instead of assuming every admission is fully funded.",
    ],
    steps: [
      {
        title: "Choose the exact program",
        description:
          "Compare research MS, PhD and professional degrees. Their curriculum, admissions expectations and funding can be very different.",
      },
      {
        title: "Read the program page first",
        description:
          "Confirm its deadline, required documents, test policy, faculty fit expectations and whether financial support is normally offered.",
      },
      {
        title: "Prepare complete evidence",
        description:
          "Gather transcripts, recommendations, statement, CV and English-language proof when required. Use the current checklist in the portal.",
      },
      {
        title: "Submit through the portal",
        description:
          "Create one accurate application, upload readable documents and submit before the program deadline—ideally with time to resolve errors.",
      },
      {
        title: "Compare funding in writing",
        description:
          "Review tuition coverage, stipend, insurance, appointment duties, summer support, renewal conditions and total cost before accepting.",
      },
    ],
    checklist: [
      "Program-specific statement of purpose",
      "Personal history statement when requested",
      "Academic CV or résumé",
      "Unofficial transcripts for application review",
      "Usually three recommendation letters",
      "English-language evidence if required by current policy",
    ],
    cautions: [
      "An application portal link is not proof of a scholarship or funding guarantee.",
      "Do not use one generic statement for programs with different research goals.",
      "Application fees and waiver eligibility change; international applicants should verify current rules before applying.",
      "Always rely on the program page and written offer for the final funding decision.",
    ],
    officialLinks: [
      {
        label: "UCI graduate application",
        href: "https://apply.grad.uci.edu/apply/",
        description: "Open the official online application portal.",
      },
      {
        label: "Applying to UCI",
        href: "https://grad.uci.edu/admissions/applying-to-uci/",
        description: "Review university-wide requirements and application guidance.",
      },
      {
        label: "ICS graduate admissions",
        href: "https://ics.uci.edu/admissions-information-and-computer-science/graduate-admissions/",
        description: "Check computing program options and admissions details.",
      },
      {
        label: "ICS fellowships and funding",
        href: "https://ics.uci.edu/academics/fellowships-and-funding/",
        description: "Explore official funding opportunities and resources.",
      },
    ],
  },
];

export function getScholarshipGuide(slug: string) {
  return scholarshipGuides.find((guide) => guide.slug === slug);
}
