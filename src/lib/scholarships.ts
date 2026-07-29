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
  quickStart: string[];
  steps: {
    title: string;
    timing: string;
    description: string;
    actions: string[];
    readyWhen: string;
  }[];
  checklist: string[];
  afterSubmission: string[];
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
    quickStart: [
      "Open the official SCS Graduate Admissions page and write the current deadline in your calendar.",
      "Confirm that you are applying to the Computer Science PhD—not a master's program or a separate scholarship form.",
      "Create one folder with subfolders for transcript, CV, statement, recommendations, test results and research samples.",
      "Open the CSD faculty directory and save 3–5 faculty profiles whose current work genuinely matches your interests.",
    ],
    steps: [
      {
        title: "Confirm the program, deadline and funding model",
        timing: "Start 6–12 months before the deadline",
        description:
          "CMU CSD PhD admission and doctoral funding are considered together. There is no second scholarship form for the standard PhD support package.",
        actions: [
          "Open the official Graduate Admissions page and find the Computer Science PhD information.",
          "Note the application opening date, final deadline, application fee and current test requirements.",
          "Check that your bachelor's degree or equivalent will be complete before enrolment; a master's degree is not required.",
          "Read the financial-support page and record what it says about tuition, fees, stipend and good-standing conditions.",
        ],
        readyWhen:
          "You know the exact program name, deadline, required documents and that funding comes through PhD admission.",
      },
      {
        title: "Choose a focused research direction",
        timing: "Allow 1–2 weeks",
        description:
          "A clear research direction helps the committee understand why your background and CMU belong together.",
        actions: [
          "Write two or three research questions you genuinely want to study—not only broad labels such as AI.",
          "For each question, list your relevant courses, thesis, publications, projects or industry experience.",
          "Reduce the list to one main direction and one related secondary direction.",
          "Write a 3–4 sentence summary explaining the problem, why it matters and what experience prepares you for it.",
        ],
        readyWhen:
          "You can explain your proposed direction in one short paragraph without generic claims.",
      },
      {
        title: "Use the faculty directory correctly",
        timing: "Allow 2–4 weeks",
        description:
          "The supplied faculty page is for discovering research fit. It is not an application form.",
        actions: [
          "Filter faculty by the research areas connected to your direction.",
          "Open each relevant profile, laboratory page and two or three recent papers or projects.",
          "Create a table with faculty name, current topic, one relevant paper and how your experience connects.",
          "Shortlist 3–5 genuine matches. Contact a professor only if the program or faculty page invites contact.",
        ],
        readyWhen:
          "You have specific, recent evidence for every faculty member you plan to mention in your statement.",
      },
      {
        title: "Prepare your academic evidence",
        timing: "Allow 3–6 weeks",
        description:
          "Collect complete documents early so the final weeks can be used to improve the application.",
        actions: [
          "Create a concise academic CV highlighting research, publications, technical projects, awards and relevant employment.",
          "Obtain readable transcripts for every institution and follow the portal's translation rules for non-English documents.",
          "Prepare links or short summaries for publications, thesis work, code and major research projects where allowed.",
          "Take the required English-language test early enough for the result to arrive, if the current policy applies to you.",
        ],
        readyWhen:
          "Every requested document is readable, consistently named and saved in a portal-accepted format.",
      },
      {
        title: "Write a CMU-specific statement",
        timing: "Draft and revise for 2–4 weeks",
        description:
          "Connect past evidence, future research questions and CMU fit as one clear story.",
        actions: [
          "Open with the research problems that motivate you—not a long childhood story.",
          "Explain one or two strong experiences: the problem, your contribution, method, result and lesson.",
          "Show why CMU CSD fits by connecting your questions to specific current research and faculty.",
          "End with the capabilities and impact you hope to develop; edit to the current word limit.",
        ],
        readyWhen:
          "A reader can identify your direction, preparation, CMU fit and future goal after one reading.",
      },
      {
        title: "Arrange recommendation letters",
        timing: "Ask at least 4–6 weeks early",
        description:
          "Choose people who can evaluate your research ability, independence, technical depth and readiness for doctoral work.",
        actions: [
          "Use the number of recommenders requested in the current portal.",
          "Prefer thesis supervisors, research mentors or senior technical leads who know your work in detail.",
          "Send each person your CV, draft statement, deadline and a reminder of projects completed together.",
          "Enter their details early, monitor the portal and send one polite reminder before the deadline if needed.",
        ],
        readyWhen:
          "Every recommender has agreed, received your materials and knows the exact deadline.",
      },
      {
        title: "Complete and submit the application",
        timing: "Finish 5–7 days before the deadline",
        description:
          "Create the application from the official SCS admissions page and complete every section carefully.",
        actions: [
          "Enter your name exactly as it appears on your passport and complete personal, academic and program information.",
          "Add recommenders; upload the final CV, statement, transcripts and every currently required document.",
          "Check dates, grades, faculty names, filenames and required fields against the original records.",
          "Preview the application, save a copy, pay the applicable fee and submit before the official deadline.",
        ],
        readyWhen:
          "The portal shows successful submission and you have saved the confirmation email or application number.",
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
    afterSubmission: [
      "Check the applicant portal and email—including spam—regularly; do not send duplicate documents unless requested.",
      "Prepare a short explanation of your research, strongest project and faculty fit in case an interview or more information is requested.",
      "If admitted, read the written offer for tuition, stipend, health insurance, summer support, duration and good-standing conditions.",
      "Compare research fit, advisor options, funding and living costs before accepting; rely on the written offer, not assumptions.",
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
    quickStart: [
      "Choose one exact UCI degree and department first; do not begin with the general application portal.",
      "Open that program's official admissions page and record its deadline, required materials and funding information.",
      "Create a folder for statement of purpose, personal history statement, CV, transcripts, recommendations and test results.",
      "Make a simple budget showing the application cost and your minimum acceptable funding before you submit.",
    ],
    steps: [
      {
        title: "Choose the exact degree and department",
        timing: "Start 6–10 months before the deadline",
        description:
          "The UCI portal serves many graduate programs. First decide which specific program matches your goal.",
        actions: [
          "Compare PhD, research MS and professional master's options on the department website.",
          "Read the curriculum, research areas, expected background and career outcome for each option.",
          "If you need substantial funding, examine the PhD funding model carefully; never assume a master's has the same support.",
          "Write the exact degree name and department at the top of your application checklist.",
        ],
        readyWhen:
          "You can explain why this exact degree—not merely UCI as a university—fits your goal.",
      },
      {
        title: "Check eligibility, deadline and current rules",
        timing: "Do this before preparing documents",
        description:
          "Graduate Division sets university-wide minimums, while the selected program may require more. Read both pages.",
        actions: [
          "Confirm the bachelor's-degree or equivalent requirement and whether your undergraduate GPA meets the general 3.0 minimum.",
          "Check the program for a higher GPA expectation, prerequisite courses and its own final deadline.",
          "Read the current English-language requirement and exemption rules; schedule a test early if needed.",
          "Check whether GRE or supplemental material is required, optional or not accepted for your exact program.",
        ],
        readyWhen:
          "You meet the minimums and have written down every requirement from the program and Graduate Division pages.",
      },
      {
        title: "Understand the funding before applying",
        timing: "Research alongside program selection",
        description:
          "The application portal is not a scholarship application. Funding varies and may come from fellowships, teaching or research appointments.",
        actions: [
          "Read the department funding page and note what is normally available to new PhD, research MS or professional master's students.",
          "Record whether tuition, stipend, health insurance and summer funding are mentioned—and what is guaranteed versus competitive.",
          "Search the official fellowship list for opportunities you can apply for and note separate deadlines.",
          "Calculate tuition and living-cost exposure if funding is partial or unavailable.",
        ],
        readyWhen:
          "You know what funding may be available, what needs a separate application and what you may need to pay.",
      },
      {
        title: "Prepare the application documents",
        timing: "Allow 4–8 weeks",
        description:
          "Each document should answer a different question while supporting one consistent application story.",
        actions: [
          "Write a program-specific statement of purpose covering preparation, goals and why this program fits.",
          "If requested, use the personal history statement for background, barriers, service, leadership and perspective—not a duplicate statement.",
          "Prepare an academic CV and readable unofficial transcripts for every post-secondary institution listed.",
          "Prepare English test results and any writing sample, portfolio or supplemental response currently requested.",
        ],
        readyWhen:
          "Every document has a distinct purpose, follows the instructions and has been proofread by another person.",
      },
      {
        title: "Arrange recommendation letters",
        timing: "Ask at least 4–6 weeks early",
        description:
          "Recommendations should give specific evidence of your academic, research or technical ability.",
        actions: [
          "Confirm the current number in the program instructions; many graduate applications request three recommendations.",
          "Select people who supervised substantial academic, research or professional work.",
          "Send your CV, statements, program link, deadline and a short list of work they observed.",
          "Enter recommender information early and monitor completion instead of waiting until the final day.",
        ],
        readyWhen:
          "All recommenders have agreed and each can describe your work with concrete examples.",
      },
      {
        title: "Complete the UCI application portal",
        timing: "Begin at least 2–3 weeks early",
        description:
          "Create an account after you know the exact program. Complete the portal section by section with source documents beside you.",
        actions: [
          "Select the correct academic term, degree and program; a wrong selection can send the application to the wrong department.",
          "Complete personal, residency, academic-history and test-information sections using official records.",
          "Add recommenders and upload final statements, CV, transcripts and required supplemental files.",
          "Review the current application fee and fee-waiver rules before reaching payment.",
        ],
        readyWhen:
          "Every required section is complete and all uploaded files open correctly in preview.",
      },
      {
        title: "Final review, payment and submission",
        timing: "Submit 5–7 days before the deadline",
        description:
          "Treat final review as a separate task. Do not submit immediately after the final upload.",
        actions: [
          "Compare names, dates, degree titles, GPA entries and uploaded files against the original records.",
          "Confirm that statements name UCI and the correct program and contain no text from another application.",
          "Check recommendation status, preview the full application, pay the applicable fee and submit.",
          "Save the confirmation page, application ID and a PDF or screenshot of the submitted material.",
        ],
        readyWhen:
          "The portal confirms submission and you have a saved record of exactly what you submitted.",
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
    afterSubmission: [
      "Use the applicant portal to monitor status and respond promptly if UCI requests missing information.",
      "Do not mail official transcripts during application unless current instructions ask; follow post-admission instructions if admitted.",
      "If offered admission, identify which funding is guaranteed, which depends on an assistantship and which is only competitive.",
      "Compare tuition remission, stipend, insurance, workload, summer coverage, renewal rules and living costs before accepting.",
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
