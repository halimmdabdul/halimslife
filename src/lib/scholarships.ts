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
  reviewedAt?: string;
  reviewedOn?: string;
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
  {
    slug: "uci-software-engineering-phd-fall-2027",
    country: "usa",
    university: "University of California, Irvine",
    title: "UCI Software Engineering PhD: Fall 2027 Application Roadmap",
    summary:
      "Bangladesh থেকে Japan হয়ে UCI Software Engineering PhD-তে apply করার জন্য program selection, research fit, documents, tests এবং month-by-month submission plan.",
    label: "Personalized Fall 2027 PhD roadmap",
    funding:
      "ICS PhD support may include fellowships, teaching assistantships and research assistantships; the written offer is final.",
    duration: "Normative completion: 6 years",
    audience: "International applicant with a Japan-based master’s and software engineering experience",
    realityCheck:
      "Sam Malek-এর সঙ্গে Software Engineering research করতে চাইলে application-এ Software Engineering, Ph.D. program-ই select করতে হবে। তাঁর official page স্পষ্ট করে যে অন্য ICS PhD program-এ apply করলে তিনি application নাও দেখতে পারেন। এটি আলাদা scholarship form নয়—admission এবং funding একই PhD application-এর অংশ।",
    highlights: [
      "UCI Graduate Division-এর সাধারণ minimum হলো recognized institution থেকে bachelor’s degree বা equivalent এবং 3.0 cumulative undergraduate GPA; department আরও evidence চাইতে পারে।",
      "Software Engineering PhD research-first program; catalogue অনুযায়ী students শুরু থেকেই research topic, paper এবং publication-oriented work-এ যুক্ত হয়।",
      "ICS catalogue-এ Software Engineering PhD-এর GRE optional এবং GitHub, paper, writing sample বা portfolio-এর মতো additional evidence submit করতে উৎসাহ দেওয়া হয়েছে।",
      "International applicant fee বর্তমানে $155; recommendation letter অবশ্যই recommender নিজে portal-এ submit করবেন।",
      "Fall 2027 deadline এখনো live program page/portal-এ confirm করতে হবে—working target হিসেবে 1 December 2026-এর মধ্যে submit করুন, কোনো অনুমানকে official deadline ধরে নেবেন না।",
    ],
    fit: [
      "আপনার master’s research, thesis বা technical project থেকে independent research potential দেখানো যায়।",
      "C#/software development experience-কে software architecture, testing, reliability, security বা AI-assisted software engineering research question-এর সঙ্গে connect করতে পারেন।",
      "Sam Malek বা অন্য Informatics faculty-এর recent work-এর সঙ্গে evidence-based research match আছে।",
      "Academic record-এর দুর্বল অংশ থাকলে SOP, recommendations, research sample এবং project evidence দিয়ে context ও readiness দেখাতে পারবেন।",
    ],
    quickStart: [
      "এক পাতায় লিখুন: target program—Software Engineering, Ph.D.; target cycle—Fall 2027; primary faculty fit—Sam Malek।",
      "WHED-এ bachelor’s ও Shizuoka University program-এর sole language of instruction দেখে TOEFL/IELTS waiver হবে কি না যাচাই করুন।",
      "তিনজন recommender-এর shortlist করুন—অন্তত দুজন যেন academic বা research ability নিয়ে বিস্তারিত লিখতে পারেন।",
      "একটি application folder বানান: CV, SOP, personal history, transcripts, recommendations, English test এবং research sample।",
    ],
    steps: [
      {
        title: "Program এবং research direction final করুন",
        timing: "এখন থেকে August 2026",
        description:
          "Application-এর foundation হলো সঠিক program এবং narrow research question। broad ‘software engineering ভালো লাগে’ statement যথেষ্ট নয়।",
        actions: [
          "Software Engineering, Ph.D. catalogue এবং Department of Informatics-এর graduate program page পড়ুন।",
          "Sam Malek-এর recent work থেকে software analysis/testing, mobile computing, security, architecture বা accessible computing-এর relevant direction বাছুন।",
          "একটি primary এবং একটি related secondary research direction লিখুন।",
          "Master’s research, current C# work এবং strongest project-এর কোন evidence এই direction support করে তা map করুন।",
        ],
        readyWhen:
          "আপনি 4–5 বাক্যে research problem, preparation এবং UCI faculty fit পরিষ্কারভাবে ব্যাখ্যা করতে পারেন।",
      },
      {
        title: "Eligibility এবং English requirement যাচাই করুন",
        timing: "August 2026-এর মধ্যে",
        description:
          "Test waiver অনুমান করবেন না। UCI waiver নির্ধারণে WHED-এ institution-এর sole language of instruction ব্যবহার করে।",
        actions: [
          "Bachelor’s degree equivalency এবং undergraduate cumulative GPA 3.0 minimum-এর সঙ্গে নিজের record মিলিয়ে দেখুন।",
          "WHED-এ bachelor’s ও master’s institution/program-এর language listing পরীক্ষা করে screenshot বা note রাখুন।",
          "Waiver clear না হলে TOEFL বা IELTS Academic-এর জন্য early test date বুক করুন।",
          "Score deadline-এর সময় দুই বছরের কম পুরোনো থাকবে কি না এবং official score delivery time হিসাব করুন।",
        ],
        readyWhen:
          "আপনার confirmed waiver evidence আছে অথবা valid official test score সময়মতো UCI-তে পৌঁছানোর plan আছে।",
      },
      {
        title: "Academic documents এবং research evidence প্রস্তুত করুন",
        timing: "August–September 2026",
        description:
          "Bangladesh ও Japan-এর প্রতিটি higher-education institution-এর readable academic record এক জায়গায় প্রস্তুত রাখুন।",
        actions: [
          "Bachelor’s transcript/mark sheets, degree certificate, master’s transcript এবং degree certificate সংগ্রহ করুন।",
          "Non-English document-এর certified English translation তৈরি করুন; name, dates, courses, grades, credits এবং grading scale readable কি না দেখুন।",
          "Research-focused CV-তে education, thesis, publications, presentations, projects, Japan work experience এবং technical skills priority দিন।",
          "GitHub project, thesis summary, paper, technical report বা writing sample থেকে strongest 1–3টি supporting item বাছুন।",
        ],
        readyWhen:
          "সব documents clear PDF-এ আছে এবং CV ও evidence আপনার research direction support করে।",
      },
      {
        title: "Recommendation team lock করুন",
        timing: "September 2026",
        description:
          "PhD recommendation-এর quality পদবির চেয়ে বেশি গুরুত্বপূর্ণ—writer যেন concrete example দিয়ে research ability বোঝাতে পারেন।",
        actions: [
          "Shizuoka research supervisor, thesis/project-aware professor এবং relevant technical/research supervisor থেকে তিনজন final করুন।",
          "সম্ভব হলে অন্তত দুইটি letter academic বা research-focused রাখুন।",
          "প্রত্যেককে CV, research summary, draft SOP, program name, deadline এবং shared work-এর reminder পাঠান।",
          "Portal invitation পাওয়ার আগে institutional email ও willingness confirm করুন।",
        ],
        readyWhen:
          "তিনজন recommender সম্মতি দিয়েছেন এবং প্রত্যেকে কী evidence highlight করবেন তা জানেন।",
      },
      {
        title: "SOP এবং Personal History Statement লিখুন",
        timing: "September–October 2026",
        description:
          "SOP হবে academic/research argument; Personal History Statement হবে journey, context, resilience এবং community contribution-এর আলাদা narrative।",
        actions: [
          "SOP-তে background, master’s research, software engineering work, research question, UCI fit এবং PhD goal connect করুন।",
          "Faculty নামের সঙ্গে recent topic বা project-based fit দেখান; generic praise এড়িয়ে চলুন।",
          "Personal History Statement-এ Bangladesh-to-Japan journey, language/culture adaptation, challenges এবং UCI community contribution লিখুন।",
          "দুই statement-এ একই গল্প repeat না করে advisor বা strong reviewer দিয়ে অন্তত দুই round feedback নিন।",
        ],
        readyWhen:
          "একবার পড়েই reviewer আপনার research readiness, UCI fit এবং personal context আলাদা করে বুঝতে পারেন।",
      },
      {
        title: "Faculty outreach করুন—সংক্ষিপ্ত ও personalized",
        timing: "September–October 2026",
        description:
          "Professor contact application-এর বিকল্প নয়; এটি research fit যাচাই এবং concise introduction-এর সুযোগ।",
        actions: [
          "Sam Malek ও অন্য genuine faculty match-এর 2–3টি recent paper/project পড়ুন।",
          "Email-এ 1–2 বাক্যে background, 1টি specific research connection এবং Fall 2027 application intent লিখুন।",
          "Academic CV বা concise research summary link দিন; mass email বা generic template পাঠাবেন না।",
          "Reply না এলে application বন্ধ করবেন না—official portal-এ সময়মতো submit করুন।",
        ],
        readyWhen:
          "প্রতিটি email short, faculty-specific এবং আপনার application-এর research story-এর সঙ্গে consistent।",
      },
      {
        title: "Portal খুলে application complete করুন",
        timing: "Portal opening থেকে November 2026",
        description:
          "Portal live হলে exact term ও program select করে sections early complete করুন; final সপ্তাহ পর্যন্ত invitation বা upload বাকি রাখবেন না।",
        actions: [
          "Admission term হিসেবে Fall 2027 এবং program হিসেবে Software Engineering, Ph.D. select করুন।",
          "Personal, education, employment এবং research experience official records অনুযায়ী পূরণ করুন।",
          "Final CV, SOP, Personal History Statement, transcripts এবং allowed additional materials upload করুন।",
          "Recommenders-কে portal invitation পাঠান এবং English score UCI institution code 4859-এ match হয়েছে কি না track করুন।",
        ],
        readyWhen:
          "সব required field complete, files preview-তে readable এবং recommendation requests successfully sent।",
      },
      {
        title: "Final audit, payment এবং early submission",
        timing: "Target: 1 December 2026",
        description:
          "Official deadline program page-এ confirm করে অন্তত কয়েক দিন আগে submit করুন; $155 international fee payment ছাড়া application review complete নয়।",
        actions: [
          "Program name, term, faculty names, degree dates, grades এবং file versions source records-এর সঙ্গে মিলিয়ে দেখুন।",
          "SOP-তে অন্য university/program-এর নাম accidentally রয়ে গেছে কি না search করুন।",
          "Recommendation ও official test status দেখুন; missing item থাকলে polite reminder দিন।",
          "Application preview save করুন, applicable fee pay করে submit করুন এবং confirmation/application ID সংরক্ষণ করুন।",
        ],
        readyWhen:
          "Portal submitted দেখায়, payment complete এবং সব required materials deadline-এর আগে received বা matched।",
      },
    ],
    checklist: [
      "Software Engineering, Ph.D. program selected",
      "Fall 2027 official deadline re-verified",
      "Target faculty/lab এবং research direction identified",
      "Research-focused CV",
      "Statement of Purpose",
      "Personal History Statement",
      "Bachelor’s transcript/mark sheets ও degree certificate",
      "Master’s transcript ও degree certificate",
      "Certified English translations যেখানে প্রয়োজন",
      "Three confirmed recommenders",
      "TOEFL/IELTS official score অথবা confirmed WHED waiver",
      "GitHub/project/paper/research sample",
      "$155 international application fee",
    ],
    afterSubmission: [
      "Applicant portal ও email—spam folder-সহ—নিয়মিত check করুন এবং missing-item request দ্রুত address করুন।",
      "Research direction, master’s work, strongest project এবং faculty fit-এর 2–3 minute explanation interview-এর জন্য প্রস্তুত রাখুন।",
      "Admission offer এলে tuition, stipend, insurance, TA/RA workload, summer support, duration এবং renewal condition লিখিত offer থেকে যাচাই করুন।",
      "Advisor fit, funding guarantee এবং Irvine living cost তুলনা করে তারপর decision নিন।",
    ],
    cautions: [
      "Computer Science PhD accidentally select করবেন না যদি target Informatics/Software Engineering faculty হন।",
      "Fall 2027 deadline প্রকাশের আগে 15 December-কে confirmed deadline হিসেবে লিখবেন না।",
      "Japan থেকে master’s হলেই automatic English waiver হয় না; WHED listing final evidence।",
      "GRE optional হলেও দুর্বল বা irrelevant score শুধু file ভারী করার জন্য submit করবেন না।",
      "Personal History Statement-কে SOP-এর duplicate বানাবেন না।",
    ],
    officialLinks: [
      {
        label: "Software Engineering PhD catalogue",
        href: "https://catalogue.uci.edu/donaldbrenschoolofinformationandcomputersciences/departmentofinformatics/softwareengineering_phd/",
        description: "Program focus, curriculum, milestones and normative time review করুন।",
      },
      {
        label: "Department of Informatics graduate programs",
        href: "https://informatics.ics.uci.edu/graduate-programs-admissions/",
        description: "Correct research program এবং official application entry point দেখুন।",
      },
      {
        label: "Applying to UCI",
        href: "https://grad.uci.edu/admissions/applying-to-uci/",
        description: "Fee, university minimums, English policy এবং portal instructions verify করুন।",
      },
      {
        label: "ICS catalogue admissions & funding",
        href: "https://catalogue.uci.edu/donaldbrenschoolofinformationandcomputersciences/",
        description: "GRE, supplemental materials এবং PhD financial assistance policy দেখুন।",
      },
      {
        label: "Sam Malek faculty page",
        href: "https://ics.uci.edu/~malek/",
        description: "Current research areas এবং correct PhD program guidance পড়ুন।",
      },
      {
        label: "UCI graduate application portal",
        href: "https://apply.grad.uci.edu/apply/",
        description: "Fall 2027 cycle live হলে official application শুরু করুন।",
      },
    ],
  },
  {
    slug: "alabama-autmn-trustworthy-autonomy-phd-2027",
    country: "usa",
    university: "The University of Alabama",
    title: "Alabama AutMn Lab: Fully Funded Trustworthy Autonomy PhD Guide",
    summary:
      "Professor Bineet Ghosh-এর safe robotics, formal methods ও cyber-physical systems lab-এ Fall 2027 contact, research-fit এবং funded CS PhD application roadmap।",
    label: "Strongest active lead · Fully funded",
    funding:
      "The lab currently advertises fully funded PhD hiring; exact RA/TA FTE, stipend, summer support and duration must be confirmed in the written offer.",
    duration: "Usually 4–6 years · Fall 2027 target",
    audience:
      "Applicants with robotics, industrial automation, embedded systems, computer vision, CPS or reliable-software experience",
    realityCheck:
      "Professor Ghosh-এর current UA-hosted page সরাসরি fully funded PhD students hiring বলছে এবং CV email করতে বলছে। এটি strong active lead, কিন্তু professor-এর interest admission নয় এবং webpage-এ exact stipend নেই। Department application ও formal funding letter—দুটিই প্রয়োজন।",
    highlights: [
      "AutMn Lab trustworthy autonomy, formal methods, safe robotics, CPS, real-time/embedded systems ও control theory নিয়ে কাজ করে।",
      "Current NSF CPS project uncertainty-aware offline/online safety monitoring নিয়ে; listed period January 2026–December 2028 এবং award $364,155।",
      "Industrial robots, sensors, computer vision ও production software experience থেকে unusually direct research story তৈরি করা যায়।",
      "UA CS PhD-এর Fall funding-priority deadline December 31; late files review হতে পারে কিন্তু funding priority কমে যায়।",
      "GRE admission-এর জন্য required নয়, তবে funding decision-এ বিবেচিত হতে পারে এবং department strongly encourages it।",
    ],
    fit: [
      "Industrial robotics, PLC/sensors, computer vision বা safety-critical software নিয়ে hands-on evidence আছে।",
      "AI perception-এর সঙ্গে runtime monitoring, verification বা system uncertainty connect করতে চান।",
      "Formal methods-এ beginner হলেও mathematics, systems ও rigorous research শেখার readiness দেখাতে পারেন।",
      "Research-focused full-time PhD এবং funded assistantship চান।",
    ],
    quickStart: [
      "Professor Ghosh-কে tailored email, academic CV এবং one-page research-interest note পাঠান।",
      "Primary contact হিসেবে current institutional email bineet@ua.edu ব্যবহার করুন; lab contact autmnlab.cs@gmail.com-ও official page-এ listed।",
      "Transcript-এ programming, data structures, algorithms, database, OS, calculus, linear algebra ও probability/statistics courses mark করুন।",
      "December 31-এর অপেক্ষা না করে November 2026-এর মধ্যে complete application target করুন।",
    ],
    steps: [
      {
        title: "Research match নির্দিষ্ট করুন",
        timing: "এখনই · 3–5 দিন",
        description:
          "Generic robotics interest-এর বদলে আপনার production experience থেকে একটি safety/reliability research question তৈরি করুন।",
        actions: [
          "AutMn research ও recent papers থেকে sensor, timing, perception বা distributed-compute uncertainty—একটি focus বাছুন।",
          "একটি বাস্তব industrial failure/safety risk anonymisedভাবে বর্ণনা করুন।",
          "আপনার Python/C#/C, robotics, vision ও backend skill কোন research task-এ কাজে লাগবে map করুন।",
          "Formal verification expert দাবি না করে কেন এটি শিখতে চান তা লিখুন।",
        ],
        readyWhen:
          "আপনি 4–5 বাক্যে problem, evidence, proposed direction এবং AutMn fit explain করতে পারেন।",
      },
      {
        title: "Professor-কে high-signal email পাঠান",
        timing: "August–September 2026",
        description:
          "Short email-এ fit প্রমাণ করুন এবং Fall 2027 funded seat open আছে কি না সরাসরি জিজ্ঞাসা করুন।",
        actions: [
          "Subject-এ Fall 2027 PhD, আপনার strongest domain এবং CV attached লিখুন।",
          "Body-তে degree/publication, industrial systems experience এবং one specific AutMn project connection দিন।",
          "Academic CV ও এক পাতার research note attach করুন; certificates-এর bundle পাঠাবেন না।",
          "7–10 business days reply না এলে একবার polite follow-up করুন।",
        ],
        readyWhen:
          "Professor current availability সম্পর্কে reply দিয়েছেন অথবা আপনি documented contact attempt শেষ করেছেন।",
      },
      {
        title: "UA application শক্তিশালী করুন",
        timing: "September–November 2026",
        description:
          "Faculty interest থাকলেও Graduate School ও CS admissions file independently competitive হতে হবে।",
        actions: [
          "SOP-তে prior research, industrial problem, proposed trustworthy-autonomy direction ও UA fit connect করুন।",
          "CV, transcripts, recommendations ও English evidence current portal rules অনুযায়ী প্রস্তুত করুন।",
          "Core CS/math preparation কম স্পষ্ট হলে SOP-তে equivalent industrial programming evidence দিন।",
          "GRE optional হলেও funding profile materially improve করলে score submit করার সিদ্ধান্ত নিন।",
        ],
        readyWhen:
          "Application evidence research readiness, prerequisite preparation এবং advisor fit—তিনটিই দেখায়।",
      },
      {
        title: "Funding offer যাচাই করুন",
        timing: "Interview ও offer stage",
        description:
          "‘Fully funded’ label-এর exact financial meaning formal appointment letter থেকে বুঝুন।",
        actions: [
          "RA/TA type, 0.50 FTE কি না, annual stipend ও guaranteed years জিজ্ঞাসা করুন।",
          "Tuition, mandatory fees, single-person health insurance ও summer funding coverage লিখিতভাবে নিন।",
          "UA policy অনুযায়ী 0.50 FTE সাধারণত 100% tuition/eligible fees/insurance; 0.25 FTE সাধারণত 50%—offer-এর FTE মিলান।",
          "Uncovered international/student fees ও Tuscaloosa living cost দিয়ে net budget বানান।",
        ],
        readyWhen:
          "Written package দিয়ে year-round living ও uncovered cost realistically manage করা যায়।",
      },
    ],
    checklist: [
      "Tailored professor email", "Academic CV", "One-page research-interest note",
      "Degree certificates and transcripts", "CS and mathematics prerequisite map",
      "Statement of Purpose", "Recommendation letters", "English-proficiency evidence",
      "Optional GRE decision", "Complete application before December 31",
      "Written FTE, stipend, tuition, insurance and summer terms",
    ],
    afterSubmission: [
      "Professor/lab interview-এর জন্য one project, one failure case এবং one proposed method whiteboard-ready রাখুন।",
      "Portal, spam folder এবং recommenders-এর submission status monitor করুন।",
      "Verbal funding indication নয়—formal admission ও assistantship documents দুটোই পড়ুন।",
    ],
    cautions: [
      "Professor-এর positive reply university admission guarantee নয়।",
      "Fully funded post exact stipend বা summer coverage প্রকাশ করে না।",
      "Old UNC email-এর বদলে current UA institutional বা official lab contact ব্যবহার করুন।",
      "Formal-methods expertise না থাকলে exaggerate না করে transferable systems experience দেখান।",
    ],
    officialLinks: [
      { label: "Bineet Ghosh research and hiring page", href: "https://bineet.cs.ua.edu/index.html", description: "Current fully funded hiring notice ও research interests দেখুন।" },
      { label: "AutMn Trustworthy Autonomy Lab", href: "https://autmn.ua.edu/", description: "Projects, people ও recent research পড়ুন।" },
      { label: "UA graduate research positions", href: "https://cs.ua.edu/research/graduate-positions/", description: "Department-listed AutMn opening verify করুন।" },
      { label: "UA CS graduate admissions", href: "https://cs.ua.edu/graduate/", description: "PhD requirements, GRE guidance ও December 31 funding deadline দেখুন।" },
      { label: "UA assistantship benefits FAQ", href: "https://graduate.ua.edu/students/assistantship-faq/", description: "FTE অনুযায়ী tuition, insurance ও fee coverage বুঝুন।" },
    ],
  },
  {
    slug: "siu-mobile-distributed-systems-phd-2027",
    country: "usa",
    university: "Southern Illinois University Carbondale",
    title: "SIU Mobile Distributed Computing Lab: Funded PhD Guide",
    summary:
      "Professor Sayed Chhattan Shah-এর mobile distributed systems, edge computing, IoT ও healthcare digital twins research-এর contact-first PhD roadmap।",
    label: "Email first · Fall 2027 not confirmed",
    funding:
      "The published Fall 2026 lab position was fully funded; a new Fall 2027 funded seat and its exact package must be confirmed directly.",
    duration: "Usually 4–6 years · Fall entry",
    audience:
      "Applicants with distributed systems, cloud/edge, IoT, networking, backend systems, ML systems or healthcare technology experience",
    realityCheck:
      "MDC Lab positions page এখনও opportunity দেখালেও linked announcement Fall 2026-এর। August 2026-এ এটিকে confirmed Fall 2027 opening বলা যাবে না। প্রথম action হলো Professor Shah-কে CV, motivation letter ও research proposal দিয়ে 2027 availability জিজ্ঞাসা করা; positive reply-এর পর SIU application করুন।",
    highlights: [
      "Professor Shah SIU Assistant Professor এবং Mobile Distributed Computing Lab-এর Director; official email sayedchhattan.shah@siu.edu।",
      "Current work private edge-cloud middleware, dynamic compute/network resource management, healthcare digital twins এবং AI/IoT systems নিয়ে।",
      "Recent lab publications include 2026 healthcare IoT intrusion detection, colorectal digital twin, NephroTwin এবং AI at the Edge work।",
      "Published position baseline: related master's with at least 3.25/4.0, GRE required with minimum 300, and English evidence for international applicants।",
      "SIU Computer Science PhD Fall deadline December 31; program requires GRE and normally a relevant master's, with exceptional bachelor's-only admission possible।",
    ],
    fit: [
      "Cloud/backend/distributed systems বা resource scheduling নিয়ে implementation experience আছে।",
      "IoT, mobile/wireless, edge computing বা fault-tolerant infrastructure-এ research করতে চান।",
      "Healthcare systems experienceকে digital-twin data platform বা edge analytics-এর সঙ্গে connect করতে পারেন।",
      "Master's GPA, GRE এবং English requirements সময়মতো পূরণ করতে পারবেন।",
    ],
    quickStart: [
      "Fall 2027 seat ও funding available কি না Professor Shah-কে official SIU email-এ জিজ্ঞাসা করুন।",
      "CV-এর সঙ্গে 1-page motivation letter এবং 2-page focused research proposal প্রস্তুত করুন।",
      "GRE 300 floor-কে target নয়—competitive score-এর জন্য দ্রুত diagnostic test নিন।",
      "December 31-এর অন্তত 4 সপ্তাহ আগে portal submission complete করার plan করুন।",
    ],
    steps: [
      {
        title: "MDC Lab-এর জন্য research direction বাছুন",
        timing: "এখনই · 1 সপ্তাহ",
        description:
          "Edge systems এবং healthcare digital twins—দুটোই broad; একটি primary systems question বাছাই করুন।",
        actions: [
          "Private edge cloud project-এর workload placement, network adaptation, resilience বা resource orchestration থেকে একটি problem নিন।",
          "Healthcare direction হলে NephroTwin/colorectal twin-এ data ingestion, privacy, fault tolerance বা edge inference focus করুন।",
          "নিজের software/backend/IoT evidence proposal-এর method-এর সঙ্গে map করুন।",
          "Lab-এর recent publications থেকে 3টি directly relevant source cite করুন।",
        ],
        readyWhen:
          "Research proposal mobile distributed systems-এর core contribution পরিষ্কার করে, শুধু healthcare application নয়।",
      },
      {
        title: "2027 availability confirm করুন",
        timing: "Application fee দেওয়ার আগে",
        description:
          "Fall 2026 advertisement stale হতে পারে; written confirmation ছাড়া opening active ধরে নেবেন না।",
        actions: [
          "Email subject-এ Prospective Fall 2027 PhD এবং chosen topic লিখুন।",
          "CV, motivation letter ও research proposal attach করুন—position notice-এর requested package অনুসরণ করে।",
          "Email-এ funded seat, preferred start term এবং application timing সরাসরি জিজ্ঞাসা করুন।",
          "7–10 business days পরে একবার follow-up; reply না এলে SIU-কে backup application হিসেবে মূল্যায়ন করুন।",
        ],
        readyWhen:
          "Professor Fall 2027 supervision/funding status লিখিতভাবে জানিয়েছেন।",
      },
      {
        title: "Tests ও SIU application complete করুন",
        timing: "September–November 2026",
        description:
          "Lab shortlist-এর পর university PhD eligibility ও deadline independently পূরণ করতে হবে।",
        actions: [
          "Relevant master's এবং minimum 3.25 GPA evidence official transcript-এ verify করুন।",
          "GRE এবং TOEFL/IELTS score valid ও official delivery-ready রাখুন; SIU general English baseline TOEFL iBT 80 বা IELTS 6.5।",
          "SOP, publications, work experience ও three strong recommendations দিয়ে scholarly potential দেখান।",
          "$65 application fee এবং December 31 deadline current portal-এ পুনরায় check করুন।",
        ],
        readyWhen:
          "Complete PhD file deadline-এর আগে submitted এবং scores/references received।",
      },
      {
        title: "Funding package audit করুন",
        timing: "Selection ও offer stage",
        description:
          "Department assistantship baseline ও specific MDC offer একই নাও হতে পারে।",
        actions: [
          "RA versus TA, appointment percentage, annual stipend এবং number of funded years লিখিতভাবে নিন।",
          "Tuition waiver-এর বাইরে fees, health insurance ও summer months cover হয় কি না জিজ্ঞাসা করুন।",
          "Department page-এর generic half-time assistantship figureকে offer guarantee হিসেবে ব্যবহার করবেন না।",
          "Carbondale living cost ও one-time relocation/visa expenses দিয়ে net budget বানান।",
        ],
        readyWhen:
          "Formal offer-এ stipend, waiver, duties, renewal এবং uncovered costs clear।",
      },
    ],
    checklist: [
      "Fall 2027 availability email", "Academic CV", "Motivation letter", "Focused research proposal",
      "Relevant master's and 3.25 GPA evidence", "GRE score", "TOEFL/IELTS evidence",
      "Degree and transcripts", "Statement of Purpose", "Recommendation letters",
      "Publications/work samples", "Complete SIU application by December 31", "Written funding terms",
    ],
    afterSubmission: [
      "Interview-এ distributed-system trade-offs, prior implementation এবং proposal methodology defend করুন।",
      "Professor reply ও Graduate School application status আলাদাভাবে track করুন।",
      "Offer পেলে summer support, health insurance ও student fees explicitly clarify করুন।",
    ],
    cautions: [
      "Public announcement Fall 2026-এর; Fall 2027 recruitment confirmed নয়।",
      "Positions page live থাকা মানেই seat এখনও vacant নয়।",
      "Published minimum GRE 300 eligibility floor; competitive selection score/profile আরও শক্ত হতে পারে।",
      "Lab contact admission এবং formal assistantship offer replace করে না।",
    ],
    officialLinks: [
      { label: "SIU faculty profile", href: "https://faculty.siu.edu/profiles/q-s/shah-sayed-chhattan.php", description: "Title, official email ও research areas verify করুন।" },
      { label: "MDC Lab", href: "https://mdclab.info/", description: "Lab topics, current research ও contact দেখুন।" },
      { label: "MDC Lab positions", href: "https://mdclab.info/positions.php", description: "Position notice live কি না check করুন; intake year অবশ্যই পড়ুন।" },
      { label: "MDC current research", href: "https://mdclab.info/research.php", description: "Private edge cloud ও healthcare digital-twin projects পড়ুন।" },
      { label: "SIU CS graduate catalog", href: "https://gradcatalog.siu.edu/programs/cs/", description: "PhD degree, GPA, GRE ও selection requirements দেখুন।" },
      { label: "SIU graduate programs", href: "https://siu.edu/admissions/graduate/academics/", description: "Current fee, test ও December 31 deadline verify করুন।" },
    ],
  },
  {
    slug: "umbc-haibin-zhang-cloud-security-phd-2027",
    country: "usa",
    university: "University of Maryland, Baltimore County",
    title: "UMBC Cloud Security & Distributed Systems: Funded PhD Guide",
    summary:
      "Professor Haibin Zhang-এর multiple funded PhD notice থেকে secure cloud, fault-tolerant distributed systems ও CPS security-focused Fall 2027 application plan।",
    label: "Public opening · Date must be confirmed",
    funding:
      "Professor Zhang advertises multiple fully funded PhD openings; project, stipend, duration and Fall 2027 availability require written confirmation.",
    duration: "Usually 4–6 years · Fall 2027 target",
    audience:
      "Applicants with cloud/backend infrastructure, distributed systems, cybersecurity, cryptography, blockchain or cyber-physical systems experience",
    realityCheck:
      "Professor Zhang-এর official UMBC-hosted page multiple fully funded PhD openings বলে, কিন্তু notice-এর publication date নেই। তাই opportunityটি credible public lead হলেও Fall 2027 seat নিশ্চিত নয়। Email confirmation, professor interview এবং complete UMBC PhD application—সবগুলো আলাদা ধাপ।",
    highlights: [
      "Possible projects include cloud computing/security, OpenStack Keystone/Nova/Neutron, permissioned blockchain এবং CPS privacy/fault tolerance।",
      "Professor-এর research cloud security, applied cryptography, privacy, Byzantine fault tolerance ও distributed systems জুড়ে।",
      "BChain, CBFT, CP-BFT ও BEAT-এর মতো BFT systems/protocols তাঁর research portfolio-র অংশ।",
      "Fall international/funding deadline January 7; complete application-এর জন্য three recommendations, SOP, transcripts, GRE এবং English evidence প্রয়োজন।",
      "Departmental financial support চাইলে GRE নেওয়া উচিত/required; current FAQ English minimum TOEFL 80, IELTS 6.5 বা Duolingo 105 বলে।",
    ],
    fit: [
      "Cloud or enterprise backend systems-এর reliability/security problem নিয়ে কাজ করেছেন।",
      "Distributed consensus, fault tolerance, secure storage বা infrastructure security শিখতে চান।",
      "Industrial/healthcare CPS থেকে privacy ও resilient backend research story তৈরি করতে পারেন।",
      "January 7-এর আগে GRE, English score ও complete application প্রস্তুত করতে পারবেন।",
    ],
    quickStart: [
      "Professor Zhang-কে hbzhang@umbc.edu-তে Fall 2027 seat ও project availability জিজ্ঞাসা করুন।",
      "Blockchain-কে default topic না বানিয়ে secure/fault-tolerant cloud infrastructure-এর strongest evidence lead করুন।",
      "GRE funding-এর জন্য গুরুত্বপূর্ণ—test date ও score-delivery buffer এখনই ঠিক করুন।",
      "January 7 deadline-এর জন্য December 2026-এর মধ্যে all recommendations complete target করুন।",
    ],
    steps: [
      {
        title: "Research story narrow করুন",
        timing: "এখনই · 1 সপ্তাহ",
        description:
          "Cloud security, blockchain ও CPS—সব এক email-এ নয়; একটি coherent systems-security direction বাছুন।",
        actions: [
          "নিজের backend/cloud/industrial system থেকে একটি threat, fault বা trust problem নির্ধারণ করুন।",
          "Professor Zhang-এর relevant BFT/cloud/CPS work পড়ুন এবং দুইটি concrete connection লিখুন।",
          "Target direction হিসেবে secure and fault-tolerant cloud/backend infrastructure বিবেচনা করুন।",
          "Proposal sketch-এ threat model, system assumptions, method ও evaluation plan দিন।",
        ],
        readyWhen:
          "এক paragraph-এ problem, prior evidence এবং Zhang-group fit স্পষ্ট।",
      },
      {
        title: "Funded opening confirm করুন",
        timing: "August–September 2026",
        description:
          "Date-less web notice থেকে Fall 2027 funding infer না করে professor-এর current reply নিন।",
        actions: [
          "Concise subject-এ Fall 2027 PhD এবং secure distributed systems topic লিখুন।",
          "CV, publications/technical work এবং 1-page research-interest note attach করুন।",
          "Current funded projects, expected student background এবং Fall 2027 availability জিজ্ঞাসা করুন।",
          "Response-এ application করার নির্দেশ থাকলে reply/meeting notes save করুন।",
        ],
        readyWhen:
          "Professor current project/seat সম্পর্কে usable guidance দিয়েছেন।",
      },
      {
        title: "UMBC requirements complete করুন",
        timing: "September–December 2026",
        description:
          "Funded PhD applicant হিসেবে GRE waiver assume করা নিরাপদ নয়।",
        actions: [
          "GRE General এবং TOEFL/IELTS/Duolingo current minimum ও score validity verify করুন।",
          "Official transcripts, three recommendations, SOP ও CV portal-ready করুন।",
          "SOP-তে systems preparation, publications/industry evidence এবং UMBC faculty fit দিন।",
          "January 7-এর কয়েক দিন আগে complete status verify করুন—upload করাই complete নয়।",
        ],
        readyWhen:
          "Portal file, scores এবং তিন recommendation deadline-এর আগে received।",
      },
      {
        title: "Interview ও funding terms যাচাই করুন",
        timing: "After contact/application",
        description:
          "Multiple openings-এর প্রতিটি project ও funding source-এর conditions ভিন্ন হতে পারে।",
        actions: [
          "Distributed systems fundamentals, fault model, security assumptions ও prior project architecture revise করুন।",
          "Interview-এ নিজের contribution এবং failed/changed design decisions explain করুন।",
          "Offer-এ RA/TA source, stipend, tuition remission, health insurance, summer ও renewal conditions পড়ুন।",
          "Baltimore-area living cost দিয়ে net monthly budget তৈরি করুন।",
        ],
        readyWhen:
          "Research supervision এবং full financial package দুইটিই written documents-এ acceptable।",
      },
    ],
    checklist: [
      "Fall 2027 availability confirmation", "Tailored professor email", "Academic CV",
      "Research-interest note", "GRE score for funding consideration", "English score",
      "Official transcripts", "Statement of Purpose", "Three recommendation letters",
      "Publications or technical portfolio", "Complete application by January 7", "Written funding package",
    ],
    afterSubmission: [
      "Professor communication, department review এবং Graduate School portal আলাদা করে monitor করুন।",
      "Interview-এর আগে one systems paper critique এবং one proposed experiment প্রস্তুত রাখুন।",
      "Funding offer-এ summer ও health-insurance coverage missing হলে acceptance-এর আগে জিজ্ঞাসা করুন।",
    ],
    cautions: [
      "Opening notice-এ date নেই; Fall 2027 availability email-এ confirm করতে হবে।",
      "Professor interest admission বা assistantship guarantee নয়।",
      "Funded applicant হিসেবে GRE waiver ধরে application করবেন না।",
      "একই নামের Google Scholar profile verify না হলে official webpage/CV publication list ব্যবহার করুন।",
    ],
    officialLinks: [
      { label: "Haibin Zhang academic page", href: "https://userpages.cs.umbc.edu/hbzhang/", description: "Multiple funded openings, email ও research projects দেখুন।" },
      { label: "UMBC Computer Science PhD", href: "https://umbc.edu/academics/programs/graduate/computer-science-electrical-engineering/computer-science-phd/", description: "January 7 deadline ও degree requirements verify করুন।" },
      { label: "UMBC CSEE graduate programs", href: "https://www.csee.umbc.edu/graduate/", description: "Documents, assistantships ও faculty-contact guidance পড়ুন।" },
      { label: "UMBC CS graduate FAQ", href: "https://www.csee.umbc.edu/comp-sci-grad-faq/", description: "GRE-for-funding এবং English minimum requirements দেখুন।" },
    ],
  },
  {
    slug: "tsukuba-aisip-mext-2027",
    country: "japan",
    university: "University of Tsukuba",
    title: "Tsukuba AISIP + MEXT: April 2027 Application Guide",
    summary:
      "Computer Science master’s applicants-এর জন্য AI Social Implementation program, MEXT University Recommendation, supervisor consent এবং August–October 2026 application process.",
    label: "Urgent · MEXT university recommendation",
    funding:
      "Limited candidates receive MEXT-equivalent support; AY2027 benefits remain subject to MEXT’s final announcement.",
    duration: "2 years · April 2027–March 2029",
    audience: "International CS graduates pursuing AI, optimization, simulation or social implementation",
    realityCheck:
      "AISIP admission এবং MEXT nomination একই selection path-এ যুক্ত, কিন্তু scholarship guaranteed নয়। Limited applicants-কে MEXT candidate হিসেবে nominate করা হবে; অন্য successful applicants privately financed student হিসেবে ভর্তি হতে পারবেন। বর্তমানে Japan-এ বসবাস করলে ‘newly coming to Japan’ ও নতুন Student visa নিয়ে re-entry requirement আপনার ক্ষেত্রে প্রযোজ্য কি না, আবেদন করার আগেই admissions office থেকে লিখিতভাবে নিশ্চিত করা জরুরি।",
    highlights: [
      "Eligibility screening কেবল standard academic qualification না মিললে; deadline 21 August 2026, 3:00 PM JST।",
      "সব applicant-এর prescreening বাধ্যতামূলক; deadline 28 August 2026, 3:00 PM JST।",
      "Entrance-exam electronic documents 18 September 2026 এবং originals 9 October 2026-এর মধ্যে পৌঁছাতে হবে।",
      "Online oral examination 19–23 October 2026; university result 27 November এবং final MEXT result early March 2027।",
      "Application-এর আগে prospective supervisor consent এবং তাঁর মাধ্যমে Security Export Control reference number নিতে হবে।",
      "MEXT GPA minimum 2.30/3.00; AY2027 benefit ও final conditions December 2026-এর MEXT announcement অনুযায়ী বদলাতে পারে।",
    ],
    fit: [
      "আপনার bachelor’s degree বা March 2027-এর মধ্যে expected degreeসহ সাধারণত 16 years of education আছে।",
      "AI, machine learning, optimization, simulation, artificial life বা technology-এর social implementation নিয়ে focused research question আছে।",
      "English-এর চার skill-এ CEFR B2 evidence, English-medium degree proof, অথবা accepted Japanese proficiency route পূরণ করতে পারেন।",
      "আপনি supervisor-এর research পড়ে personalized contact করতে এবং strict multi-stage deadline অনুসরণ করতে প্রস্তুত।",
    ],
    quickStart: [
      "নিজের MEXT conversion GPA official formula দিয়ে হিসাব করে 2.30/3.00 minimum মিলিয়ে নিন।",
      "Claus Aranhaসহ 2–3টি genuine faculty match-এর recent research পড়ে একটি primary supervisor বাছুন।",
      "বর্তমান Japan residence/visa status লিখে AISIP ও admissions office-কে eligibility confirmation email করুন।",
      "28 August prescreening-এর documents এবং Security Export Control reference number-এর জন্য আজই supervisor contact শুরু করুন।",
    ],
    steps: [
      {
        title: "Scholarship ও residence eligibility audit করুন",
        timing: "Immediately · before supervisor outreach",
        description:
          "Academic eligibility-এর পাশাপাশি MEXT nationality, age, GPA, arrival এবং visa conditions আলাদাভাবে মিলাতে হবে।",
        actions: [
          "Nationality, 2 April 1992-or-later age rule, 16-year education এবং degree completion date যাচাই করুন।",
          "Complete transcript ব্যবহার করে MEXT 3-point formula-তে GPA calculate করুন।",
          "Current residence status, Japan arrival history এবং April 2027-এ new Student visa/re-entry feasibility লিখে রাখুন।",
          "Japan-resident applicant হিসেবে eligibility ambiguous হলে sysinfo.admission@un.tsukuba.ac.jp ও aisip@cs.tsukuba.ac.jp-এ একই email-এ প্রশ্ন করুন।",
        ],
        readyWhen:
          "সব objective condition মিলেছে এবং residence/visa ambiguity-এর written clarification আছে।",
      },
      {
        title: "Prospective supervisor-এর consent নিন",
        timing: "Now · do not wait for August 28",
        description:
          "Supervisor consent ছাড়া application এগোবে না; Security Export Control reference number-ও supervisor-এর মাধ্যমে আসে।",
        actions: [
          "Faculty directory থেকে research match যাচাই করে recent 2–3টি paper/project পড়ুন।",
          "Claus Aranha-এর evolutionary computation, artificial life, optimization ও multi-agent simulation work আপনার background-এর সঙ্গে মিললে personalized email করুন।",
          "Email-এ academic background, technical skills, proposed problem, AISIP/MEXT intent এবং CV/research summary দিন।",
          "Consent পেলে Security Export Control reference number issue করার অনুরোধ করুন; এটি পেতে সময় লাগতে পারে।",
        ],
        readyWhen:
          "একজন faculty member prospective supervisor হতে সম্মত এবং reference-number process শুরু হয়েছে।",
      },
      {
        title: "Eligibility screening করুন—শুধু প্রয়োজন হলে",
        timing: "Deadline · 21 August 2026, 3:00 PM JST",
        description:
          "Bachelor’s degree/standard academic route পূরণ না করলে equivalent qualification যাচাইয়ের জন্য এই আলাদা step লাগে।",
        actions: [
          "Official guideline-এর academic-background routes দেখে screening প্রয়োজন কি না নির্ধারণ করুন।",
          "প্রয়োজন হলে application form, CV, degree/graduation proof, transcript এবং requested research document প্রস্তুত করুন।",
          "Deadline-এর আগে electronic files email করুন এবং eligibility question থাকলে একই deadline-এর আগে জিজ্ঞেস করুন।",
        ],
        readyWhen:
          "Screening প্রয়োজন নয় বলে নিশ্চিত অথবা university eligibility approval দিয়েছে।",
      },
      {
        title: "Mandatory prescreening submit করুন",
        timing: "Deadline · 28 August 2026, 3:00 PM JST",
        description:
          "সব applicant-কে এই stage pass করতে হবে; entrance-exam application কেবল prescreening successful হলে করা যায়।",
        actions: [
          "B-1 cover/calculation sheet-এ MEXT GPA formula সঠিকভাবে পূরণ করুন।",
          "Most recent qualifying degree-এর complete transcript এবং transfer-credit transcript থাকলে সেটিও দিন।",
          "CEFR B2 test evidence বা official English-medium/Japanese-medium instruction certificate যোগ করুন।",
          "Japanese/English ছাড়া documents-এর official translation এবং grading-scale explanation attach করুন।",
        ],
        readyWhen:
          "Complete prescreening package deadline-এর আগে delivered এবং receipt/confirmation সংরক্ষিত।",
      },
      {
        title: "Entrance-exam application complete করুন",
        timing: "18 September–9 October 2026",
        description:
          "Prescreening pass করার পরে electronic ও original documents-এর দুটি আলাদা deadline আছে।",
        actions: [
          "AISIP application form, checklist, field of study/research plan এবং সব requested certificates final করুন।",
          "Electronic files 18 September 2026, 3:00 PM JST-এর মধ্যে submit করুন।",
          "Required originals tracked delivery-তে পাঠিয়ে 9 October 2026, 5:00 PM JST-এর মধ্যে পৌঁছানো নিশ্চিত করুন।",
          "Tracking, sent files এবং final application-এর complete copy রাখুন।",
        ],
        readyWhen:
          "Electronic submission accepted এবং originals-এর delivery tracking confirmed।",
      },
      {
        title: "Oral exam ও final MEXT stage প্রস্তুত করুন",
        timing: "19 October 2026–early March 2027",
        description:
          "Admission decision documents ও online oral examination-এর উপর হবে; nomination পেলেও final approval MEXT দেয়।",
        actions: [
          "Research problem, literature gap, method, expected contribution ও supervisor fit-এর concise presentation প্রস্তুত করুন।",
          "19–23 October oral-exam window পুরোটা available রাখুন এবং camera/audio/time-zone test করুন।",
          "27 November university result দেখুন; MEXT candidate হলে additional scholarship documents দ্রুত submit করুন।",
          "Early March final MEXT result ও enrollment procedure complete করে 1 April 2027 start-এর প্রস্তুতি নিন।",
        ],
        readyWhen:
          "Admission/enrollment complete এবং scholarship status official written notice-এ confirmed।",
      },
    ],
    checklist: [
      "Prospective supervisor’s written consent",
      "Security Export Control reference number",
      "MEXT GPA calculation sheet · minimum 2.30/3.00",
      "CV and qualifying degree certificate",
      "Complete transcript and grading-scale evidence",
      "CEFR B2/JLPT N2 or medium-of-instruction proof",
      "Official translations where required",
      "Field of Study and Research Plan",
      "Electronic submission receipt",
      "Tracked original-document delivery",
      "Current-residence and Student-visa eligibility confirmation",
    ],
    afterSubmission: [
      "Prescreening, entrance-exam এবং scholarship messages-এর জন্য email ও spam folder প্রতিদিন check করুন।",
      "Original documents পৌঁছেছে কি না carrier tracking ও university confirmation দিয়ে verify করুন।",
      "MEXT nomination না পেলেও privately financed admission নিতে পারবেন কি না budget ও alternative funding দেখে সিদ্ধান্ত নিন।",
      "Final AY2027 MEXT benefits প্রকাশ হলে stipend, airfare, tuition এবং visa conditions নতুন guideline-এর সঙ্গে মিলিয়ে নিন।",
    ],
    cautions: [
      "Supervisor consent এবং Security Export Control reference number ছাড়া শেষ সপ্তাহে application complete করা বাস্তবসম্মত নয়।",
      "Japan-এ বর্তমানে থাকা applicant-এর জন্য new-entry/Student-visa rule critical—নিজে থেকে eligibility assume করবেন না।",
      "Limited nomination মানে admission পেলেই MEXT scholarship নিশ্চিত নয়।",
      "Deadline JST-তে এবং strictly enforced; carrier delay হলেও special evidence লাগতে পারে।",
      "AY2027 scholarship amount বা benefit provisional wording ছাড়া publish করবেন না।",
    ],
    officialLinks: [
      {
        label: "AISIP official page",
        href: "https://www.cs.tsukuba.ac.jp/aisip/",
        description: "Current schedule, selection stages, contact addresses এবং updates দেখুন।",
      },
      {
        label: "AY2027 AISIP application guidelines",
        href: "https://www.sie.tsukuba.ac.jp/eng/wp-content/uploads/AISIP-2027-Application-Guidelines3.pdf",
        description: "Eligibility, documents, language, visa এবং MEXT GPA rules পড়ুন।",
      },
      {
        label: "Systems and Information Engineering admissions",
        href: "https://www.sie.tsukuba.ac.jp/eng/exam/applicants/entra",
        description: "Forms, deadlines, faculty directories ও official notices নিন।",
      },
      {
        label: "Claus Aranha research page",
        href: "https://conclave.cs.tsukuba.ac.jp/",
        description: "Evolutionary computation, artificial life, optimization ও supervision fit যাচাই করুন।",
      },
    ],
  },
  {
    slug: "iuj-masters-scholarships-2027",
    country: "japan",
    university: "International University of Japan",
    title: "IUJ Digital Transformation + Scholarships: September 2027 Guide",
    summary:
      "এক বছরের Master of Digital Management, domestic/international three-round admission, IUJ Math Test এবং Nakayama, ADB-JSP ও MEXT funding-এর detailed preparation guide।",
    label: "Upcoming · opening planned Sep 2026 · Competitive funding",
    funding:
      "Nakayama is the main admission-time route for Japan residents; ADB-JSP and MEXT University Recommendation are restricted to eligible overseas/international applicants under current rules.",
    duration: "1 year · September 2027 intake",
    audience: "IT, CSE, engineering or business applicants moving toward digital transformation, analytics and technology-management roles",
    realityCheck:
      "Digital Transformation Program (DXP) হলো Graduate School of International Management-এর এক বছরের Master of Digital Management—Computer Science research degree নয়। Admission application-এর Phase 2 scholarship section-এ funding request করতে হয়; admission বা scholarship কোনোটিই guaranteed নয়। Published budget অনুযায়ী admission fee ¥300,000, one-year tuition ¥3,900,000 এবং একা থাকা GSIM student-এর estimated total প্রায় ¥5.264–5.348 million। Japan-এ valid residence status নিয়ে থাকলে nationality যাই হোক Domestic Applicant route ব্যবহার করতে হবে। 2027 deadlines প্রকাশিত হলেও downloadable detailed 2027 admission/scholarship guidelines এখনো নেই; বর্তমান 2026 PDFs কেবল preparation reference।",
    highlights: [
      "DXP technology ও business-এর intersection-এ তৈরি: AI for Business, Big Data Analytics, Python, digital platforms/business models, machine learning/text analytics, strategy, ethics এবং organizational change-এর curriculum আছে।",
      "Overseas-resident deadlines: 10 December 2026, 11 February 2027 ও 14 April 2027; DXP Math-Test taker-এর fixed online Math Test/interview assessment dates 24 December, 22 February ও 28 April; results 29 January, 18 March ও 21 May; procedure deadlines 19 February, 21 April ও 17 June।",
      "Japan-resident deadlines: 21 January, 23 March ও 27 May 2027; online interview 29 January, 31 March ও 10 June এবং prior guide অনুযায়ী GMAT/GRE না দিলে একই দিনে Math Test; results 24 February, 19 April ও 28 June।",
      "Current FAQ কোনো hard TOEFL/IELTS/TOEIC minimum দেয় না; IELTS Academic 6.5, TOEFL iBT 80 ও TOEIC 800 recommended। Low score submit করা formalভাবে সম্ভব, কিন্তু English-medium graduate study ও interview readiness competitive assessment-এর অংশ।",
      "English-medium bachelor’s/graduate degree-এর official institutional evidence থাকলে score exemption পাওয়া যেতে পারে। General English-proficiency letter নয়—2027 guideline-এর exact MOI category follow করতে হবে।",
      "GSIM-এ quantitative evidence বাধ্যতামূলক: GMAT/GRE অথবা eligible হলে IUJ Math Test। 2026-guide reference-এ DXP applicants সব three rounds-এ Math Test বেছে নিতে পারে এবং testটি 12 questions/60 minutes, calculator ছাড়া matrix algebra, calculus, probability ও statistics cover করে; 2027 guide-এ recheck করতে হবে।",
      "No published hard GPA cutoff এবং DXP work experience mandatory নয়; তবে academic record, quantitative readiness, personal statement, research topic, career logic ও professional evidence selection-এ গুরুত্বপূর্ণ।",
      "Nakayama 30/50/70/90/100 tuition reduction দিতে পারে; Nakayama 100 Premium full tuition, partial admission-fee reduction ও ¥100,000/month stipend দেয়। Awards সীমিত ও competitive।",
      "ADB-JSP current table-এ DXP eligible: full tuition, partial admission fee, ¥144,000/month, airfare/allowances। Bangladesh listed country হলেও applicant-কে নিজ home country-তে থাকতে/কাজ/পড়াশোনা করতে হয়; Japan-resident applicant published rules-এ ineligible।",
      "MEXT University Recommendation current table-এ DXP eligible এবং full tuition, stipend ও airfare দেখায়; prior-cycle rule অনুযায়ী international applicant + first round only। Japan-resident domestic applicant-এর route নয়; September 2027 rules নতুন PDF-এ recheck করতে হবে।",
      "Japanese admission requirement নয়; IUJ courses English-এ। তবে post-enrollment awards, daily life এবং Japan job search-এ Japanese practical advantage দেয়।",
      "Zaw Zaw Aung current DXP Program Director ও Associate Professor; AI for Business, data analytics, digital platforms/data management fit। Mihoko Sakurai information systems, resilience, smart city ও technology-enabled organizational change-এর relevant faculty match।",
    ],
    fit: [
      "Software/CSE/IT/engineering experience-কে digital strategy, analytics, platforms, product/technology management বা organizational transformation-এর সঙ্গে connect করতে চান।",
      "এক বছরের compressed business degree চান এবং traditional software-engineering/AI research thesis-এর বদলে applied management/capstone direction গ্রহণ করেন।",
      "MOI বা valid English test evidence দিতে পারবেন এবং English interview, writing ও classroom discussion handle করার বাস্তব প্রস্তুতি আছে।",
      "GMAT/GRE দিতে পারবেন অথবা algebra, calculus, probability ও statistics review করে IUJ Math Test + interview route নিতে প্রস্তুত।",
      "ADB-JSP target করলে নিজ home country-তে reside করেন এবং eligible nationality, post-degree full-time work, age ও return-home obligation পূরণ করেন।",
      "Scholarship না পেলে প্রায় ¥5.3m total-cost scenario evaluate করে written funding ছাড়া enrolment commit করবেন না।",
    ],
    quickStart: [
      "নিজের current residence দেখে route লিখুন: Japan resident হলে 21 January, overseas হলে 10 December first-round deadline target করুন।",
      "DXP curriculum খুলে নিজের IT experience-এর সঙ্গে AI for Business, data analytics, digital platforms বা transformation strategy-এর 3টি course match করুন।",
      "GMAT/GRE নাকি IUJ Math Test—একটি route বেছে 12-question quantitative diagnostic দিন; English MOI/test evidence একই folder-এ রাখুন।",
      "Nakayama, ADB-JSP ও MEXT-এর eligibility তিনটি আলাদা column-এ লিখে scholarship না পাওয়ার ¥5.264–5.348m backup decision rule বানান।",
    ],
    steps: [
      {
        title: "DXP degree ও career outcome ঠিকভাবে বুঝুন",
        timing: "August–September 2026",
        description:
          "DXP coding-heavy CS degree নয়; technology বোঝে এমন manager, consultant, product/IT strategist বা transformation leader তৈরির এক বছরের degree।",
        actions: [
          "Master of Digital Management, one-year duration এবং 32-credit current curriculum structure পড়ে outcome লিখুন।",
          "AI for Business, Big Data Analytics, Data Analysis with Python, Digital Platforms এবং Management for DX থেকে career-relevant courses বাছুন।",
          "Current software/IT work → organizational problem → DXP skills → target role—এই চার ধাপে career bridge লিখুন।",
          "Deep CS research চাইলে DXP-এর বদলে technical MSc/MEng option compare করুন; degree title দেখে ভুল expectation রাখবেন না।",
        ],
        readyWhen:
          "কেন one-year Digital Management, কেন IUJ এবং graduation-এর পরে কোন role—তিনটি evidence দিয়ে বলতে পারেন।",
      },
      {
        title: "Domestic বনাম international route এবং deadline lock করুন",
        timing: "Before the application opens",
        description:
          "IUJ applicant category nationality দিয়ে নয়, application period-এ কোথায় legally reside করেন তা দিয়ে নির্ধারিত হয়। Route বদলালে deadline, fee ও examination process বদলায়।",
        actions: [
          "Valid Japan residence status application/admission period জুড়ে থাকবে কি না দেখে Domestic Applicant definition মিলান।",
          "Domestic হলে 21 Jan / 23 Mar / 27 May; overseas হলে 10 Dec / 11 Feb / 14 Apr deadline calendar-এ দিন।",
          "2026 planning reference অনুযায়ী full-scholarship priority পেতে প্রথম/দ্বিতীয় round target করুন; MEXT University Recommendation-এর prior-cycle first-round-only rule recheck করুন।",
          "Online Math Test/interview ও result/admission-procedure dates একই calendar-এ JST-সহ block করুন।",
        ],
        readyWhen:
          "Correct applicant category, target round, exam date, result এবং offer-acceptance deadline এক timeline-এ পরিষ্কার।",
      },
      {
        title: "English ও quantitative gate প্রস্তুত করুন",
        timing: "September–November 2026",
        description:
          "No hard English cutoff এবং no mandatory GRE মানে test-free application নয়। Accepted English evidence ও GMAT/GRE/IUJ Math Test—দুই gate-ই resolve করতে হবে।",
        actions: [
          "MOI exemption চাইলে degree-awarding institution-এর official evidence নিন; generic proficiency letter নয়।",
          "Score route হলে two-year-valid TOEFL/IELTS Academic/TOEIC এবং 2027 reporting/upload rules নতুন guide থেকে নিন।",
          "GMAT/GRE score scholarship strength বাড়াবে কি না time/cost দেখে সিদ্ধান্ত নিন; না হলে DXP IUJ Math Test select করুন।",
          "Matrix algebra, differentiation/integration, probability ও statistics calculator ছাড়া timed practice করুন এবং English interview answers rehearse করুন।",
        ],
        readyWhen:
          "Valid English route documented এবং quantitative test route chosen, practised ও application deadline-এর মধ্যে achievable।",
      },
      {
        title: "DXP-focused application file তৈরি করুন",
        timing: "October–December 2026",
        description:
          "Application committee grades-এর সঙ্গে career clarity, quantitative readiness, digital-transformation problem এবং evidence-based goals মূল্যায়ন করে।",
        actions: [
          "Online application, Personal Statement এবং Research Topic-এ একই organizational/industry DX problem রাখুন।",
          "সব undergraduate/graduate transcripts, degree certificates, passport/photo এবং domestic foreign applicant হলে residence card প্রস্তুত করুন।",
          "Academic advisor/professor-কে reference হিসেবে professional email-সহ আগে inform করুন; তিনি unavailable হলেই immediate workplace supervisor ব্যবহার করুন। Prior guide-এ letter only if committee requests।",
          "Personal Statement/interview notes-এ systems built, data used, users/teams led, process improvement এবং measurable business impact quantify করুন।",
        ],
        readyWhen:
          "Documents, Personal Statement, Research Topic, reference ও test evidence একই coherent Business + IT profile দেখায়।",
      },
      {
        title: "Scholarship matrix ও net-cost decision বানান",
        timing: "Before Phase 2 submission",
        description:
          "Nakayama, ADB-JSP ও MEXT-এর headline benefit এক হলেও eligibility এবং obligations আলাদা। Scholarship না পাওয়া scenario বাদ দিলে application financially unsafe হবে।",
        actions: [
          "Nakayama 30/50/70/90/100/Premium-এর tuition balance, admission-fee balance ও stipend আলাদা করে হিসাব করুন।",
          "ADB-JSP-এর nationality, home-country residence, two-year post-degree work, 2026-reference age ≤35, in-principle no prior Master’s/PhD এবং two-year return obligation check করুন। Japan resident হলে ineligible mark করুন।",
          "MEXT 2027 PDF এলে international-applicant/first-round gate, age, nationality, other-scholarship conflict ও nomination conditions recheck করুন; domestic route হলে current rules-এ ineligible mark করুন।",
          "No award এবং Nakayama 30/50/70/90/100/Premium scenarios লিখুন; official estimate থেকে 30% award-এ প্রায় ¥4.094–4.178m এবং 100%-এ প্রায় ¥1.364–1.448m remaining cost হয়।",
        ],
        readyWhen:
          "Eligible awards, ineligible awards, obligations এবং minimum acceptable written funding—সব একটি decision sheet-এ আছে।",
      },
      {
        title: "Phase 1, Phase 2 এবং selection complete করুন",
        timing: "Target first round · overseas 10 Dec / domestic 21 Jan",
        description:
          "Scholarship consideration admission workflow-এর মধ্যেই হয়। Correct sponsorship status, complete Phase 2 এবং fixed test/interview attendance গুরুত্বপূর্ণ।",
        actions: [
          "Privately funded হয়ে scholarship চাইলে registration-এ Non-Sponsored select করে Phase 2 Scholarship Section পূরণ করুন।",
          "Name, DXP program, applicant category, uploads, test choice, reference এবং scholarship answers preview করে deadline-এর আগে submit করুন; applicant named award নিজে নিশ্চিতভাবে select করে না, IUJ eligibility অনুযায়ী match/nominate করে।",
          "Math-Test taker হলে fixed online test/interview attend করুন; GMAT/GRE submitter-এর 2027 interview exemption final guide/schedule দিয়ে confirm করুন।",
          "Result পেলে tuition reduction, admission fee, stipend, airfare, conditions ও payment deadline আলাদা করে net-cost sheet-এ বসান।",
        ],
        readyWhen:
          "Submission ID saved, selection complete এবং written admission + funding package দেখে informed accept/decline decision নেওয়া হয়েছে।",
      },
    ],
    checklist: [
      "AY2027 admission and scholarship guidelines",
      "Correct domestic/international applicant route",
      "DXP online application",
      "Personal Statement",
      "DXP Research Topic",
      "All degree certificates and transcripts",
      "Official English translations",
      "TOEFL/IELTS/TOEIC or eligible MOI evidence",
      "GMAT/GRE or IUJ Math Test selection",
      "Passport/photo and residence card if domestic foreign applicant",
      "Professional reference details",
      "Quantified IT/business-impact evidence for essays/interview",
      "Application-fee plan from AY2027 guide",
      "Nakayama/ADB-JSP/MEXT eligibility matrix",
      "Phase 2 Scholarship Section",
      "No-award ¥5.264–5.348m budget",
    ],
    afterSubmission: [
      "Portal ও admgsim@iuj.ac.jp email/spam monitor করুন; fixed Math Test/interview date বদলানো যায় না বলে work/travel conflict সরান।",
      "Digital-transformation case, quantitative reasoning, career goal, English communication ও cultural adaptability interview practice চালু রাখুন।",
      "Admission এবং scholarship decision আলাদা হলে দুইটি written result না পাওয়া পর্যন্ত final net cost ধরে নেবেন না।",
      "JASSO eligible হলে late-August pre-enrollment IUJ notice miss করবেন না; current IUJ route ¥48,000/month October–March, result early November এবং GPA/language/visa/conflicting-aid rulesসহ competitive।",
    ],
    cautions: [
      "No hard IELTS minimum মানে IELTS 5.5 competitive বা automatic admission নয়; recommended IELTS 6.5 এবং English readiness selection-এর অংশ।",
      "GRE/GMAT বাধ্যতামূলক নয় বলা অসম্পূর্ণ—GSIM quantitative assessment বাধ্যতামূলক; DXP applicant IUJ Math Test দিয়ে score replace করতে পারে।",
      "2027 schedule published হলেও detailed PDFs এখনো 2026 version; documents, fees, Math Test এবং scholarship conditions নতুন guide দিয়ে reverify করুন।",
      "ADB-JSP শুধু country match নয়; নিজ home country ছাড়া অন্য দেশে—Japan-সহ—living/working/studying করলে, কিংবা work/age/prior-degree rule না মিললে ineligible।",
      "MEXT University Recommendation-এ IUJ nomination final award নয় এবং prior rules international first-round applicants-এর জন্য; domestic/Japan-resident route eligible ধরে নেবেন না।",
      "DXP-এর ¥3.9m tuition এবং estimated ¥5.264–5.348m total high; part-time work বা JASSO দিয়ে funding gap cover হবে ধরে নেবেন না।",
      "Faculty profiles research/curriculum fit—supervisor vacancy বা scholarship commitment নয়। DXP management degree-তে PhD-style supervisor cold email admission step নয়।",
      "Work experience DXP admission-এর published hard requirement নয়, কিন্তু ADB-JSP ও কিছু funding route-এ experience বাধ্যতামূলক।",
    ],
    officialLinks: [
      {
        label: "September 2027 admission schedule",
        href: "https://www.iuj.ac.jp/admissions/",
        description: "Domestic/international deadlines, test/interview, result ও procedure dates দেখুন।",
      },
      {
        label: "Digital Transformation Program",
        href: "https://www.iuj.ac.jp/academics/gsim/programs/dxp/",
        description: "DXP objective, Business + IT focus, structure ও program-director message পড়ুন।",
      },
      {
        label: "DXP curriculum requirements",
        href: "https://www.iuj.ac.jp/assets/img/2526_creditrequirements_dxp.pdf",
        description: "Master of Digital Management, current 32-credit structure ও technical/business courses দেখুন।",
      },
      {
        label: "IUJ tuition and scholarships",
        href: "https://www.iuj.ac.jp/admissions/cost/",
        description: "¥3.9m DXP tuition, total budget, current awards ও application flow compare করুন।",
      },
      {
        label: "Application and admission FAQ",
        href: "https://www.iuj.ac.jp/inquiry/admission/",
        description: "Qualifications, documents, work experience, applicant category ও recommended English scores দেখুন।",
      },
      {
        label: "English and quantitative-test FAQ",
        href: "https://www.iuj.ac.jp/inquiry/toefl/",
        description: "MOI exemption, score validity, GMAT/GRE এবং DXP Math Test route verify করুন।",
      },
      {
        label: "Official admissions materials",
        href: "https://www.iuj.ac.jp/admissions/download-materials/",
        description: "AY2027 admission ও scholarship PDFs প্রকাশ হলে এখান থেকে final rules নিন।",
      },
      {
        label: "Online application status",
        href: "https://www.iuj.ac.jp/admissions/online/",
        description: "বর্তমান closure এবং September 2027 application opening notice monitor করুন।",
      },
      {
        label: "2026 admission guide · planning reference",
        href: "https://www.iuj.ac.jp/assets/img/Admissions_Instructions_M_E.pdf",
        description: "Documents, Math Test ও Phase 1/2 workflow বুঝুন; 2027 final authority হিসেবে ব্যবহার করবেন না।",
      },
      {
        label: "2026 scholarship guide · planning reference",
        href: "https://www2.iuj.ac.jp/admission/pdf/2026/Sch_Instructions_M_E.pdf",
        description: "Nakayama, ADB-JSP ও MEXT prior-cycle eligibility/benefits বুঝে AY2027 PDF দিয়ে replace করুন।",
      },
      {
        label: "Current GSIM faculty",
        href: "https://www.iuj.ac.jp/academics/gsim/about/im-faculty/",
        description: "Zaw Zaw Aung ও Mihoko Sakurai-এর current GSIM affiliation verify করুন।",
      },
      {
        label: "Zaw Zaw Aung research profile",
        href: "https://rmap.iuj.ac.jp/profile/en.7a232090e8d6f0d5.html",
        description: "Current appointment, Computer Science/Information Science background ও publications দেখুন।",
      },
      {
        label: "Mihoko Sakurai research profile",
        href: "https://rmap.iuj.ac.jp/profile/en.b742213d424a80b4.html",
        description: "Information systems, resilience, smart city ও digital-change research fit দেখুন।",
      },
      {
        label: "JASSO Honors Scholarship",
        href: "https://www.jasso.go.jp/en/ryugaku/scholarship_j/shoreihi/about.html",
        description: "IUJ-administered competitive nomination দেখুন; current window late August before enrollment, award October–March।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "grips-masters-scholarships-2027",
    country: "japan",
    university: "National Graduate Institute for Policy Studies",
    title: "GRIPS Master’s + Scholarships: 2027–28 Application Guide",
    summary:
      "Public Policy, Macroeconomic Policy ও Public Finance applicants-এর জন্য program selection, MEXT/ADB/JISPA funding routes, residency status এবং document-by-document process.",
    label: "Policy, economics & computational methods",
    funding:
      "MEXT, ADB-JSP, JISPA, JJ/WBGSP and sponsor routes are program- and profile-specific; direct admission alone does not guarantee funding.",
    duration: "1 or 2 years · program-specific",
    audience: "Applicants targeting public policy, economics, finance or computational economic analysis",
    realityCheck:
      "GRIPS-এ ‘একটি scholarship application’ নেই। Program, applicant residence, nationality, employer এবং funding route ঠিক করে কে GRIPS-এ direct apply করবেন আর কে Embassy, IMF, JICA বা অন্য sponsor-এর মাধ্যমে apply করবেন। Japan-এ থাকা applicant-কে domestic applicant হিসেবে ধরা হতে পারে, তাই published overseas deadlines ব্যবহার করার আগে admissions@grips.ac.jp-এ status confirm করতে হবে।",
    highlights: [
      "2027–28 direct applications open; MP1, MP2, MEP, Public Finance এবং selected doctoral programs available।",
      "Economics, Planning and Public Policy Program 2027–28 intake-এ suspended।",
      "MP1/MP2 MEXT University Recommendation ও ADB-JSP route-এর online registration deadline 20 November 2026, 17:00 JST; supporting documents 27 November।",
      "MEXT MP1/MP2 coverage listed as ¥147,000 monthly stipend, fees/tuition এবং eligible round-trip economy airfare।",
      "MEP-এর JISPA route Bangladeshসহ listed Asian countries-এর relevant macroeconomic-policy professionals-এর জন্য; sponsor deadline আলাদা।",
      "Two-year master’s ও PhD applicants-এর research proposal লাগে; direct route-এ supporting documents post করতে হয়।",
    ],
    fit: [
      "Public policy ও economics-এর সঙ্গে programming, Python, quantitative modelling বা data analysis combine করতে চান।",
      "Game theory/market design, computational economics, digital currency বা international political economy-তে clear interest আছে।",
      "Scholarship provider-এর age, nationality, employment এবং work-experience conditions পূরণ করেন।",
      "Policy impact ও home-country contribution evidence দিয়ে explain করতে পারেন।",
    ],
    quickStart: [
      "Current Japan residence ও visa status admissions@grips.ac.jp-এ পাঠিয়ে domestic/overseas application category confirm করুন।",
      "MP1, MP2, MEP ও Public Finance-এর মধ্যে career goal অনুযায়ী একটি program shortlist করুন।",
      "2027 scholarship matrix-এ শুধু আপনার program ও profile-eligible routes highlight করুন।",
      "John Stachurski, Yosuke Yasuda ও Hyoung-kyu Chey-এর faculty profiles পড়ে একটি defensible research direction লিখুন।",
    ],
    steps: [
      {
        title: "Applicant category ও route লিখিতভাবে confirm করুন",
        timing: "Immediately",
        description:
          "GRIPS deadline page overseas residents-এর জন্য; Japan resident বা soon-to-move applicant-এর category visa status অনুযায়ী বদলাতে পারে।",
        actions: [
          "Current address, nationality, residence status, visa expiry ও intended intake concise email-এ লিখুন।",
          "Admissions office-কে domestic না overseas applicant এবং কোন deadline set প্রযোজ্য জিজ্ঞেস করুন।",
          "Sponsor-employed হলে employer/JICA/Embassy route বাধ্যতামূলক কি না verify করুন।",
          "Written reply application folder-এ সংরক্ষণ করুন।",
        ],
        readyWhen:
          "Program, applicant category, submission channel ও applicable deadline written confirmation-এ clear।",
      },
      {
        title: "Program ও faculty/research fit নির্বাচন করুন",
        timing: "August–September 2026",
        description:
          "Program title নয়—curriculum, degree length, research requirement ও career outcome দিয়ে selection করুন।",
        actions: [
          "MP1 one-year policy training এবং MP2 two-year research depth compare করুন।",
          "MEP কেবল macroeconomic-policy career এবং eligible funding/employment route fit করলে বাছুন।",
          "Public Finance tax/customs tracks-এর employer ও sponsor restrictions পড়ুন।",
          "Computational economics-এর জন্য John Stachurski, game theory-এর জন্য Yosuke Yasuda, digital currency/IPE-এর জন্য Hyoung-kyu Chey-এর work map করুন।",
        ],
        readyWhen:
          "একটি primary program, one-paragraph policy/research question এবং relevant faculty evidence আছে।",
      },
      {
        title: "Funding matrix দিয়ে eligible scholarship বাছুন",
        timing: "Before drafting the application",
        description:
          "একই scholarship সব program বা applicant-এর জন্য নয়; direct-GRIPS ও sponsoring-organization route আলাদা।",
        actions: [
          "MP1/MP2-এর MEXT ও ADB-JSP eligibility compare করুন—ADB route-এ work experience এবং no-existing-master’s rule লক্ষ্য করুন।",
          "MEP হলে Bangladesh eligibilityসহ IMF-JISPA professional criteria ও sponsor application দেখুন।",
          "Public Finance হলে tax/customs employment ও JJ/WBGSP/WCO nomination rules দেখুন।",
          "Funding নিশ্চিত না হলে tuition/living cost ও self-financing feasibility লিখুন।",
        ],
        readyWhen:
          "প্রতিটি selected scholarship-এর program, route, deadline, eligibility ও coverage এক টেবিলে documented।",
      },
      {
        title: "Application documents তৈরি করুন",
        timing: "September–October 2026",
        description:
          "GRIPS standard forms ব্যবহার করে policy impact, analytical readiness ও professional relevance দেখাতে হবে।",
        actions: [
          "Application for Admission, Statement of Purpose এবং official recommendation form পূরণ করুন।",
          "Certificate of Employment ও employer nomination route-specific হলে early সংগ্রহ করুন।",
          "MP2 বা applicable two-year program-এর জন্য research proposal-এ question, literature, method, data ও policy contribution লিখুন।",
          "Degree/transcript, English test, passport এবং translations application guide অনুযায়ী prepare করুন।",
        ],
        readyWhen:
          "সব official form complete, supporting evidence consistent এবং postal originals ready।",
      },
      {
        title: "Direct বা sponsor channel-এ submit করুন",
        timing: "Route-specific · first key date 20 November 2026",
        description:
          "Direct applicant online registration করলেও supporting documents post না করলে file complete নয়।",
        actions: [
          "MEXT/ADB MP1 বা MP2 route হলে 20 November 2026, 17:00 JST-এর আগে online registration করুন।",
          "Applicable originals/supporting documents 27 November 2026, 17:00 JST-এর মধ্যে GRIPS-এ পৌঁছান।",
          "JISPA, JICA, YLP বা other sponsor route হলে তাদের earlier deadline ও nomination instructions follow করুন।",
          "Courier tracking, submitted forms ও confirmation email save করুন।",
        ],
        readyWhen:
          "Correct channel-এ online ও paper/sponsor submissions complete এবং receipt verified।",
      },
      {
        title: "Interview, funding decision ও fallback plan",
        timing: "After application",
        description:
          "Admission, sponsor nomination ও final scholarship decision আলাদা stage হতে পারে।",
        actions: [
          "Policy problem, quantitative method, work impact ও post-study contribution-এর concise answers practice করুন।",
          "Funding offer-এ stipend, fees, airfare, insurance, research allowance ও return obligations পড়ুন।",
          "Direct admission but no scholarship হলে affordability deadline-এর আগে reassess করুন।",
          "Privately financed enrollment হলে JASSO university nomination সম্পর্কে student office-এ জিজ্ঞেস করুন, কিন্তু এটিকে guaranteed funding ধরবেন না।",
        ],
        readyWhen:
          "Written admission/funding terms বুঝে financially viable enrollment decision নেওয়া হয়েছে।",
      },
    ],
    checklist: [
      "Applicant residence/category confirmation",
      "Exact GRIPS program and funding route",
      "Application for Admission",
      "Statement of Purpose",
      "Official recommendation letter",
      "Certificate of Employment where applicable",
      "Research Proposal for applicable two-year/PhD routes",
      "Degree certificate and complete transcript",
      "English-language evidence",
      "Passport and official translations",
      "Online registration confirmation",
      "Tracked supporting-document delivery",
    ],
    afterSubmission: [
      "GRIPS, sponsor, Embassy/JICA/IMF এবং spam-folder messages আলাদাভাবে monitor করুন।",
      "Employer nomination বা additional verification চাইলে original records দিয়ে দ্রুত respond করুন।",
      "Offer পেলে scholarship provider-এর return-to-home-country, employment ও reporting obligations পড়ুন।",
      "JASSO Honors Scholarship কেবল privately financed eligible students-এর university nomination; direct JASSO application নয়।",
    ],
    cautions: [
      "Japan-resident applicant overseas deadline নিজের ক্ষেত্রে automatically ব্যবহার করবেন না।",
      "MEP direct application externally funded বা self-financed applicants-এর জন্য; JISPA route sponsor-managed।",
      "EPP 2027–28 suspended—পুরোনো page দেখে apply করবেন না।",
      "ADB-JSP applicant-এর existing master’s degree থাকলে eligibility নাও থাকতে পারে।",
      "JASSO ¥48,000 stipend primary full-funding substitute নয় এবং nomination guaranteed নয়।",
    ],
    officialLinks: [
      {
        label: "GRIPS How to Apply",
        href: "https://www.grips.ac.jp/en/admissions/apply/",
        description: "Open programs, forms, submission steps ও suspended program notice দেখুন।",
      },
      {
        label: "GRIPS 2027 scholarship matrix",
        href: "https://www.grips.ac.jp/uploads/admissions/2026/07/GRIPS_Scholarships_2027.pdf",
        description: "Program-specific deadlines, eligibility এবং coverage compare করুন।",
      },
      {
        label: "GRIPS application deadlines",
        href: "https://www.grips.ac.jp/en/admissions/deadline/",
        description: "Residence category, program ও funding-specific deadlines verify করুন।",
      },
      {
        label: "John Stachurski faculty profile",
        href: "https://www.grips.ac.jp/list/en/facultyinfo/stachurski_john/",
        description: "Computational economics, dynamic programming ও numerical-method fit দেখুন।",
      },
      {
        label: "Yosuke Yasuda faculty profile",
        href: "https://www.grips.ac.jp/list/en/facultyinfo/yasuda_yosuke/",
        description: "Game theory, market design ও matching research fit দেখুন।",
      },
      {
        label: "Hyoung-kyu Chey faculty profile",
        href: "https://www.grips.ac.jp/list/en/facultyinfo/chey_hyoung-kyu/",
        description: "International political economy, cryptocurrency ও CBDC research দেখুন।",
      },
    ],
  },
  {
    slug: "university-of-aizu-cse-masters-2027",
    country: "japan",
    university: "University of Aizu",
    title: "University of Aizu Computer Science & Engineering: 2027 Master's Guide",
    summary:
      "Japan-resident international applicant-এর জন্য English-medium CSE master's admission, supervisor consent, low minimum English threshold এবং funding plan—সব এক জায়গায়।",
    label: "Primary · English CSE",
    funding:
      "Admission-এর সঙ্গে full scholarship guaranteed নয়; tuition exemption, university support এবং JASSO nomination আলাদা ও competitive route।",
    duration: "2 years · April or October entry",
    audience: "Computer science, software engineering, AI, systems or related bachelor's graduates",
    realityCheck:
      "এটি আপনার profile-এর সবচেয়ে practical English-medium optionগুলোর একটি। Official 2027 guide-এ TOEIC 500-equivalent minimum—TOEFL iBT 40, IELTS 3.5 বা Duolingo 45—এবং TOEIC 600-equivalent recommended। তবে score পূরণ করলেই admission নয়: prospective supervisor-এর acceptance এবং English interview খুব গুরুত্বপূর্ণ।",
    highlights: [
      "Graduate courses প্রায় সম্পূর্ণ English-এ পরিচালিত হয় এবং selection documents ও English interview-এর ওপর ভিত্তি করে।",
      "English-medium previous degree হলে official Medium of Instruction evidence দিয়ে test exemption চাওয়া যায়।",
      "Japan-এর ভেতর থেকে April 2027 second recruitment-এর application 7–14 December 2026; exam 30 January এবং result 5 February 2027।",
      "Research topic ও faculty match আগে ঠিক করে supervisor acceptance নেওয়া application-এর বাধ্যতামূলক অংশ।",
      "IELTS 5.5 minimum-এর চেয়ে বেশি, কিন্তু stronger score ও research fit selection-এ সাহায্য করবে।",
    ],
    fit: [
      "আপনার bachelor's CS/CSE/SE/IT বা closely related field-এ।",
      "Research-oriented master's করতে চান এবং thesis topic ব্যাখ্যা করতে পারেন।",
      "Japan-এ থেকে on-campus interview ও admission process follow করতে পারবেন।",
      "English-medium study চান কিন্তু IELTS 6.0+ requirement এড়াতে practical option খুঁজছেন।",
    ],
    quickStart: [
      "Official 2027 PDF download করে Inside Japan applicant section আলাদা করে mark করুন।",
      "Research fields থেকে 3 জন faculty shortlist করে তাদের recent work পড়ুন।",
      "এক পাতার research-interest note এবং concise CV তৈরি করুন।",
      "Faculty consent-এর জন্য personalised email পাঠানোর আগে transcript ও English evidence ready করুন।",
    ],
    steps: [
      {
        title: "Eligibility ও intake নিশ্চিত করুন",
        timing: "এখনই",
        description: "Degree background, residence category, English evidence এবং April/October intake একসঙ্গে verify করুন।",
        actions: [
          "Bachelor's completion date এবং required academic documents মিলিয়ে দেখুন।",
          "IELTS/TOEFL/TOEIC/Duolingo score valid কি না check করুন; MOI route হলে official letter সংগ্রহ করুন।",
          "Admissions office-কে বর্তমান visa ও Japan address জানিয়ে correct applicant category confirm করুন।",
          "December deadline-এর অন্তত 6–8 সপ্তাহ আগে internal deadline রাখুন।",
        ],
        readyWhen: "আপনার intake, applicant category ও English route লিখিতভাবে clear।",
      },
      {
        title: "Supervisor acceptance নিন",
        timing: "September–October 2026-এর মধ্যে",
        description: "Generic mass email নয়—faculty-এর current research-এর সঙ্গে নিজের experience-এর concrete connection দেখান।",
        actions: [
          "প্রতি faculty-এর 1–2টি recent paper/project note করুন।",
          "Email-এ research question, relevant project, degree, English score এবং intended intake লিখুন।",
          "CV, transcript ও one-page proposal attach করুন; oversized certificates পাঠাবেন না।",
          "Reply না এলে 7–10 business days পরে একবার polite follow-up করুন।",
        ],
        readyWhen: "একজন eligible faculty application supervise/accept করতে লিখিত সম্মতি দিয়েছেন।",
      },
      {
        title: "Application ও interview প্রস্তুত করুন",
        timing: "October–December 2026",
        description: "Academic readiness, research feasibility এবং University of Aizu কেন—এই তিনটি message সব documents-এ consistent রাখুন।",
        actions: [
          "Official forms, degree certificate, transcript, passport/residence evidence ও English proof সংগ্রহ করুন।",
          "Proposal-এ problem, prior work, method, expected contribution ও realistic two-year plan লিখুন।",
          "English-এ 3-minute research explanation এবং technical follow-up practice করুন।",
          "7–14 December window-এর আগেই fee, delivery ও submission method recheck করুন।",
        ],
        readyWhen: "Complete application submitted এবং 30 January interview/exam-এর evidence-based answers ready।",
      },
      {
        title: "Funding gap পরিকল্পনা করুন",
        timing: "Offer-এর আগে",
        description: "Scholarship result ছাড়া admission নেওয়া সম্ভব কি না—প্রথম বছরের বাস্তব budget দিয়ে সিদ্ধান্ত নিন।",
        actions: [
          "Admission fee, tuition, housing, insurance ও monthly living cost estimate করুন।",
          "University tuition exemption ও internal scholarship-এর current notice জিজ্ঞাসা করুন।",
          "JASSO nomination-কে bonus হিসেবে ধরুন, guaranteed funding হিসেবে নয়।",
          "Written award ছাড়া কোনো scholarship amount budget-এ subtract করবেন না।",
        ],
        readyWhen: "Funded, partly funded ও unfunded—তিন scenario-র budget আছে।",
      },
    ],
    checklist: [
      "Correct 2027 applicant category", "Supervisor acceptance", "Degree certificate and transcript",
      "English score or MOI evidence", "Research proposal", "CV", "Passport and residence documents",
      "Recommendation/forms", "Application fee and delivery proof", "Three-scenario funding budget",
    ],
    afterSubmission: [
      "Email ও portal নিয়মিত monitor করুন এবং original-document request দ্রুত পূরণ করুন।",
      "Interview-এ research fit, technical fundamentals এবং future plan concise English-এ explain করুন।",
      "Offer-এর সঙ্গে tuition, waiver ও payment deadlines আলাদাভাবে লিখে রাখুন।",
    ],
    cautions: [
      "Published minimum English score admission guarantee নয়; recommended level ও interview quality গুরুত্বপূর্ণ।",
      "Supervisor consent ছাড়া otherwise strong file-ও incomplete হতে পারে।",
      "JASSO ¥48,000/month institution nomination-based এবং guaranteed নয়।",
    ],
    officialLinks: [
      { label: "2027 Master's application guide", href: "https://u-aizu.ac.jp/files/admissions/2027_m_in_e.pdf", description: "Dates, eligibility, English evidence ও inside-Japan process পড়ুন।" },
      { label: "Graduate admissions", href: "https://u-aizu.ac.jp/en/admissions/graduate/", description: "Current notices ও official application resources দেখুন।" },
      { label: "JASSO Honors Scholarship", href: "https://www.jasso.go.jp/en/ryugaku/scholarship_j/shoreihi/about.html", description: "Institution-nominated stipend-এর official conditions দেখুন।" },
    ],
  },
  {
    slug: "musashino-data-science-masters-2027",
    country: "japan",
    university: "Musashino University",
    title: "Musashino University Data Science Master's: April 2027 Admission Guide",
    summary:
      "Japan-resident international applicant-এর জন্য correct route, তিনটি application round, online Data Science exam, language reality, final tuition এবং self-funded application plan—সব এক জায়গায়।",
    label: "Round I opens Aug 18 · Self-funded · language check",
    funding:
      "Admission-linked full scholarship নেই। 2027 base tuition দুই বছরে ¥1,540,000; university-nominated aid বা JASSO আলাদা, competitive এবং guaranteed নয়।",
    duration: "2 years · April 2027 · Ariake Campus, Tokyo",
    audience:
      "Japan-এ বসবাসকারী CS, CSE, software, AI, data বা related bachelor's graduate যিনি research-based Data Science master's চান",
    realityCheck:
      "এটি scholarship vacancy নয়; Musashino University-এর self-funded Master of Data Science admission route। Japan-এ থাকা foreign applicant-কে nationality নয়, residence অনুযায়ী domestic/Japan-resident guide ব্যবহার করতে হবে। Published rule-এ IELTS/TOEFL/TOEIC-এর minimum score নেই এবং IELTS 5.5 formal certificate condition পূরণ করতে পারে, কিন্তু language ability selection-এ assess হয়। University Japanese ও English—দুই ভাষায় class হওয়ার কথা বললেও পুরো degree, required credits, supervision, thesis ও defence 100% English-এ শেষ করা যাবে—এমন guarantee পাওয়া যায়নি। Apply করার আগে nyushi@musashino-u.ac.jp থেকে written confirmation নেওয়া essential।",
    highlights: [
      "Japan-resident Intake I application 18–27 August 2026; exam 20 September; result 30 September। এরপর Intake II 16–25 November এবং Intake III 25 January–3 February।",
      "International-student selection online: 60-minute Data Science essay 100 marks এবং প্রায় 15-minute interview/oral examination 100 marks; language ability-ও assess করা হয়।",
      "Overall program capacity 10—এটি 10টি international seat নয়। Overseas route-এ আলাদাভাবে কেবল ‘a few students’ বলা আছে।",
      "TOEFL iBT, IELTS বা TOEIC L&R-এর 1 August 2024 বা পরের certificate গ্রহণযোগ্য; published minimum নেই, কিন্তু official/original delivery rule কঠোর এবং MOI substitute হিসেবে listed নয়।",
      "GRE, GMAT বা numerical minimum GPA published requirement নয়; তবু transcript, research plan, essay এবং oral assessment দিয়ে academic readiness বিচার হবে।",
      "Program-এ 30 credits ও master's thesis; project options-এর মধ্যে Semantic Computing & AI, Conscious AI & NLP, AI Algorithms, Data Science Business, Temporal/Social Data Mining এবং Human–AI Interaction আছে।",
      "2027 fee final: first year ¥895,000, second year ¥645,000, base total ¥1,540,000; insurance ও কিছু practical/experiment cost অতিরিক্ত হতে পারে।",
      "Web registration ও payment-এর পরও application complete নয়—original/certified physical documents Japan Post-এর prescribed tracked express method-এ deadline অনুযায়ী পাঠাতে হবে।",
    ],
    fit: [
      "আপনার 4-year bachelor's, 16 years of formal education বা accepted equivalent qualification আছে।",
      "আপনি Japan-এ valid Student, Permanent Resident, spouse/long-term status-এ আছেন, অথবা admission-এর পর Student status-এ change করতে পারবেন।",
      "AI, NLP, data mining, software/AI systems, human–AI interaction বা data-driven business নিয়ে specific research question তৈরি করতে পারবেন।",
      "Data Science essay ও oral interview-এর জন্য fundamentals, research logic এবং language communication practice করতে প্রস্তুত।",
      "Scholarship না পেলেও tuition ও Tokyo living cost-এর credible funding evidence ও fallback budget দেখাতে পারবেন।",
    ],
    quickStart: [
      "Admissions office-কে আজই লিখুন: April 2027-এ আপনার target project-এর required courses, supervision, thesis ও final examination সম্পূর্ণ English-এ করা যাবে কি না।",
      "আপনার Japan residence status ও standard bachelor's eligibility মিলিয়ে Intake I direct application সম্ভব কি না check করুন; nonstandard equivalency হলে Intake I pre-screening ইতিমধ্যে শেষ।",
      "IELTS/TOEFL/TOEIC certificate date ও official delivery method verify করুন এবং দুইজন referee-কে sealed assessment report-এর জন্য এখনই বলুন।",
      "একটি project বেছে 800–1,000 শব্দের working research-plan draft করুন: problem, prior work, data, method, evaluation, ethics এবং Musashino fit।",
    ],
    steps: [
      {
        title: "সঠিক applicant route ও deadline বাছুন",
        timing: "এখনই—route ভুল হলে পুরো application invalid হতে পারে",
        description:
          "Musashino residence দিয়ে route নির্ধারণ করে। Japan-এ থাকা Bangladeshi বা অন্য foreign national-ও Japan-resident guide follow করবেন; overseas guide শুধু Japan-এর বাইরে থাকা এবং Japanese residence status না থাকা non-Japanese applicant-এর জন্য।",
        actions: [
          "Japan-resident Intake I: web/postal application 18–27 August 2026 (postmark), exam 20 September, result 30 September এবং enrolment procedure 30 September–9 October লিখে রাখুন।",
          "Backup হিসেবে Intake II: 16–25 November, exam 20 December, result 23 December; Intake III: 25 January–3 February, exam 28 February, result 5 March calendar-এ রাখুন।",
          "Standard 4-year bachelor's/16-year education category হলে advance eligibility screening সাধারণত প্রয়োজন নেই।",
          "Nonstandard/equivalent qualification হলে Round I screening 13–16 July-এ শেষ; Round II 19–22 October বা Round III 21–24 December-এর screening আগে complete করতে হবে।",
          "Japan-এর বাইরে no-residence-status applicant হলে only overseas guide ব্যবহার করুন: 1–18 August 2026 documents-arrival window এবং একটিই selection round।",
        ],
        readyWhen:
          "আপনার residence-based route, eligibility category, application window, postmark/arrival rule এবং backup round এক পাতায় পরিষ্কার।",
      },
      {
        title: "Language eligibility আর English-only study আলাদা করে verify করুন",
        timing: "Round I ধরলে আজই email ও score-delivery check",
        description:
          "English certificate জমা দেওয়া JLPT-এর বিকল্প হতে পারে, কিন্তু admission-language rule degree-এর teaching-language guarantee নয়। এই distinction লিখিতভাবে clear না করে application fee দেবেন না।",
        actions: [
          "IELTS, TOEFL iBT বা TOEIC L&R certificate 1 August 2024 বা তার পরে issued কি না check করুন; কোনো published minimum score নেই।",
          "IELTS 5.5 formal submission rule পূরণ করলেও competitive result guarantee করে না—essay/interview-এ communication এবং Data Science reasoning assess হবে।",
          "MOI guideline-এর accepted evidence list-এ নেই; admissions office written exception না দিলে MOI waiver ধরে plan করবেন না।",
          "TOEFL/IELTS-এর test-specific official/original reporting instructions follow করুন; downloaded result একা accepted নয় এবং direct delivery-তে সময় লাগতে পারে।",
          "nyushi@musashino-u.ac.jp-এ project name দিয়ে জিজ্ঞাসা করুন: all required 30 credits, supervision, thesis writing এবং defence English-only করা যাবে কি না।",
        ],
        readyWhen:
          "Valid language evidence হাতে আছে এবং English-only completion সম্ভব কি না admissions office-এর dated written reply সংরক্ষিত।",
      },
      {
        title: "Project ও current graduate-faculty fit তৈরি করুন",
        timing: "3–5 দিন focused research",
        description:
          "Guide-এ একটি research project select করতে হয়। Published faculty/project list research-fit evidence; এটি funded vacancy বা কোনো professor-এর guaranteed acceptance নয়।",
        actions: [
          "নয়টি project-এর description পড়ুন এবং আপনার prior software/data work-এর সঙ্গে সবচেয়ে defensible একটি primary ও একটি backup project বাছুন।",
          "NLP, text mining, AI application বা digital health হলে Virach Sornlertlamvanich-এর current work; AI/ML/CPS হলে Souichi Oka; Human–AI interaction হলে Ryota Nakamura-এর work পড়ুন।",
          "Data Science Business-এর জন্য Naoki Ishibashi এবং software project management/digital economy/NLP-এর জন্য Thatsanee Charoenporn-এর current faculty fit compare করুন।",
          "প্রতি fit-এর জন্য recent theme, আপনার relevant skill, proposed data/method এবং expected contribution—চার column-এর note বানান।",
          "Yusuke Takahashi Faculty of Data Science-এ active হলেও 2027 graduate teaching-faculty list-এ নেই; তাঁকে confirmed master's supervisor হিসেবে লিখবেন না।",
        ],
        readyWhen:
          "Chosen project, one primary faculty fit, one backup fit এবং প্রত্যেকটির specific evidence research plan-এ যুক্ত হয়েছে।",
      },
      {
        title: "Research plan ও দুইটি assessment report প্রস্তুত করুন",
        timing: "কমপক্ষে 1–2 সপ্তাহ; referee-কে যত দ্রুত সম্ভব বলুন",
        description:
          "Application-এর সবচেয়ে time-sensitive অংশ হলো research plan এবং দুইজন আলাদা evaluator-এর sealed assessment report। Generic recommendation-এর বদলে evidence-based evaluation দরকার।",
        actions: [
          "Research plan-এ title, problem, research question, related work, proposed data, method, evaluation, feasibility, ethics এবং two-year schedule রাখুন।",
          "Software-development background থাকলে শুধু app বানানোর কথা নয়—measurable research question, comparison baseline ও validation method দেখান।",
          "Academic applicant হলে current seminar/thesis supervisor এবং আরেকজন faculty; working-adult হলে direct supervisor ও আরেকজন manager/evaluator-এর মতো guide-aligned referees বাছুন।",
          "প্রত্যেক referee-কে official form, sealing/signing instruction, CV, transcript, research summary এবং আপনার internal deadline দিন।",
          "Statement, plan, transcript এবং interview story-তে একই academic goal ও Musashino-specific fit বজায় রাখুন।",
        ],
        readyWhen:
          "Final research plan আছে এবং দুইজন referee signed/sealed report সময়মতো দেবেন বলে নিশ্চিত করেছেন।",
      },
      {
        title: "Academic, identity ও translation documents complete করুন",
        timing: "Application window-এর আগে",
        description:
          "Original/certified record এবং translation rules ভুল হলে online form complete হলেও file অসম্পূর্ণ হতে পারে। সব document-এর একটি requirement tracker রাখুন।",
        actions: [
          "সব higher-education institution-এর original transcript ও graduation/expected-graduation certificate সংগ্রহ করুন।",
          "Document Japanese, English বা Chinese ছাড়া অন্য ভাষায় হলে required certified translation এবং certification rule follow করুন।",
          "Passport identity/status pages, residence card/status evidence এবং application photo প্রস্তুত করুন।",
          "Japan-এ Japanese-language school-এ কখনো পড়লে current/previous school-এর transcript ও attendance certificate requirement check করুন।",
          "International online-selection pledge এবং working-adult category হলে employment/work-history document complete করুন।",
        ],
        readyWhen:
          "প্রতিটি official checklist item-এর পাশে prepared, original/certified, translated এবং envelope-ready status দেখা যাচ্ছে।",
      },
      {
        title: "Web application, payment ও postal submission শেষ করুন",
        timing: "Intake I: 18–27 August 2026",
        description:
          "Portal entry application-এর এক অংশ। Fee payment এবং prescribed physical mailing—দুটিই deadline-এর মধ্যে না হলে submission complete হবে না।",
        actions: [
          "Web portal-এ passport অনুযায়ী নাম, degree, residence status, selected project এবং exam details input করুন।",
          "Entrance examination fee ¥35,000 এবং listed processing charge ¥780 budget করুন; payment receipt save করুন।",
          "Portal-generated forms print/sign করে photo, originals, sealed assessment reports এবং required evidence official order-এ সাজান।",
          "Japan-resident route-এ post office থেকে prescribed 簡易書留・速達 (simplified registered express) method ব্যবহার করে postmark deadline-এর মধ্যে পাঠান।",
          "Scanned full application, payment proof, tracking number এবং delivery status নিজের archive-এ রাখুন।",
        ],
        readyWhen:
          "Portal/payment confirmation আছে এবং tracked postal packet deadline rule মেনে accepted/delivered দেখাচ্ছে।",
      },
      {
        title: "Online essay, oral exam ও technology rehearsal করুন",
        timing: "Submission থেকে 20 September exam পর্যন্ত",
        description:
          "International route documents-only নয়। 100-mark Data Science essay এবং 100-mark interview/oral exam-এর জন্য concepts, structured writing, research defence ও language response practice দরকার।",
        actions: [
          "60 মিনিটে problem framing, assumptions, method, trade-off, ethical risk এবং conclusionসহ Data Science essay লেখার timed practice করুন।",
          "Statistics, machine learning, data/database fundamentals, evaluation metrics, bias/privacy এবং আপনার proposed domain-এর core concepts revise করুন।",
          "15 মিনিটের mock oral করুন: self-introduction, research question, method, why Musashino/project, limitations এবং career goal।",
          "Quiet private room, stable internet, approved single device, camera/microphone এবং required connection test প্রস্তুত করুন; virtual background বা recording ব্যবহার করবেন না।",
          "Japanese proof না দিয়ে English route নিলে পুরো mock interview clear English-এ record করে weak answers ঠিক করুন।",
        ],
        readyWhen:
          "Timed essay consistently complete হচ্ছে এবং 15-minute mock oral-এ notes ছাড়া research plan defend করতে পারছেন।",
      },
      {
        title: "Tuition, living cost ও scholarship fallback তৈরি করুন",
        timing: "Apply করার আগে; offer পাওয়ার পর final update",
        description:
          "এটি fully funded opportunity নয়। Admission decision এবং scholarship/fee support আলাদা; লিখিত award ছাড়া budget কমিয়ে দেখানো ঝুঁকিপূর্ণ।",
        actions: [
          "2027 final university charges লিখুন: year 1 ¥895,000, year 2 ¥645,000, base total ¥1,540,000; insurance/practical cost-এর buffer যোগ করুন।",
          "Ariake/Tokyo housing, food, transport, health insurance, visa এবং emergency expense দিয়ে 24-month budget বানান।",
          "Graduate Special Scholarship A up to ¥200,000 কেবল eligible Musashino undergraduate-to-master's progression-এর জন্য—external applicant হিসেবে এটি budget করবেন না।",
          "University-এর international scholarship page-এ post-enrolment/internal screening route দেখুন; nomination মানেই award নয়।",
          "JASSO Honors Scholarship ¥48,000/month হতে পারে, সাধারণত April entrant-এর 12 months; university recommendation, eligibility ও limited quota থাকায় এটিকে bonus scenario রাখুন।",
        ],
        readyWhen:
          "No-aid, partial-aid ও JASSO-award—তিন scenario-তে tuition ও living cost কীভাবে চলবে তার credible plan আছে।",
      },
    ],
    checklist: [
      "Correct Japan-resident 2027 application guide",
      "Residence status and eligibility-category check",
      "English-only study confirmation from admissions",
      "Valid original/official IELTS, TOEFL or TOEIC evidence",
      "Application form and compliant photo",
      "Research project selection",
      "Detailed research plan",
      "Original transcript",
      "Original graduation/expected-graduation certificate",
      "Certified translations, where required",
      "At least two signed and sealed assessment reports",
      "Passport and residence-status documents",
      "Japanese-language-school transcript/attendance, if applicable",
      "International online-exam pledge",
      "Work history, only when the selected category requires it",
      "¥35,000 examination fee + ¥780 processing charge",
      "Postal tracking and complete submission copy",
      "Two-year self-funding and living-cost budget",
    ],
    afterSubmission: [
      "Postal tracking, application portal, email এবং spam folder নিয়মিত monitor করুন; missing-item request এলে original record দেখে দ্রুত উত্তর দিন।",
      "University নির্ধারিত connection test ও online-exam instructions সময়মতো complete করুন।",
      "Essay ও oral preparation চালিয়ে যান—published minimum language score না থাকা selection সহজ হওয়ার প্রমাণ নয়।",
      "Offer পেলে 30 credits, thesis supervision language, payment deadline এবং any scholarship decision লিখিত documents দিয়ে আবার confirm করুন।",
      "Scholarship result না এলে self-funded enrolment নেওয়া সম্ভব কি না final 24-month budget দিয়ে সিদ্ধান্ত নিন।",
    ],
    cautions: [
      "Japan resident হয়েও overseas guide ব্যবহার করবেন না; দুই route-এর deadline, capacity ও delivery rule আলাদা।",
      "Overall capacity 10-কে 10 international seats ভাববেন না।",
      "No published minimum IELTS/GPA মানে low requirement, easy admission বা guaranteed acceptance নয়।",
      "English certificate accepted হওয়া আর পুরো degree English-taught হওয়া এক কথা নয়—written confirmation নিন।",
      "MOI, GRE/GMAT waiver বা unlisted document exception অনুমান করবেন না।",
      "Nonstandard eligibility assessment low GPA waiver নয়; credential category নির্ধারণের pre-screening।",
      "Web form submit করেই থামবেন না—fee এবং physical postal packet দুটিই required।",
      "Downloaded TOEFL/IELTS result একা যথেষ্ট ধরে নেবেন না; official score-delivery rule অনুসরণ করুন।",
      "Yusuke Takahashi-কে current graduate supervisor হিসেবে claim করবেন না; current graduate faculty list ব্যবহার করুন।",
      "JASSO বা university award written confirmation ছাড়া funding হিসেবে গণনা করবেন না।",
    ],
    officialLinks: [
      {
        label: "Graduate admissions downloads",
        href: "https://www.musashino-u.ac.jp/admission/download/graduate_school.html",
        description: "Latest guide, route-specific PDF এবং official update date এখান থেকে verify করুন।",
      },
      {
        label: "2027 Japan-resident English guide",
        href: "https://www.musashino-u.ac.jp/admission/Admission%20to%20Master%27s%20program%20in%20Data%20Science%20%28For%20Admission%20in%20April%202027%29.pdf",
        description: "Japan resident-এর dates, eligibility, documents, exam ও postal rules পড়ুন।",
      },
      {
        label: "2027 overseas-applicant guide",
        href: "https://www.musashino-u.ac.jp/admission/pdf/Admission%20to%20Master%27s%20program%20in%20Data%20Science%20%28International%20Applicants%29%28For%20Admission%20in%20April%202027%29.pdf",
        description: "শুধু Japan-এর বাইরে no-residence-status applicant-এর আলাদা one-round route compare করুন।",
      },
      {
        label: "Data Science program, projects & faculty",
        href: "https://www.musashino-u.ac.jp/academics/graduate_school/course/data_science/major/",
        description: "Degree, credits, nine research projects ও current graduate faculty verify করুন।",
      },
      {
        label: "2027 official fee table",
        href: "https://www.musashino-u.ac.jp/admission/pdf/646bef0aef06fc87f5caac1f9cc96c72.pdf",
        description: "First-year, second-year ও additional-cost notes-এর final 2027 figures দেখুন।",
      },
      {
        label: "International-student scholarships",
        href: "https://www.musashino-u.ac.jp/international/international-students/support/scholarships.html",
        description: "University screening, eligibility ও current external-award notices দেখুন।",
      },
      {
        label: "Graduate internal scholarships",
        href: "https://www.musashino-u.ac.jp/student-life/fees/scholarship/graduate_school_within.html",
        description: "Musashino progression-only Special Scholarship-এর restriction verify করুন।",
      },
      {
        label: "JASSO Honors Scholarship",
        href: "https://www.jasso.go.jp/en/ryugaku/scholarship_j/shoreihi/about.html",
        description: "¥48,000 monthly stipend, nomination, duration ও eligibility-এর official terms পড়ুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "hosei-iist-masters-scholarships-2027",
    country: "japan",
    university: "Hosei University",
    title: "Hosei IIST Master's + Scholarships: 2027 Planning Guide",
    summary:
      "English-based Information Science master's-এর supervisor matching, application preparation এবং realistic tuition-support strategy—2027 guideline প্রকাশের আগে কী করবেন।",
    label: "High-priority watch · 2027 guide pending",
    funding:
      "Past-cycle internal awards included ¥200,000 grants and eligible international-student tuition reduction; 2027 availability and terms must be rechecked.",
    duration: "Usually 2 years · intake and dates pending 2027 guide",
    audience: "Information science, computer science and engineering graduates seeking an English master's in Tokyo",
    realityCheck:
      "IIST একটি strong match হতে পারে, কিন্তু বর্তমানে verified document 2026 cycle-এর। Older official material-এ IELTS 5.5 দেখা যায়; 2027 requirement, deadline এবং scholarship terms নতুন guideline ছাড়া final ধরে নেওয়া যাবে না।",
    highlights: [
      "English-based graduate study এবং supervisor/research-lab fit application-এর কেন্দ্রীয় অংশ।",
      "2027 dates প্রকাশ না হওয়া পর্যন্ত prior-cycle timeline কেবল planning reference।",
      "Past-cycle Hosei Centennial ও Daddy Longlegs grants ¥200,000 level-এ ছিল; Bangladesh listed eligible countries-এর মধ্যে ছিল।",
      "Eligible privately financed international students-এর জন্য 20% tuition reduction past guidance-এ ছিল, admission-এর আগে guaranteed নয়।",
      "Tokyo living cost cover করার জন্য scholarship-এর বাইরে robust first-year budget প্রয়োজন।",
    ],
    fit: [
      "AI, data science, networks, software, systems বা information science-এ clear research interest আছে।",
      "Faculty/lab fit দেখিয়ে focused research plan লিখতে পারবেন।",
      "2027 official guide প্রকাশ হলে English ও document rules দ্রুত recheck করতে প্রস্তুত।",
      "Partial aid হলেও remaining tuition ও Tokyo living cost manage করার fallback আছে।",
    ],
    quickStart: [
      "IIST faculty/labs থেকে 3টি genuine research match shortlist করুন।",
      "2026 guide দিয়ে document inventory বানান, কিন্তু date ও requirement-এ 'verify 2027' tag দিন।",
      "IELTS 5.5-এর ওপর ভরসা না করে 6.0+ target রাখুন।",
      "Scholarship office-কে 2027 admission ও tuition-reduction publication date জিজ্ঞাসা করুন।",
    ],
    steps: [
      {
        title: "2027 guideline alert তৈরি করুন",
        timing: "এখন থেকে publication পর্যন্ত",
        description: "Admissions page নিয়মিত check করুন; পুরোনো guide দিয়ে final submission করবেন না।",
        actions: [
          "IIST admissions page মাসে অন্তত দুইবার monitor করুন।",
          "2027 PDF এলে deadline, eligibility, English score, fee ও submission channel comparison table-এ update করুন।",
          "Japan-resident applicant-এর category ও entrance procedure আলাদা কি না verify করুন।",
          "Unclear হলে IIST office-এর written reply save করুন।",
        ],
        readyWhen: "Official 2027 guide থেকে সব critical rules verified।",
      },
      {
        title: "Research lab ও supervisor fit তৈরি করুন",
        timing: "Guideline-এর অপেক্ষায় parallel কাজ",
        description: "Specific lab fit ছাড়া generic SOP competitive হবে না।",
        actions: [
          "Faculty publications থেকে problem–method–result notes বানান।",
          "নিজের thesis/projects কোন skill evidence দেয় তা map করুন।",
          "One-page proposal-এ feasible master's scope রাখুন।",
          "Official process অনুমতি দিলে questionnaire/contact route দিয়ে supervisor matching শুরু করুন।",
        ],
        readyWhen: "একটি primary lab, একটি backup lab ও tailored proposal ready।",
      },
      {
        title: "Documents ও English প্রস্তুত করুন",
        timing: "2026 সালের শরৎ থেকে",
        description: "Requirement বদলালেও transcript, CV, proposal ও recommendations আগে প্রস্তুত করা যায়।",
        actions: [
          "Official degree/transcript ও প্রয়োজনীয় translations সংগ্রহ করুন।",
          "IELTS/TOEFL-এর validity intake পর্যন্ত থাকবে কি না check করুন।",
          "SOP-তে research fit, career outcome ও Hosei-specific resources যুক্ত করুন।",
          "Recommenders-কে evidence-based examples দেওয়ার সময় দিন।",
        ],
        readyWhen: "2027 form ছাড়া বাকি core application package complete।",
      },
      {
        title: "Scholarship ও affordability যাচাই করুন",
        timing: "Application ও offer stage",
        description: "Small grant, tuition reduction এবং full funding এক জিনিস নয়।",
        actions: [
          "প্রতিটি award-এর amount, eligibility, renewal ও application timing লিখুন।",
          "20% reduction থাকলেও remaining tuition ও Tokyo living cost হিসাব করুন।",
          "Admission-before-scholarship cash-flow requirement আলাদা করুন।",
          "Written 2027 terms ছাড়া prior-cycle award ধরে financial commitment করবেন না।",
        ],
        readyWhen: "Minimum confirmed aid-এর ভিত্তিতে affordable decision নেওয়া যায়।",
      },
    ],
    checklist: [
      "Official 2027 IIST guide", "Faculty/lab shortlist", "Research proposal", "Degree and transcript",
      "Valid English evidence", "CV and SOP", "Recommendations", "Residence/category confirmation",
      "Scholarship eligibility table", "Tokyo living-cost budget",
    ],
    afterSubmission: [
      "Interview বা faculty contact-এর জন্য research summary practice করুন।",
      "Scholarship application admission form-এর অংশ নাকি post-admission process—written instructions follow করুন।",
      "Award notification-এর আগে full funding assume করবেন না।",
    ],
    cautions: [
      "2026 guideline-এর deadline বা IELTS rule 2027-এর জন্য automatically valid নয়।",
      "¥200,000 grant living ও tuition-এর ছোট অংশ; full scholarship নয়।",
      "Tuition reduction eligibility, selection ও continuation conditions পরিবর্তিত হতে পারে।",
    ],
    officialLinks: [
      { label: "IIST admissions", href: "https://iist.hosei.ac.jp/admission/", description: "2027 guideline ও current notices এখানে verify করুন।" },
      { label: "IIST 2026 application guide", href: "https://iist.hosei.ac.jp/wp/wp-content/uploads/2025/10/IIST-Application-Guideline-2026.pdf", description: "Planning reference মাত্র; 2027 submission-এর আগে নতুন guide নিন।" },
      { label: "IIST scholarships and grants", href: "https://iist.hosei.ac.jp/scholarships-grants/", description: "Current internal aid ও tuition support দেখুন।" },
    ],
  },
  {
    slug: "kic-ict-innovator-masters-2027",
    country: "japan",
    university: "The Kyoto College of Graduate Studies for Informatics",
    title: "KCGI ICT Innovator Master's: English-Intake Planning Guide",
    summary:
      "Applied IT master's-এর English course, TOEFL-equivalent requirement, application/interview preparation এবং intake-language verification।",
    label: "Admission-focused backup · English intake pending",
    funding: "Primarily self-funded; any tuition reduction or external scholarship must be confirmed for the exact intake.",
    duration: "2 years · English intake timing must be confirmed",
    audience: "Applicants seeking a professionally oriented IT, web business, AI or systems master's",
    realityCheck:
      "April 2027-এর currently visible course Japanese-medium; এটিকে English intake হিসেবে ধরে apply করা নিরাপদ নয়। Current English ICT Innovator information Fall 2026 cycle দেখায় এবং TOEFL iBT 80-equivalent English level উল্লেখ করে। তাই next English intake ও deadline admissions office-এর written confirmation ছাড়া final নয়।",
    highlights: [
      "Program academic research-এর পাশাপাশি practical IT/business application-এ জোর দেয়।",
      "English ICT Innovator route-এ TOEFL iBT 80-equivalent level current reference; exact accepted tests recheck করতে হবে।",
      "Selection-এ application documents ও interview গুরুত্বপূর্ণ।",
      "April 2027 Japanese-medium course এবং future English intake গুলিয়ে ফেলবেন না।",
      "Scholarship না পেলে full tuition ও Kyoto living-cost plan প্রয়োজন।",
    ],
    fit: [
      "Research-only degree-এর চেয়ে applied IT এবং career-oriented curriculum চান।",
      "Software, data, web, business IT বা digital transformation experience আছে।",
      "English intake date flexible এবং self-funded backup রাখতে পারেন।",
      "Interview-এ projects ও career plan practical examples দিয়ে explain করতে পারবেন।",
    ],
    quickStart: [
      "Admissions office-কে next English ICT Innovator intake, deadline ও campus লিখিতভাবে জিজ্ঞাসা করুন।",
      "TOEFL-equivalent accepted tests ও MOI possibility confirm করুন।",
      "Curriculum-এর সঙ্গে আপনার targeted IT career map করুন।",
      "Confirmed tuition/fees দিয়ে full two-year budget বানান।",
    ],
    steps: [
      {
        title: "Language ও intake confirmation নিন",
        timing: "কোনো fee দেওয়ার আগে",
        description: "Course title একই হলেও teaching language ও intake আলাদা হতে পারে।",
        actions: [
          "Exact English course name, entry month ও graduation language জিজ্ঞাসা করুন।",
          "2027 application guide এবং accepted English-score table চেয়ে নিন।",
          "Japan resident-এর application channel ও visa-document differences confirm করুন।",
          "Written reply application folder-এ save করুন।",
        ],
        readyWhen: "English delivery, deadline ও eligibility official reply/PDF-এ clear।",
      },
      {
        title: "Career-focused application তৈরি করুন",
        timing: "Intake confirmation-এর পর",
        description: "কেন applied IT master's এবং কোন skill gap পূরণ হবে তা concreteভাবে দেখান।",
        actions: [
          "2–3টি strongest technical/project outcomes quantify করুন।",
          "Desired concentration ও post-degree role connect করুন।",
          "CV, statement, transcript, degree ও English proof prepare করুন।",
          "Portfolio/GitHub relevant হলে clean project summaries দিন।",
        ],
        readyWhen: "Application আপনার past skills থেকে target career পর্যন্ত coherent story বলে।",
      },
      {
        title: "Interview practice করুন",
        timing: "Submission-এর পর",
        description: "Academic readiness-এর সঙ্গে practical motivation ও financial preparedness explain করতে হবে।",
        actions: [
          "Why KCGI, why this concentration, why now—প্রতিটির 60-second answer বানান।",
          "একটি technical project architecture ও নিজের contribution explain করুন।",
          "Weak grades/gap থাকলে factual improvement evidence দিন।",
          "Tuition plan নিয়ে honest, consistent answer প্রস্তুত রাখুন।",
        ],
        readyWhen: "English-এ concise, evidence-based interview দিতে পারবেন।",
      },
      {
        title: "Aid বনাম total cost compare করুন",
        timing: "Offer stage",
        description: "Any discount-এর amount নয়, net two-year cost দিয়ে decision নিন।",
        actions: [
          "Admission fee, tuition, facilities, insurance ও living cost লিখুন।",
          "Scholarship application timing ও continuation GPA condition দেখুন।",
          "Part-time work-কে tuition-এর primary source হিসেবে ধরবেন না।",
          "Payment deadline-এর আগে confirmed aid letter সংগ্রহ করুন।",
        ],
        readyWhen: "Net cost affordable এবং intake সত্যিই English-medium।",
      },
    ],
    checklist: [
      "Written English-intake confirmation", "Current application guide", "Accepted English evidence",
      "Degree and transcripts", "CV and career statement", "Project portfolio", "Interview preparation",
      "Fee schedule", "Scholarship terms", "Two-year net-cost budget",
    ],
    afterSubmission: [
      "Interview invitation ও additional-document requests monitor করুন।",
      "Offer letter-এ course language, campus এবং intake month আবার মিলিয়ে নিন।",
      "Payment-এর আগে scholarship/discount amount লিখিতভাবে verify করুন।",
    ],
    cautions: [
      "April 2027 listed course Japanese-medium; English বলে assume করবেন না।",
      "Fall 2026 English information next intake-এর date guarantee করে না।",
      "MOI বা alternative tests accepted কি না official confirmation ছাড়া দাবি করবেন না।",
    ],
    officialLinks: [
      { label: "KCGI admissions", href: "https://www.kcg.edu/en/admission/", description: "Current course language, intake ও guidelines দেখুন।" },
      { label: "ICT Innovator course", href: "https://www.kcg.edu/en/course/ict-innovator/", description: "English program structure ও current details verify করুন।" },
    ],
  },
  {
    slug: "saitama-esiti-mext-doctoral-2027",
    country: "japan",
    university: "Saitama University",
    title: "Saitama ESITI MEXT 2027: Doctoral Eligibility Guide",
    summary:
      "English doctoral MEXT route-এর degree, residence, age ও language conditions—এবং কেন Japan-resident master's applicant-এর জন্য এটি এখন suitable নয়।",
    label: "Doctoral MEXT · Not eligible from Japan",
    funding: "MEXT doctoral scholarship route; nomination and final MEXT approval are competitive.",
    duration: "Doctoral program · 2027 intake",
    audience: "Overseas applicants who already hold or will hold a master's degree and meet MEXT conditions",
    realityCheck:
      "Attachment-এ master's option হিসেবে থাকলেও official ESITI 2027 call একটি doctoral MEXT program। Applicant-কে application-এর সময় Japan-এর বাইরে থাকতে হবে, master's-level qualification থাকতে হবে এবং সাধারণত under 35 condition পূরণ করতে হবে। আপনি বর্তমানে Japan-এ থাকলে এই specific route-এ eligible নন।",
    highlights: [
      "Doctoral-only route—bachelor's থেকে direct master's admission নয়।",
      "Application time-এ outside Japan residence official eligibility condition।",
      "English benchmark IELTS 5.5, TOEFL iBT 72 বা CEFR B2 level।",
      "Research proposal ও prospective supervisor alignment অত্যন্ত গুরুত্বপূর্ণ।",
      "Profile future-এ condition পূরণ করলে official yearly call নতুন করে check করতে হবে।",
    ],
    fit: [
      "আপনার master's degree আছে বা enrolment-এর আগে complete হবে।",
      "Application-এর সময় Japan-এর বাইরে থাকবেন।",
      "Engineering/IT innovation-এ doctoral research proposal প্রস্তুত।",
      "Age, nationality, arrival ও MEXT conditions পূরণ করেন।",
    ],
    quickStart: [
      "বর্তমান Japan residence-এর কারণে এই call-এ সময় ব্যয় না করে eligible master's options prioritize করুন।",
      "Future doctoral plan হলে ESITI annual page bookmark করুন।",
      "Master's thesis থেকে publishable doctoral question develop করুন।",
      "Residence status বদলালেও next call-এর exact eligibility writtenভাবে verify করুন।",
    ],
    steps: [
      {
        title: "Hard eligibility gate চালান",
        timing: "প্রথমে",
        description: "Research fit দেখার আগেই degree, residence, age ও nationality conditions pass করতে হবে।",
        actions: [
          "Master's completion evidence আছে কি না check করুন।",
          "Application date-এ physical residence Japan-এর বাইরে কি না verify করুন।",
          "Age cut-off ও eligible nationality rules official PDF থেকে পড়ুন।",
          "একটিও hard condition fail করলে current call বাদ দিন।",
        ],
        readyWhen: "সব mandatory eligibility condition documentary evidence-এ pass।",
      },
      {
        title: "Doctoral research fit তৈরি করুন",
        timing: "Eligible হলে",
        description: "Broad IT interest নয়—novel research question ও faculty alignment দরকার।",
        actions: [
          "ESITI research fields এবং potential supervisors review করুন।",
          "Master's research, methods এবং results conciseভাবে লিখুন।",
          "Proposal-এ novelty, methodology, data/resources ও societal impact দিন।",
          "Supervisor contact instructions official call অনুযায়ী follow করুন।",
        ],
        readyWhen: "Doctoral-level proposal ও relevant supervisor match ready।",
      },
      {
        title: "MEXT file ও language proof প্রস্তুত করুন",
        timing: "Official deadline-এর আগে",
        description: "University screening এবং MEXT approval আলাদা stage হতে পারে।",
        actions: [
          "IELTS 5.5/TOEFL 72/B2-equivalent valid evidence দিন।",
          "Degree, transcripts, recommendations, health/identity forms call অনুযায়ী সংগ্রহ করুন।",
          "All documents-এর name, dates ও research title consistent রাখুন।",
          "Nomination-কে final award মনে করবেন না।",
        ],
        readyWhen: "Complete official file submitted and nomination/approval stages understood।",
      },
    ],
    checklist: [
      "Master's qualification", "Outside-Japan residence", "Age and nationality eligibility",
      "English B2 evidence", "Doctoral proposal", "Supervisor fit", "Official MEXT forms",
      "Transcripts and degrees", "Recommendations", "Final-award contingency plan",
    ],
    afterSubmission: [
      "University screening, interview ও MEXT final decision আলাদা করে track করুন।",
      "Residence/visa change হলে immediately program office-কে জানান।",
      "Nomination পেলেও final scholarship letter ছাড়া relocation commitment করবেন না।",
    ],
    cautions: [
      "Japan-resident applicant এই specific 2027 route-এর target group নয়।",
      "এটি master's scholarship নয়; master's qualification required doctoral route।",
      "Language threshold পূরণ করলেই nomination বা final MEXT award নিশ্চিত নয়।",
    ],
    officialLinks: [
      { label: "ESITI admissions", href: "https://park.saitama-u.ac.jp/~rese/admission.html", description: "Current call ও updates দেখুন।" },
      { label: "ESITI 2027 guidelines", href: "https://park.saitama-u.ac.jp/~rese/files/1.%20ESITI%20Aplication%20Guidelines%202027.pdf", description: "Doctoral, residence, age, degree ও English conditions পড়ুন।" },
    ],
  },
  {
    slug: "meiji-governance-studies-masters-watch-2027",
    country: "japan",
    university: "Meiji University",
    title: "Meiji Governance Studies MPP: September 2027 Planning Guide",
    summary:
      "Tokyo-এর Surugadai Campus-এ English-taught professional Master of Public Policy—latest IELTS 5.5 reference, self-funded/MEXT route, exact costs, policy-tech faculty fit এবং 2027 guide প্রকাশের আগের preparation process।",
    label: "Upcoming · Self-funded 2027 guide pending · MEXT 2027 closed in Bangladesh",
    funding:
      "Self-funded by default; competitive school/university aid may reduce cost. Full MEXT funding is a separate, earlier Embassy Recommendation route only—not a benefit of ordinary MPP admission.",
    duration: "2 years · September intake · 2026 curriculum reference: 40+ credits and an English research paper",
    audience:
      "Bachelor's graduates and professionals targeting public policy, digital government, cybersecurity/AI governance, development or public finance",
    realityCheck:
      "Programটি officialভাবে confirmed এবং September 2026 intake-এর latest amended guide-এ IELTS Academic 5.5 / পুরোনো TOEFL iBT scale-এ 72 সত্যিই accepted। তবে সেই application 3 April 2026-এ বন্ধ হয়েছে; September 2027 self-funded guide এখনো প্রকাশিত হয়নি। Latest guide-এ course intake capacity ছিল ‘a few students’, document screening-এর পরে timed online essay ও interview আছে—তাই minimum English score পূরণ মানেই সহজ admission নয়। এটি CS/MBA degree নয়; software/IT background-কে digital-government, cyber/AI policy বা technology-governance problem-এ রূপান্তর করতে হবে।",
    highlights: [
      "সঠিক route: Graduate School of Governance Studies-এর International Public Policy Course; degree হলো Master of Public Policy (Professional Graduate School Degree), location Kanda-Surugadai, Tokyo। এটি আলাদা Graduate School of Global Governance-এর doctoral program নয়।",
      "Latest 2026 course structure ছিল 2 years, minimum 40 credits, Research Method 1/2 ও Research Paper 1/2; English-track research paper-এর সব অংশ English-এ লিখতে হয়।",
      "Latest amended threshold: IELTS Academic 5.5+; Meiji notice-এর exact wording অনুযায়ী 20 January 2026-এর আগে নেওয়া TOEFL iBT-তে 72+ অথবা 21 January 2026-এর পরে নেওয়া test-এ new-scale 4.0+। Transition date হলে admissions desk-এ confirm করুন। Score application deadline-এর দিন দুই বছরের মধ্যে issued হতে হতো।",
      "TOEIC, TOEFL ITP, TOEFL iBT Home Edition এবং IELTS General Training accepted ছিল না। শুধু first language English হলে explicit exemption ছিল; MOI certificate দিয়ে waiver-এর নিশ্চয়তা নেই।",
      "Latest guide-এ Japanese, GRE বা GMAT required-document/eligibility item নয় এবং numerical minimum GPA প্রকাশ করা হয়নি। তবু transcript, proposal, reasoning এবং interview holistic selection-এর অংশ।",
      "2026 reference timeline: application 20 March–3 April, document result প্রায় 16 April, 45-minute online essay ও interview 27 April, final result 14 May, admission procedure 12 June। এগুলো past dates—2027 prediction নয়।",
      "2026 academic-charge reference: Fall ¥868,000 + calendar 2027 ¥1,333,000 + Spring 2028 ¥668,000 = ¥2,869,000; এর বাইরে ¥35,000 non-refundable screening fee, Tokyo living, housing, travel, visa, books এবং কিছু course cost থাকতে পারে।",
      "Governance Studies-এর Japanese school page—যার information April 2025-এর—admission-এর সঙ্গে competitive scholarship apply করার কথা বলে: প্রায় half school intake, বছরে ¥200,000–¥550,000, সাধারণত 2 years subject to first-year performance। September 2026 English IPP guide এই award/procedure confirm করে না; 2027 eligibility/amount Meiji লিখিতভাবে confirm না করা পর্যন্ত unverified ধরুন।",
      "Other competitive references include Meiji's post-enrollment private-international-student aid ¥50,000/month for up to 6 months per award/semester and JASSO ¥48,000/month up to 12 months; nomination, budget ও current guideline-এর ওপর নির্ভর করে—automatic নয়।",
      "MEXT route Embassy Recommendation only; Meiji স্পষ্টভাবে University Recommendation নেয় না। MEXT awardee-র direct September MPP start-ও admission এবং individual MEXT approval ছাড়া automatic নয়।",
      "12 August 2026 status: MEXT 2027-এর initial embassy-application stage ইতিমধ্যে শেষ; শুধু embassy first screening pass করা applicant 1 September 2026 JST-এর মধ্যে Meiji provisional-acceptance request করতে পারেন। অন্যদের next country-specific MEXT cycle monitor করতে হবে।",
      "2027 MEXT benefit reference: non-regular/research student ¥143,000/month, regular master's/professional student ¥144,000/month, entrance/matriculation/tuition waiver এবং rule-based economy airfare; payment/airfare conditions ও government budget changes apply।",
    ],
    fit: [
      "Recognized bachelor's/equivalent degree আছে; foreign-education route-এ সাধারণত 16 years education বা guide-এ দেওয়া equivalent category পূরণ করেন।",
      "Software/IT experience থেকে public-service digitization, privacy, cybersecurity law, technology governance, smart-city participation বা data-driven policy-এর একটি concrete problem দাঁড় করাতে পারবেন; AI-policy theme নিলে current faculty fit আলাদাভাবে verify করবেন।",
      "Maximum 2,000-word English Research Proposal, evidence-based policy argument, 45-minute timed essay এবং online interview-এর জন্য প্রস্তুত।",
      "Professional public-policy degree চান—coding-heavy CS master's, technical thesis lab বা conventional MBA খুঁজছেন না।",
      "Scholarship না পেলেও ¥2.869m reference academic cost এবং Tokyo living cost cover করার credible financial proof/backup plan বানাতে পারবেন।",
      "2027 guide না আসা পর্যন্ত score validity, dates ও aid ধরে না নিয়ে অন্য realistic applications-ও active রাখবেন।",
    ],
    quickStart: [
      "Official Examination page bookmark করে September 2027 guideline publication-এর monthly reminder বসান; current page-এ spring intake নেই, 2027 page এলে recheck করুন।",
      "IELTS Academic 5.5-এর নিচে হলে accepted test book করুন; score validity এমন রাখুন যেন future 2027 deadline-এর দিন দুই বছরের মধ্যে থাকে।",
      "Problem → affected people/institution → evidence gap → proposed method → policy impact—এই পাঁচ heading-এ English concept note লিখুন।",
      "Degree/transcript, signed recommendation, passport/residence card, notarized translation এবং financial proof-এর document tracker এখনই বানান।",
    ],
    steps: [
      {
        title: "2027 status ও সঠিক admission route lock করুন",
        timing: "Now · guide প্রকাশ না হওয়া পর্যন্ত monthly check",
        description:
          "Ordinary self-funded MPP application এবং MEXT Embassy Recommendation দুইটি আলাদা calendar ও selection chain। প্রথমে নিজের route লিখে না রাখলে closed date বা ভুল graduate school follow করার ঝুঁকি থাকে।",
        actions: [
          "Self-funded হলে International Public Policy Course / Professional Degree Program / September enrollment—এই exact তিনটি label দিয়ে official Examination page monitor করুন।",
          "2027 guide প্রকাশ হলে application opening, arrival deadline, exam, result ও payment date সরাসরি PDF থেকে calendar-এ নিন; 2026 dates copy করবেন না।",
          "MEXT চাইলে নিজের nationality/home-country Japanese embassy-এর next Research Students call দিয়ে শুরু করুন; Meiji ordinary admission portal থেকে MEXT চাওয়া যায় না।",
          "Eligibility বা publication timing অস্পষ্ট হলে gabaken@mics.meiji.ac.jp-এ one-email-one-question format-এ লিখুন; self-funded route-এ prior professor consent latest guide-এ required ছিল না।",
        ],
        readyWhen:
          "আপনার route, exact program name ও source links এক পাতায় আছে এবং 2027 PDF প্রকাশ হলে কোন পাঁচটি item recheck করবেন তা লেখা।",
      },
      {
        title: "English ও degree eligibility evidence প্রস্তুত করুন",
        timing: "4–8 months before expected application",
        description:
          "2026 guide useful planning baseline, কিন্তু 2027 guide-ই final authority। Minimum score-এর পাশাপাশি accepted test version, original report এবং issue-date rule ঠিক রাখা জরুরি।",
        actions: [
          "IELTS হলে Academic Module নিন; General Training নয়। 2026 rule-এ original IELTS Report Form লাগত। TOEFL official score ETS থেকে institution code C318-এ পাঠাতে হতো; নিজের Test Taker/Examinee Score Report যথেষ্ট ছিল না।",
          "TOEIC, ITP বা Home Edition result দিয়ে file ready ভাববেন না; first language English না হলে MOI waiver ধরে test বাদ দেবেন না।",
          "Score report-এ face photo এবং passport-এর সঙ্গে matching name/date of birth আছে কি না check করুন; 2027 delivery rule প্রকাশ হলে আবার মিলান।",
          "Bachelor's/expected degree certificate এবং সব official transcript সংগ্রহ করুন; copy হলে latest guide অনুযায়ী notarization এবং non-English record-এর certified English/Japanese translation করুন।",
          "Education duration/equivalence নিয়ে সন্দেহ থাকলে application period শুরুর অন্তত দুই সপ্তাহ আগে admissions office-কে required form/document দিয়ে pre-check চাইুন।",
        ],
        readyWhen:
          "2027 rule-এর সঙ্গে accepted, valid official English result এবং degree-equivalency evidence line-by-line মেলে।",
      },
      {
        title: "2,000-word Research Proposal ও faculty fit বানান",
        timing: "Draft 8–12 weeks early",
        description:
          "2026 form Personal Statement নামে থাকলেও document heading ‘Research Proposal’ চেয়েছিল এবং maximum 2,000 English words/1.5 spacing ছিল। Technical solution নয়, public-policy problem ও implementable analysis দেখান।",
        actions: [
          "Context, policy problem, research question, literature/evidence gap, method/data, ethics/limitations, expected output এবং career impact—এই structure-এ first draft লিখুন।",
          "Harumichi Yuasa-এর e-government, privacy/data protection, cybersecurity law ও Global Cyber Governance fit দেখুন; technology-policy direction-এ এটি strongest starting point হতে পারে।",
          "Public participation/science-technology policy হলে Masahiro Matsuura; public finance/social welfare হলে Hideaki Tanaka-এর current courses/profile মিলান। এগুলো fit examples—advertised vacancy বা supervision promise নয়।",
          "নিজের software experience-কে feature list না বানিয়ে government/user problem, security/privacy trade-off, affected stakeholders এবং measurable policy outcome-এ translate করুন।",
          "Proposal-এ শুধুই faculty name না লিখে relevant course/research area এবং কেন professional MPP দরকার—সুনির্দিষ্টভাবে justify করুন।",
        ],
        readyWhen:
          "Independent reader problem, question, feasible method, Meiji-specific fit এবং post-MPP impact একবার পড়ে বুঝতে পারেন।",
      },
      {
        title: "Application documents ও postal logistics সম্পূর্ণ করুন",
        timing: "6–10 weeks before deadline",
        description:
          "Latest cycle paper-based arrival deadline ব্যবহার করেছে: কিছু file আগে email করতে হলেও originals নির্দিষ্ট office-এ deadline-এর মধ্যে পৌঁছাতে হতো। Courier transit ও notarization-এর সময় budget করুন।",
        actions: [
          "Latest checklist অনুযায়ী E-1, Form B, two color photos, Research Proposal, degree, transcripts, English score, recommendation, passport এবং non-Japanese applicant-এর financial-support form map করুন। আলাদা CV 2026 checklist-এ ছিল না; E-1-এ education এবং latest two full-time jobs/military-service history চাওয়া হয়েছিল।",
          "Recommender হিসেবে work supervisor বা undergraduate academic supervisor বাছুন; 2026 guide handwritten/physical signature চেয়েছিল এবং digital signature নেয়নি।",
          "Japan resident হলে residence card-এর front/back copy এবং current address/status information প্রস্তুত রাখুন; overseas হলে trackable EMS/DHL-equivalent courier window হিসাব করুন।",
          "Form E-1 ও Research Proposal-এর pre-email rule, original-delivery address এবং ¥35,000 non-refundable payment instruction 2027 PDF থেকে পুনরায় মিলান।",
          "Offer এলে 2026 rule অনুযায়ী guarantor অবশ্যই nominate করতে হতো: Japan-resident parent/relative → Japan-resident acquaintance → শুধু প্রথম দুইটি সম্ভব না হলে overseas parent/relative; 2027 guide-এ recheck করুন।",
        ],
        readyWhen:
          "Checklist-এর প্রতিটি item correct format-এ, courier bufferসহ ready এবং admissions office-এর address/payment rule double-checked।",
      },
      {
        title: "Online essay ও interview practice করুন",
        timing: "4–6 weeks before examination",
        description:
          "Document screening pass করলেই latest route-এ English essay ও Zoom interview ছিল। Reasoning, clear policy argument এবং persuasive explanation programটি গুরুত্ব দেয়।",
        actions: [
          "45 minutes-এ issue, stakeholders, options, evidence, trade-offs, recommendation ও limitationসহ 500–700-word policy response practice করুন।",
          "Proposal-এর problem, method, data access, why Meiji, why professional MPP এবং career impact-এর 60-second ও 3-minute উত্তর তৈরি করুন।",
          "GPA/discipline shift, weak grades বা work-study gap থাকলে factual explanation এবং evidence of readiness প্রস্তুত করুন।",
          "Quiet private room, stable connection, camera, microphone, Zoom এবং browser test করুন; latest guide-এর JST schedule নিজের timezone-এ convert করুন।",
        ],
        readyWhen:
          "Timed mock essay শেষ করতে পারেন এবং follow-up question-এ proposal defend করতে পারেন—memorized script ছাড়াই।",
      },
      {
        title: "Net cost ও scholarship strategy lock করুন",
        timing: "Before submission and again before accepting an offer",
        description:
          "Admission, internal scholarship, JASSO এবং MEXT একই জিনিস নয়। Written award না পাওয়া পর্যন্ত self-funded scenario দিয়েই financial proof ও decision budget বানান।",
        actions: [
          "2026 ¥2,869,000 academic-charge reference-এর সঙ্গে ¥35,000 screening fee, Tokyo rent/deposit, food, transport, insurance, travel, visa এবং emergency buffer যোগ করুন।",
          "Governance Studies scholarship-এর 2027 English-course availability এবং admission-form-এর সঙ্গে apply করার procedure admissions office থেকে confirm করুন।",
          "Post-enrollment Meiji/JASSO aid-এর eligibility, semester window, nomination এবং combination restrictions আলাদা spreadsheet-এ লিখুন।",
          "MEXT-এর default Meiji status non-degree research student; regular MPP-তে যেতে degree entrance exam pass করতে হয়। Direct September MPP entry exceptional—আগে MPP admission এবং case-by-case MEXT approval দুটিই লাগে। University Recommendation চাইবেন না।",
          "Offer letter, scholarship decision ও guarantor/visa requirements না দেখে non-refundable payment বা enrollment decision নেবেন না।",
        ],
        readyWhen:
          "Zero-scholarship এবং confirmed-aid—দুই budget-ই আছে; only written funding দিয়ে net cost কমানো হয়েছে।",
      },
    ],
    checklist: [
      "Official September 2027 guideline and forms",
      "International Public Policy Course / MPP route confirmed",
      "Valid IELTS Academic or accepted TOEFL official score",
      "Application checklist, E-1 and Form B",
      "Two current color ID photos in the required size",
      "Maximum 2,000-word English Research Proposal",
      "Original degree certificate/transcripts, or notarized copies if originals cannot be submitted",
      "Certified English/Japanese translations where required",
      "Work or undergraduate academic supervisor recommendation with a non-digital signature",
      "Passport and Japan residence-card copies where applicable",
      "Financial Support Form and supporting proof",
      "Screening-fee receipt and tracked-delivery plan",
      "Self-funded Tokyo budget and separate scholarship matrix",
      "Timed online essay and interview practice",
    ],
    afterSubmission: [
      "Courier tracking, emailed-file copy, payment receipt এবং admissions acknowledgement এক folder-এ রাখুন; missing-document request daily check করুন।",
      "Document-screening result এবং essay/interview time JST-তে calendar করুন; official instruction ছাড়া exam link share বা অন্য device ব্যবহার করবেন না।",
      "Admission result, school scholarship, Meiji/JASSO aid এবং MEXT status আলাদা column-এ track করুন—একটির result অন্যটি নিশ্চিত করে না।",
      "Offer পেলে payment deadline, fee breakdown, guarantor, residence/visa, orientation এবং September arrival plan লিখিত documents থেকে মিলান।",
    ],
    cautions: [
      "Older Meiji brochure/general page-এ IELTS 6.0 / TOEFL 79 থাকতে পারে; later cycle-specific amended 2026 guide-এ 5.5 / old-scale 72 (বা new-scale 4.0)। TOEFL transition-date wording ambiguous; 2027 guide প্রকাশ হলে সেটিই final authority।",
      "September 2026 application closed; 20 March–3 April datesকে September 2027 deadline হিসেবে ব্যবহার করবেন না। Spring intake নেই।",
      "Minimum English score, no numerical GPA floor বা no GRE/GMAT—কোনোটিই admission সহজ বা guaranteed করে না; latest route-এ capacity ছিল মাত্র ‘a few students’।",
      "Governance Studies MPP-কে similarly named Global Governance doctorate, technical CS master's বা MBA-এর সঙ্গে mix করবেন না।",
      "Faculty profiles research-fit examples; open vacancy, guaranteed supervisor acceptance বা application-এর আগে professor approval requirement বোঝায় না। Official eligibility contact হলো Governance Studies Desk।",
      "School/university/JASSO aid competitive এবং rules বদলাতে পারে; MEXT Embassy Recommendation-only এবং ordinary admission-এর automatic funding নয়।",
      "বর্তমানে Japan-এ থাকা applicant-এর জন্য MEXT Embassy route actionable ধরে নেবেন না; residence/enrollment rules, home-country screening এবং return requirement নিজের nationality-এর 2027 MEXT guideline ও Japanese mission থেকে confirm করুন।",
      "12 August 2026-এ MEXT 2027-এর initial embassy application নতুন করে শুরু করার সুযোগ নেই; first screening pass না করলে next country-specific cycle-এর জন্য প্রস্তুতি নিন।",
    ],
    officialLinks: [
      { label: "MPP examination page", href: "https://www.meiji.ac.jp/cip/english/graduate/governance/examination.html", description: "September intake status, new guideline, forms ও official contact monitor করুন।" },
      { label: "Latest amended 2026 guide", href: "https://www.meiji.ac.jp/cip/english/graduate/governance/enjsp30000009iie-att/a1772498746287.pdf", description: "IELTS/TOEFL, selection, documents, past dates, fee ও guarantor rules-এর planning reference।" },
      { label: "TOEFL scoring amendment", href: "https://www.meiji.ac.jp/cip/english/graduate/governance/news/exam2026.html", description: "Old 72 এবং new 4.0 scale-এর official clarification পড়ুন।" },
      { label: "Program and curriculum", href: "https://www.meiji.ac.jp/cip/english/graduate/governance/", description: "Professional MPP, English track, curriculum এবং school structure বুঝুন।" },
      { label: "Governance Studies scholarship", href: "https://www.meiji.ac.jp/mugs2/fellowship/scholarship.html", description: "April 2025-dated school scholarship reference দেখুন; English IPP/2027 applicability লিখিতভাবে recheck করুন।" },
      { label: "International-student financial aid", href: "https://www.meiji.ac.jp/cip/english/admissions/financial.html", description: "Meiji, JASSO ও other competitive aid-এর current conditions দেখুন।" },
      { label: "MEXT Embassy route", href: "https://www.meiji.ac.jp/cip/english/graduate/governance/mextscholarship.html", description: "Embassy-only route এবং conditional direct MPP arrangement বুঝুন।" },
      { label: "MEXT 2027 provisional acceptance", href: "https://www.meiji.ac.jp/cip/prospective/mext_er/japanese.html", description: "First-screening-pass requirement, default research-student status ও 1 September 2026 JST Meiji deadline দেখুন।" },
      { label: "Bangladesh MEXT status", href: "https://www.bd.emb-japan.go.jp/itpr_ja/00_000706.html", description: "Bangladeshi applicant-এর MEXT 2027 Research Students application closed status দেখুন।" },
      { label: "MEXT 2027 Research guidelines", href: "https://www.bd.emb-japan.go.jp/files/101020577.pdf", description: "Nationality, Japan-residence/student-status, visa, stipend, fee waiver ও airfare conditions পড়ুন।" },
      { label: "Current faculty", href: "https://www.meiji.ac.jp/cip/english/graduate/governance/faculty.html", description: "Yuasa, Matsuura, Tanaka ও অন্যান্য faculty-এর current fields/courses যাচাই করুন।" },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "tumsat-logistics-information-masters-2027",
    country: "japan",
    university: "Tokyo University of Marine Science and Technology",
    title: "TUMSAT Logistics & Information Engineering: 2027 Master's Guide",
    summary:
      "Logistics, transport, information systems ও operations research master's-এর English-test exemption, technical selection, faculty fit এবং second-round planning।",
    label: "Medium option · Technical selection",
    funding: "Primarily admission route; tuition waivers and JASSO or other awards are separate, competitive processes.",
    duration: "2 years · April 2027 secondary-round timing to verify",
    audience: "Engineering, CS, information, logistics, transport, OR or quantitative graduates",
    realityCheck:
      "IELTS 5.5, TOEFL iBT 72 (official table-এর relevant scale) বা TOEIC 700 foreign-language written exam exemption দিতে পারে; এটি admission বা technical assessment waiver নয়। Specialized subject/oral selection এবং research fit-এর প্রস্তুতি এখনও প্রয়োজন।",
    highlights: [
      "Logistics, transportation, optimisation ও information engineering cross-disciplinary study।",
      "Qualifying English score written foreign-language exam-এ standardized 80-point treatment দিতে পারে।",
      "Technical/specialized assessment ও oral examination আলাদা selection components।",
      "April 2027 secondary application official schedule অনুযায়ী December 2026 window এবং February 2027 examination area-তে; final PDF-এর exact dates follow করুন।",
      "Professor Takanori Sakai urban freight, city logistics এবং logistics systems-এর relevant faculty example।",
    ],
    fit: [
      "CS/data backgroundকে logistics, optimisation বা transportation problem-এ apply করতে চান।",
      "Calculus, statistics, algorithms, OR বা engineering fundamentals revise করতে প্রস্তুত।",
      "IELTS 5.5+ আছে কিন্তু technical selection-এর জন্য আলাদা preparation করবেন।",
      "Research question relevant faculty-এর ongoing work-এর সঙ্গে match করে।",
    ],
    quickStart: [
      "Program curriculum ও faculty directory থেকে logistics-information overlap map করুন।",
      "Current English-score exemption table save করুন এবং score validity check করুন।",
      "Secondary recruitment-এর official 2027 PDF প্রকাশ/updates monitor করুন।",
      "Technical syllabus/past questions পাওয়া গেলে weekly revision plan শুরু করুন।",
    ],
    steps: [
      {
        title: "Program ও supervisor fit নিশ্চিত করুন",
        timing: "এখনই",
        description: "Logistics label-এর ভেতরে operations, transport, systems ও data topics আলাদা—নিজের track নির্দিষ্ট করুন।",
        actions: [
          "একটি problem area বাছুন: urban freight, supply chain, optimisation, transport data বা information systems।",
          "Faculty profiles ও publications থেকে 2–3টি match shortlist করুন।",
          "নিজের coursework/projects-এর relevant mathematical ও computing skills লিখুন।",
          "Contact required/allowed হলে concise proposal দিয়ে faculty-এর guidance নিন।",
        ],
        readyWhen: "একটি defensible research theme ও relevant faculty match আছে।",
      },
      {
        title: "English exemption correctly ব্যবহার করুন",
        timing: "Application-এর আগে",
        description: "Score English written exam replace করতে পারে; অন্য selection components নয়।",
        actions: [
          "IELTS 5.5/TOEFL/TOEIC score type এবং validity official rule-এর সঙ্গে মিলান।",
          "Original score-report delivery method ও deadline check করুন।",
          "Exemption-এর standardized-score treatment বুঝে রাখুন।",
          "English score ভালো হলেও oral explanation practice চালু রাখুন।",
        ],
        readyWhen: "Score accepted, valid এবং required channel-এ deliverable।",
      },
      {
        title: "Technical ও oral selection প্রস্তুত করুন",
        timing: "কমপক্ষে 8–12 সপ্তাহ",
        description: "Admission-এর সবচেয়ে বড় ঝুঁকি English নয়, specialized academic selection হতে পারে।",
        actions: [
          "Official guideline থেকে exam subjects ও permitted materials লিখুন।",
          "Math, statistics, programming/algorithms, OR ও field fundamentals gap-audit করুন।",
          "Past questions বা department guidance থাকলে timed practice করুন।",
          "Research proposal, methods ও expected impact-এর oral answers practice করুন।",
        ],
        readyWhen: "Technical mock performance stable এবং proposal viva-ready।",
      },
      {
        title: "Secondary-round application submit করুন",
        timing: "December 2026 window · exact dates recheck",
        description: "Schedule page planning signal দেয়; final recruitment guide-এর exact dates decisive।",
        actions: [
          "Latest PDF-এ application, exam, result ও enrolment deadlines record করুন।",
          "Degree, transcript, research plan, score report ও residence documents complete করুন।",
          "Fee এবং original-document delivery buffer রাখুন।",
          "February 2027 exam logistics আগে plan করুন।",
        ],
        readyWhen: "Complete file received এবং exam arrangement confirmed।",
      },
    ],
    checklist: [
      "Current 2027 recruitment guide", "Research area and faculty match", "Degree and transcripts",
      "Research plan", "Valid English score", "Technical-exam syllabus", "Mock-exam plan",
      "Oral interview preparation", "Residence documents", "Funding budget",
    ],
    afterSubmission: [
      "Exam schedule বা venue changes official page ও email-এ monitor করুন।",
      "English exemption confirmed হলেও technical preparation বন্ধ করবেন না।",
      "Offer পেলে tuition waiver/JASSO processes student office থেকে আলাদা করে জানুন।",
    ],
    cautions: [
      "IELTS 5.5 admission guarantee নয়; এটি qualifying English-test treatment মাত্র।",
      "Machine-translated schedule-এর garbled dates ব্যবহার না করে Japanese/official PDF cross-check করুন।",
      "Faculty availability ও supervision willingness আগে confirm করা ভালো।",
    ],
    officialLinks: [
      { label: "Graduate admission schedule", href: "https://www.kaiyodai.ac.jp/en/entranceexamination/graduate/schedule/", description: "Recruitment rounds ও latest guide দেখুন।" },
      { label: "English score exemption", href: "https://www.kaiyodai.ac.jp/en/entranceexamination/graduate/docs/toeic.html", description: "IELTS/TOEFL/TOEIC treatment-এর official table পড়ুন।" },
      { label: "Logistics program", href: "https://www.g2.kaiyodai.ac.jp/cmtl5/english/ryutu.html", description: "Curriculum ও research scope দেখুন।" },
      { label: "Takanori Sakai profile", href: "https://tumsatdb.kaiyodai.ac.jp/html/100000907_en.html", description: "Urban freight এবং city-logistics research fit দেখুন।" },
    ],
  },
  {
    slug: "nucb-msc-management-scholarships-2027",
    country: "japan",
    university: "NUCB Business School",
    title: "NUCB MSc Management / Business Analytics & AI: 2027 Guide",
    summary:
      "English MSc admission rounds, IELTS/MOI route, 2027 tuition, scholarship reality এবং Japan-resident applicant-এর step-by-step application plan।",
    label: "Self-funded backup · IELTS 6.0/MOI",
    funding: "Competitive tuition remission can reach up to 80%; award level depends on profile and is not guaranteed.",
    duration: "2 years · Spring or Fall 2027",
    audience: "Applicants targeting management, business analytics, AI and international business careers",
    realityCheck:
      "Official standard is IELTS 6.0, TOEFL iBT 80 বা TOEIC 800—not IELTS 5.5। English-medium previous degree evidence preliminary screening-এ বিবেচিত হতে পারে, কিন্তু waiver written confirmation দরকার। Official 2027 fee table অনুযায়ী MSc Management বা MSc Business Analytics & AI total tuition/fees প্রায় ¥3.37 million (Year 1 ¥1.82m + Year 2 ¥1.55m)।",
    highlights: [
      "Spring/Fall 2027 early rounds: 26 July–24 October application, 30–31 October exam; 25 October–12 December application, 18–19 December exam।",
      "Later 30 January ও 27 February rounds domestic applicants-এর জন্য listed—exact eligibility portal-এ check করুন।",
      "Up to 80% tuition remission possible, কিন্তু qualifying profile, GMAT/GRE এবং academic performance-এর ওপর competitive।",
      "MSc Business Analytics & AI technical-business bridge হিসেবে useful; program title ও curriculum fit আগে verify করুন।",
      "MOI consideration থাকলেও admissions preliminary screening-এর written decision ছাড়া test waiver assume করবেন না।",
    ],
    fit: [
      "Research-intensive CS master's-এর বদলে management/analytics career চান।",
      "IELTS 6.0/TOEFL 80/TOEIC 800 meet করেন বা credible English-medium degree evidence আছে।",
      "Scholarship কম হলে substantial tuition নিজে cover করার plan আছে।",
      "Case discussion, leadership, business problem-solving ও interview format-এ comfortable।",
    ],
    quickStart: [
      "MSc Management বনাম MSc Business Analytics & AI curriculum compare করুন।",
      "Preliminary screening-এ transcript, CV ও MOI পাঠিয়ে English-waiver possibility লিখিতভাবে জিজ্ঞাসা করুন।",
      "24 October বা 12 December deadline-কে primary target ধরুন।",
      "0%, partial ও 80% remission scenario-তে net two-year cost হিসাব করুন।",
    ],
    steps: [
      {
        title: "Program ও English route বাছুন",
        timing: "এখনই",
        description: "Management এবং Analytics & AI একই career outcome নয়; English waiver-ও automatic নয়।",
        actions: [
          "Course lists, teaching methods ও desired role compare করুন।",
          "IELTS/TOEFL/TOEIC valid score থাকলে official threshold-এর সঙ্গে মিলান।",
          "MOI route হলে university-issued language letter ও English-taught transcript evidence দিন।",
          "Preliminary screening-এর written response save করুন।",
        ],
        readyWhen: "Exact MSc এবং accepted English evidence confirmed।",
      },
      {
        title: "Admission file শক্তিশালী করুন",
        timing: "Deadline-এর 6–8 সপ্তাহ আগে",
        description: "Business-school application-এ শুধু technical skill নয়—impact, teamwork ও career logic দেখাতে হয়।",
        actions: [
          "CV-তে quantified achievements ও leadership examples দিন।",
          "Essays-এ why program, career goal এবং contribution আলাদা evidence দিয়ে লিখুন।",
          "Degree/transcript, recommendations ও identity/residence documents prepare করুন।",
          "GMAT/GRE scholarship profile improve করলে feasible test plan বিবেচনা করুন।",
        ],
        readyWhen: "Documents, essays ও recommenders এক coherent candidate profile দেখায়।",
      },
      {
        title: "Best 2027 round-এ submit করুন",
        timing: "24 October বা 12 December 2026 target",
        description: "Early submission scholarship availability ও planning time-এর জন্য practical।",
        actions: [
          "Portal round, intake ও applicant category double-check করুন।",
          "Application fee, required uploads ও originals deadline-এর আগে complete করুন।",
          "30–31 October বা 18–19 December exam/interview dates block করুন।",
          "Later domestic-only rounds ব্যবহার করলে eligibility explicitly confirm করুন।",
        ],
        readyWhen: "Submission confirmation এবং correct examination slot আছে।",
      },
      {
        title: "Interview ও scholarship case তৈরি করুন",
        timing: "Submission থেকে exam পর্যন্ত",
        description: "Admission readiness এবং tuition-remission merit দুইটির evidence প্রস্তুত রাখুন।",
        actions: [
          "Career goals, ethical/business case এবং teamwork examples practice করুন।",
          "Analytics applicant হলে একটি data project business decision-এ translate করুন।",
          "Scholarship request-এ merit, financial need ও expected contribution factualভাবে explain করুন।",
          "Offer-এ exact remission percentage ও continuation conditions পড়ুন।",
        ],
        readyWhen: "Written net cost দেখে financially sound accept/decline decision নিতে পারেন।",
      },
    ],
    checklist: [
      "Exact MSc selection", "Preliminary screening result", "IELTS/TOEFL/TOEIC or accepted MOI",
      "Degree and transcripts", "CV and essays", "Recommendations", "Residence documents",
      "GMAT/GRE strategy", "Correct application round", "Three-scenario tuition budget",
    ],
    afterSubmission: [
      "Admissions portal, email ও interview instructions monitor করুন।",
      "Offer-এ admission এবং scholarship/remission decision আলাদা হলে দুটোই wait করে net cost হিসাব করুন।",
      "Renewal GPA/performance condition থাকলে Year 2 budget-এ risk রাখুন।",
    ],
    cautions: [
      "IELTS requirement 6.0; 5.5 ধরে eligible assume করবেন না।",
      "MOI acceptance case-by-case preliminary screening হতে পারে—automatic waiver নয়।",
      "Up to 80% মানে সবাই 80% পায় না; total official 2027 cost প্রায় ¥3.37m before aid।",
      "JASSO বা part-time work দিয়ে full tuition cover হবে ধরে plan করবেন না।",
    ],
    officialLinks: [
      { label: "NUCB admissions", href: "https://mba.nucba.ac.jp/en/admission/", description: "2027 deadlines, English requirements ও application process দেখুন।" },
      { label: "NUCB scholarships", href: "https://mba.nucba.ac.jp/en/support/scholarship/", description: "Current tuition-remission criteria ও conditions verify করুন।" },
      { label: "JASSO Honors Scholarship", href: "https://www.jasso.go.jp/en/ryugaku/scholarship_j/shoreihi/about.html", description: "Post-enrollment institutional nomination rules দেখুন।" },
    ],
  },
  {
    slug: "toyohashi-technology-cse-masters-mext-2027",
    country: "japan",
    university: "Toyohashi University of Technology",
    title: "TUT Computer Science + MEXT: Fall 2027 Planning Guide",
    summary:
      "English-conducted Computer Science master’s, supervisor approval, 2027 admission timeline এবং competitive MEXT local-industry-DX special route-এর verified preparation guide।",
    label: "Upcoming · English CSE + MEXT route",
    funding:
      "Regular admission self-funded; a separate, highly competitive MEXT Special Program may cover stipend, fees and eligible airfare.",
    duration: "2 years · October 2027 target",
    audience:
      "International CSE/IT graduates targeting software performance, distributed systems, IoT, AI or robotics research",
    realityCheck:
      "এটি এখন open scholarship application নয়। TUT-এর 2026 Fall International Master’s cycle বন্ধ; 4 August 2026 update অনুযায়ী Fall 2027 admission April 2027-এ শুরু হবে। আলাদা MEXT University Recommendation Special Program-এর 2027 call December 2026-এর দিকে open হওয়ার কথা, কিন্তু scholarship nomination সীমিত ও final MEXT approval guaranteed নয়। Regular International Master’s route overseas students-এর জন্য লেখা; বর্তমানে Japan-এ বসবাস করলে visa/residence eligibility এবং কোন route ব্যবহার করবেন—nyushi@office.tut.ac.jp ও scholarship office থেকে লিখিতভাবে নিশ্চিত করুন।",
    highlights: [
      "Graduate School of Engineering-এর Computer Science and Engineering field English-এ research guidance দেয়; application-এর আগে prospective supervisor-এর approval বাধ্যতামূলক।",
      "2027 admission-এর exact deadline এখনো প্রকাশিত হয়নি; official page শুধু April 2027 application start নিশ্চিত করেছে।",
      "2026 guide-এ selection documents-only ছিল, fixed GPA cutoff বা GRE/GMAT requirement ছিল না; 2027 guide প্রকাশ হলে সব rules আবার মিলাতে হবে।",
      "2026 CSE MEXT Special Program-এর focus ছিল Asian local-industry DX এবং TUT চারজন master’s candidate MEXT-এ recommend করতে পারত; 2027 slot ও conditions এখনো pending।",
      "2026 planning reference-এ master’s allowance ¥144,000/month, examination/admission/tuition coverage এবং eligible airfare ছিল; 2027 benefit MEXT-এর নতুন guideline ছাড়া final নয়।",
      "বর্তমান official fees: examination ¥30,000, admission ¥282,000 এবং tuition ¥535,800/year; দুই বছরের tuition + admission প্রায় ¥1,353,600, exam fee ছাড়া।",
      "Financial hardship ও strong academic performance থাকলে admission/tuition fee waiver-এর জন্য apply করা যায়; waiver automatic নয়।",
    ],
    fit: [
      "Recognized bachelor’s/equivalent engineering, CSE, IT বা closely related background আছে এবং research-based master’s চান।",
      "Software performance/HPC, distributed and ubiquitous systems, IoT, AI, computer vision বা robotics-এর একটি focused problem নিয়ে proposal লিখতে পারবেন।",
      "Prospective supervisor-এর recent work পড়ে personalized research-fit email ও প্রায় 1,000-word plan তৈরি করতে প্রস্তুত।",
      "MEXT না পেলেও admission fees, tuition এবং living cost-এর realistic backup plan রাখতে পারবেন।",
      "Japan resident হলে International Master’s ও MEXT route-এর residence/visa conditions written confirmation নিয়ে এগোবেন।",
    ],
    quickStart: [
      "CSE faculty directory থেকে Yukinori Sato, Ren Ohmura ও Jun Miura-এর profile পড়ে নিজের topic-এর সঙ্গে সত্যিকারের 1–2টি match shortlist করুন।",
      "এক পাতায় problem, research question, proposed method, expected result এবং কেন TUT—এই পাঁচটি heading দিয়ে concept note লিখুন।",
      "nyushi@office.tut.ac.jp-এ Fall 2027 guide, current Japan residence এবং English-medium degree/MOI evidence নিয়ে concise eligibility question পাঠানোর draft তৈরি করুন।",
      "December 2026 MEXT page এবং April 2027 International Master’s page monitor করার জন্য calendar reminder বসান; পুরোনো deadline copy করবেন না।",
    ],
    steps: [
      {
        title: "Admission ও MEXT—দুটি আলাদা route map করুন",
        timing: "August–November 2026",
        description:
          "Regular International Master’s admission degree দেয়; MEXT Special Program সম্ভাব্য funding route। একটির তথ্য দিয়ে অন্যটির eligibility বা deadline infer করবেন না।",
        actions: [
          "Fall 2027 admission-এর confirmed fact হিসেবে শুধু April 2027 opening লিখুন; exact deadline blank রাখুন।",
          "MEXT page-এ December 2026-এর expected opening monitor করুন এবং 2027 guideline ছাড়া slot/benefit final ধরবেন না।",
          "Current Japan address, nationality ও residence status লিখে admissions এবং MEXT office-কে correct route জিজ্ঞাসা করুন।",
          "MEXT, regular admission, tuition waiver এবং post-enrollment JASSO/private awards চারটি আলাদা budget row-তে রাখুন।",
        ],
        readyWhen:
          "কোন form কখন, কোন office-এ এবং admission বনাম funding-এর কোন উদ্দেশ্যে যাবে—এটি আলাদা করে বুঝতে পারেন।",
      },
      {
        title: "Supervisor ও research fit শক্ত করুন",
        timing: "September–December 2026",
        description:
          "TUT application-এর আগে supervisor approval দরকার। Faculty নামের তালিকা নয়—তাঁর বর্তমান research-এর সঙ্গে আপনার problem-এর প্রমাণযোগ্য connection দেখাতে হবে।",
        actions: [
          "Yukinori Sato-এর software performance, computer architecture ও high-performance systems work পড়ুন; enterprise-software profiling topicটি নিজের proposal হিসেবে frame করুন, advertised project হিসেবে নয়।",
          "Ren Ohmura-এর distributed/ubiquitous systems, wearable computing, sensor networks ও programming-environment research-এর সঙ্গে IoT/software experience map করুন।",
          "AI/vision/robotics direction হলে Jun Miura-এর intelligent robotics ও robot-vision publications থেকে specific method/problem বাছুন।",
          "প্রথম email-এ CV, academic summary, 150–250 word research idea, relevant evidence, Fall 2027 intent এবং supervision availability question দিন।",
        ],
        readyWhen:
          "একজন faculty member research fit ও 2027 supervision নিয়ে ইতিবাচক response/approval দিয়েছেন এবং proposal scope নিয়ে direction পেয়েছেন।",
      },
      {
        title: "MEXT Special Program file প্রস্তুত করুন",
        timing: "Expected opening around December 2026",
        description:
          "CSE special program local-industry DX focus-এর competitive university recommendation। 2026 rules planning reference; 2027 PDF-ই final authority।",
        actions: [
          "2027 call প্রকাশ হলে nationality, age, arrival/visa, health, field continuity, GPA এবং language conditions line-by-line check করুন।",
          "Official transcript দিয়ে MEXT formula GPA calculate করুন; 2026 minimum 2.30/3.00 ছিল, কিন্তু 2027 threshold reverify করুন।",
          "Field of Study and Research Plan-এ Asian/local-industry problem, DX contribution, method, company collaboration potential ও measurable outcome connect করুন।",
          "2027 checklist অনুযায়ী application, recommendation, publication list, declaration, academic-performance sheet এবং faculty-side conditional-acceptance process complete করুন।",
        ],
        readyWhen:
          "2027 eligibility লিখিতভাবে মিলে, supervisor অংশ complete এবং deadline-এর আগে সব MEXT documents submission-ready।",
      },
      {
        title: "Regular International Master’s application complete করুন",
        timing: "Application starts April 2027 · exact deadline pending",
        description:
          "2026 guide useful preparation reference, কিন্তু 2027 selection, score validity, document delivery ও dates নতুন guide থেকে নিতে হবে।",
        actions: [
          "2027 guide থেকে application, scan-check, online registration, fee payment, original delivery, result ও October enrollment dates আলাদা করে লিখুন।",
          "Application form, degree certificate, official transcript + grading explanation, প্রায় 1,000-word research plan, recommendation, passport ও fee প্রস্তুত করুন।",
          "TOEIC L&R(SP), TOEFL iBT বা IELTS Academic-এর current acceptance/validity দেখুন; English-medium degree হলে university-issued MOI proof-এর exact 2027 wording follow করুন।",
          "Japanese/English ছাড়া documents-এর certified translation এবং non-reissuable originals-এর certified-copy plan আগেই করুন।",
        ],
        readyWhen:
          "Supervisor-approved, guideline-matched complete file TUT receive করেছে এবং submission/fee confirmation সংরক্ষিত আছে।",
      },
      {
        title: "Selection, funding ও enrolment decision নিন",
        timing: "After submission through October 2027",
        description:
          "Admission result, MEXT result এবং fee-waiver/private scholarship result আলাদা সময়ে আসতে পারে। Written net funding ছাড়া affordability ধরে নেবেন না।",
        actions: [
          "2027 selection documents-only নাকি interviewসহ—guideline দেখে research explanation ও fundamentals প্রস্তুত করুন।",
          "Admission, MEXT nomination, final MEXT decision এবং tuition-waiver outcome আলাদা status হিসেবে track করুন।",
          "MEXT না হলে admission ¥282,000 + annual tuition ¥535,800 + living cost-এর funding source লিখিতভাবে নিশ্চিত করুন।",
          "Offer গ্রহণের আগে supervisor, research environment, scholarship conditions, visa route এবং October arrival/enrolment dates মিলিয়ে নিন।",
        ],
        readyWhen:
          "Degree offer, net cost/funding, visa eligibility এবং research supervision—চারটি লিখিতভাবে পরিষ্কার হওয়ার পর informed accept/decline decision নিতে পারেন।",
      },
    ],
    checklist: [
      "Fall 2027 official admission guide",
      "Written Japan-residence/visa eligibility confirmation",
      "Supervisor approval",
      "Focused CSE research plan · about 1,000 words",
      "Degree certificate and official transcript",
      "Grading-system explanation",
      "Recommendation letter",
      "Accepted English score or official MOI proof",
      "Passport and certified translations",
      "¥30,000 examination-fee plan",
      "2027 MEXT eligibility/GPA calculation",
      "Self-funded and waiver backup budget",
    ],
    afterSubmission: [
      "Admissions email, application portal এবং courier tracking monitor করুন; originals received হয়েছে কি না নিজের tracking দিয়ে দেখুন।",
      "Supervisor-এর সঙ্গে research plan refine করুন এবং document/interview selection যেটি 2027 guide নির্ধারণ করে সেটির প্রস্তুতি চালু রাখুন।",
      "Admission, MEXT, fee waiver, JASSO/private scholarship এবং visa result আলাদা timeline-এ update করুন।",
      "MEXT final approval বা written waiver না আসা পর্যন্ত full self-funded cost cover করার plan বজায় রাখুন।",
    ],
    cautions: [
      "IELTS 5.5, TOEFL iBT 61 বা TOEIC 590-কে confirmed Master’s cutoff লিখবেন না; current International Master’s guide accepted tests বললেও minimum score প্রকাশ করেনি।",
      "2026 documents-only selection, four CSE master’s recommendation slots এবং ¥144,000/month benefit 2027-এর guarantee নয়।",
      "Regular admission পেলেই MEXT পাওয়া যায় না; university recommendation-ও final MEXT award নিশ্চিত করে না।",
      "Supervisor names suggested research matches—advertised vacancy নয়; capacity ও scholarship participation সরাসরি confirm করতে হবে।",
      "Program overseas students-এর জন্য; Japan-resident applicant নিজের eligibility assume করবেন না।",
      "Post-enrollment scholarships সীমিত এবং অনেক private award-এ Japanese ability লাগতে পারে।",
    ],
    officialLinks: [
      {
        label: "International Master’s Degree Program",
        href: "https://www.tut.ac.jp/english/exam/applications/international-masters-degree-program.html",
        description: "Fall 2027 opening status, current forms ও new guideline দেখুন।",
      },
      {
        label: "2026 Master’s application guide",
        href: "https://www.tut.ac.jp/english/exam/applications/docs/2026_Master.pdf",
        description: "Preparation reference হিসেবে eligibility, documents, selection ও fees পড়ুন; 2027 dates হিসেবে ব্যবহার করবেন না।",
      },
      {
        label: "MEXT Special Program",
        href: "https://www.tut.ac.jp/english/exam/applications/jg-scholarship-special-en.html",
        description: "2027 opening notice, CSE DX program ও final guideline monitor করুন।",
      },
      {
        label: "CSE MEXT 2026 reference guide",
        href: "https://www.tut.ac.jp/english/exam/applications/docs/3_2026_special_guidelines_en.pdf",
        description: "Prior-cycle eligibility ও benefits বুঝুন; 2027 conditions পুনরায় verify করুন।",
      },
      {
        label: "TUT fees",
        href: "https://www.tut.ac.jp/english/exam/applications/fees-to-enroll.html",
        description: "Examination, admission ও annual tuition-এর current official amounts দেখুন।",
      },
      {
        label: "Scholarship and financial support",
        href: "https://www.tut.ac.jp/english/exam/applications/scholarship.html",
        description: "MEXT/JICA/JDS/Aichi, JASSO, private awards ও fee-support reality পড়ুন।",
      },
      {
        label: "Admission and tuition fee exemption",
        href: "https://www.tut.ac.jp/student/support/exemption.html",
        description: "Graduate/international applicant waiver ও postponement rules verify করুন।",
      },
      {
        label: "Computer Science faculty directory",
        href: "https://www.tut.ac.jp/english/university/faculty/cs/index.html",
        description: "Current supervisors, profiles ও research areas search করুন।",
      },
      {
        label: "Yukinori Sato profile",
        href: "https://www.tut.ac.jp/english/university/faculty/cs/post_48.html",
        description: "Software performance, computer architecture ও HPC fit দেখুন।",
      },
      {
        label: "Ren Ohmura profile",
        href: "https://www.tut.ac.jp/english/university/faculty/cs/671.html",
        description: "Distributed, ubiquitous, wearable ও sensor-systems fit দেখুন।",
      },
      {
        label: "Jun Miura profile",
        href: "https://www.tut.ac.jp/english/university/faculty/cs/165.html",
        description: "AI, intelligent robotics ও robot-vision fit দেখুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
  {
    slug: "shibaura-eecs-masters-2027",
    country: "japan",
    university: "Shibaura Institute of Technology",
    title: "SIT EECS Master’s: April 2027 SSFS Application Guide",
    summary:
      "English-medium Electrical Engineering and Computer Science master’s route, mandatory supervisor pre-consultation, MOI option, exact second-round timeline এবং realistic self-funded budget-এর verified guide।",
    label: "Upcoming · English/MOI · Self-funded",
    funding:
      "Self-funded by default; published AY2027 SIT Master’s scholarships current/former SIT bachelor students-এর মধ্যে restricted, আর external SSFS applicants-এর জন্য guaranteed tuition waiver নেই।",
    duration: "2 years · April 2027 intake",
    audience:
      "International CSE/IT/EE graduates targeting AI, machine learning, software, data, computer vision, robotics, networks or IoT research",
    realityCheck:
      "এটি ‘fully funded scholarship opening’ নয়—Shibaura Institute of Technology-এর April 2027 Special Selection for Foreign Students (SSFS) Master’s admission route। First round বন্ধ এবং second round এখনো open হয়নি। তবে official schedule অনুযায়ী pre-consultation early October 2026-এ শুরু হবে এবং application 16–27 November 2026 চলবে। External applicant-কে আগে TAO-তে prospective supervisor-এর pre-consultation, faculty interview ও Pre-Consultation Completion Form নিতে হবে; formal application stage-এ আলাদাভাবে Letter of Acceptance request করতে হয়। Published AY2027 SIT Master’s schemes current/former SIT bachelor students-এর মধ্যে restricted; তাই written external award না পাওয়া পর্যন্ত প্রায় ¥2.77 million admission, tuition ও maintenance + প্রায় ¥40,000 Support Association fees, ¥35,000 application fee এবং living cost নিজে বহনের plan ধরে এগোতে হবে।",
    highlights: [
      "Graduate School of Engineering and Science-এর Electrical Engineering and Computer Science Course থেকে Master of Engineering degree পাওয়া যায়; AI/ML, software/information engineering, data, networks, IoT, HCI, computer vision ও robotics research fit তৈরি করা সম্ভব।",
      "SSFS-এ Japanese admission requirement নয়। English-taught specialized credits দিয়ে degree requirements পূরণের পথ আছে, তবে chosen lab-এর supervision language ও প্রয়োজনীয় course availability supervisor-এর সঙ্গে confirm করতে হবে।",
      "English-medium higher-education institution থেকে পুরো degree সম্পন্ন/সম্পন্ন করতে থাকলে university-issued English-medium proof (MOI) accepted test score-এর বিকল্প হতে পারে। 2027 first-round guide-এ numerical IELTS/TOEFL cutoff প্রকাশিত নেই।",
      "GRE বা GMAT application requirement হিসেবে তালিকাভুক্ত নয়; JLPT/EJU pre-consultation-এ optional। Hard minimum GPA প্রকাশিত না হলেও transcript with GPA, academic strength এবং research fit competitive selection-এ গুরুত্বপূর্ণ।",
      "Confirmed second-round schedule: pre-consultation early October–30 October 2026, 16:00 JST; application 16 November, 12:00–27 November 2026, 16:00 JST; online exam 27 January 2027; result 10 February 2027, 13:00 JST।",
      "2027 first-round EECS format ছিল document assessment + 25-minute online oral: 15-minute presentation এবং 10-minute Q&A। Presentation-এ motivation প্রায় 3, previous research 9 এবং proposed Master’s research 3 minutes। Second-round guide প্রকাশ হলে format recheck করতে হবে।",
      "2026 reference table অনুযায়ী non-SIT graduate-এর admission + tuition + maintenance প্রায় ¥2.77m; Support Association প্রায় ¥40k যোগ করলে university-related two-year total প্রায় ¥2.81m, application fee ও living expenses ছাড়া।",
      "Potential supervisor Yoshiaki Yasumura-এর Intelligent System Lab AI, ML, NLP, web mining, image recognition ও data-stream learning নিয়ে কাজ করে; Chinthaka Premachandra-এর Image Processing and Robotics Lab computer vision, UAV, robotics ও ITS নিয়ে কাজ করে। দুজনের 2027 availability TAO-তে confirm করতে হবে।",
    ],
    fit: [
      "Recognized bachelor’s degree, সাধারণত 16 years of education, বা approved equivalent qualification আছে এবং EECS research-based master’s করতে চান।",
      "English-medium degree-এর official MOI অথবা accepted English-test evidence সংগ্রহ করতে পারবেন এবং English-এ research discussion/presentation করতে প্রস্তুত।",
      "একজন supervisor-এর recent work-এর সঙ্গে নিজের previous project/research মিলিয়ে specific, feasible দুই-পৃষ্ঠার research plan লিখতে পারবেন।",
      "AI/software/data direction হলে Yasumura Lab অথবা computer vision/robotics direction হলে Premachandra Lab-এর সঙ্গে evidence-based fit দেখাতে পারবেন।",
      "Guaranteed scholarship না ধরেই tuition, other academic fees, computer এবং Japan living cost-এর credible funding plan তৈরি করতে পারবেন।",
      "SSFS-এর nationality/residence rules পূরণ করেন: Japanese nationality, dual Japanese nationality বা Japanese permanent-resident status নেই।",
    ],
    quickStart: [
      "Official schedule খুলে 30 October pre-consultation deadline, 16–27 November application, 27 January exam এবং 10 February result calendar-এ JST-সহ লিখুন।",
      "Yoshiaki Yasumura ও Chinthaka Premachandra-এর official lab pages পড়ে একটিমাত্র primary research direction এবং backup supervisor বেছে নিন।",
      "এক পৃষ্ঠায় problem, related bachelor project/research, proposed method, expected contribution এবং কেন ওই SIT lab—এই পাঁচ heading-এ concept note লিখুন।",
      "MOI/English score, transcript with GPA, degree certificate, CV এবং প্রায় ¥2.845m application + university-fee reference budget-এর document folder বানান; living cost আলাদা রাখুন।",
    ],
    steps: [
      {
        title: "SSFS eligibility, language ও funding reality যাচাই করুন",
        timing: "August–mid-September 2026",
        description:
          "Admission-friendly language conditions scholarship guarantee নয়। Profile, residence status এবং financing—তিনটি আলাদা gate হিসেবে আগে যাচাই করুন।",
        actions: [
          "Bachelor’s/16-year education eligibility এবং SSFS-এর no-Japanese-nationality/no-permanent-residency conditions মিলিয়ে নিন।",
          "English-medium degree হলে registrar থেকে এমন official certificate নিন যেখানে degree/program-এর medium of instruction স্পষ্ট লেখা আছে।",
          "Test দিলে current guide-এর test-centre TOEIC L&R/S&W, TOEFL iBT, IELTS Academic বা GTEC rules ও two-year validity recheck করুন; online/IP score assume করবেন না।",
          "2026 reference ধরে ¥2.77m admission/tuition/maintenance + প্রায় ¥40k Support Association + ¥35,000 application fee + living/computer/insurance/visa cost-এর budget লিখুন।",
        ],
        readyWhen:
          "Formal eligibility, English evidence এবং scholarship ছাড়া study করার credible backup funding—তিনটি পরিষ্কার।",
      },
      {
        title: "Research fit ও supervisor shortlist তৈরি করুন",
        timing: "August–September 2026",
        description:
          "Supervisor acceptance এই route-এর gate। Generic ‘AI-তে আগ্রহী’ message নয়—lab-এর specific problem-এর সঙ্গে নিজের evidence connect করুন।",
        actions: [
          "Yasumura Lab বাছলে web/data/ML/NLP/image-recognition theme থেকে একটি narrow problem নিন এবং relevant project/result দেখান।",
          "Premachandra Lab বাছলে computer vision, small-object detection, UAV, robotics বা ITS থেকে বাস্তব problem ও evaluation plan নির্ধারণ করুন।",
          "CV, previous-research summary এবং দুই-পৃষ্ঠার draft plan-এ একই research story বজায় রাখুন।",
          "AY2027 final supervisor list ও lab capacity second-round guideline-এর সঙ্গে মিলিয়ে primary ও backup choice রাখুন; public email অনুমান করবেন না।",
        ],
        readyWhen:
          "একটি primary lab, একটি defensible backup এবং প্রত্যেকটির জন্য personalized research concept প্রস্তুত।",
      },
      {
        title: "TAO pre-consultation সম্পন্ন করুন",
        timing: "Early October–30 October 2026, 16:00 JST",
        description:
          "Non-SIT applicants formal application-এর আগে TAO pre-consultation complete করে faculty interview/acceptance পাবে। Deadline-এর শেষ দিনে শুরু করা যাবে না।",
        actions: [
          "TAO account খুলে CV, previous research/achievement summary, research plan, degree certificate এবং full transcript upload-ready করুন।",
          "English score এবং JLPT/EJU pre-consultation-এ optional হলেও থাকলে valid evidence দিন; ভুল বা expired claim দেবেন না।",
          "এক সময়ে একজন করে সর্বোচ্চ তিনজন prospective supervisor-এর কাছে consultation request করা যায়—reply time রেখে primary choice আগে submit করুন।",
          "Faculty interview-এর আগে 2-minute background, research problem, method, feasibility, expected result এবং funding plan practice করুন।",
        ],
        readyWhen:
          "TAO-তে pre-consultation complete, faculty interview শেষ এবং Pre-Consultation Completion Form পাওয়া গেছে; formal application-এর Letter of Acceptance এখনও আলাদা task হিসেবে noted।",
      },
      {
        title: "Second-round guide অনুযায়ী formal file final করুন",
        timing: "Guideline expected mid-September · submit 16–27 November 2026",
        description:
          "First-round guide preparation reference; second-round PDF-ই documents, exam এবং final rules-এর authority। প্রতিটি field নতুন guide দিয়ে line-by-line check করুন।",
        actions: [
          "TAO form/photo, transcript with GPA, degree certificate, one-page English reason for application এবং প্রায় two-page English research plan final করুন।",
          "Accepted English score অথবা official English-medium degree proof, passport, Japan resident হলে residence card এবং non-SIT applicant recommendation যোগ করুন।",
          "TAO-তে desired faculty member-এর Letter of Acceptance request করে approval correctly reflected কি না দেখুন এবং required translations প্রস্তুত করুন।",
          "¥35,000 generally non-refundable examination fee সময়মতো pay করে application 27 November, 16:00 JST-এর আগেই submit করুন; guideline-এর narrow refund exceptions এবং receipt save করুন।",
        ],
        readyWhen:
          "Second-round checklist-এর প্রতিটি item accepted format-এ জমা, fee paid এবং TAO submission confirmation সংরক্ষিত।",
      },
      {
        title: "EECS online oral-এর targeted preparation নিন",
        timing: "December 2026–27 January 2027",
        description:
          "First-round format carry হলে 15-minute presentation-এ motivation, previous research এবং proposed research-এর balance খুব নির্দিষ্ট। শুধু slides নয়, Q&A-তে fundamentals ও feasibility defend করতে হবে।",
        actions: [
          "3 minutes motivation, 9 minutes bachelor/graduation research এবং 3 minutes Master’s proposal ধরে screen-share presentation বানান।",
          "Bachelor thesis না থাকলে coursework/project দিয়ে independent research ability, literature review, experiment design ও evaluation evidence দেখান।",
          "Problem novelty, related work, data, method choice, metrics, risks, ethics এবং two-year schedule নিয়ে 10-minute Q&A drill করুন।",
          "Zoom/device, camera, microphone, internet, screen share এবং JST conversion test করুন; second-round notice-এ format বদলালে practice update করুন।",
        ],
        readyWhen:
          "Presentation 15 minutes-এর মধ্যে শেষ হয়, claims citation/evidence-সহ এবং supervisor-style follow-up questions confidently answer করতে পারেন।",
      },
      {
        title: "Result, funding ও enrolment decision আলাদা করে নিন",
        timing: "10 February 2027 onward",
        description:
          "Admission offer নিজে scholarship নয়। Written scholarship/waiver result ছাড়া net cost কম ধরে visa বা enrolment commitment দেবেন না।",
        actions: [
          "10 February, 13:00 JST result check করে admission procedure, deposit এবং document deadlines লিখে নিন।",
          "Offer-এর fee table দিয়ে admission, tuition, maintenance/other fees ও living cost-এর final two-year total recalculate করুন।",
          "Post-enrollment external foundation/company awards-এর eligibility ও nomination process international office থেকে জেনে নিন, কিন্তু budget-এ guaranteed income ধরবেন না।",
          "Supervisor fit, English course plan, commute/housing, available cash এবং scholarship outcome একসঙ্গে মিলিয়ে accept/decline করুন।",
        ],
        readyWhen:
          "Admission, supervision, final academic cost, living budget এবং actual written funding—পাঁচটি দেখে informed enrolment decision নিতে পারেন।",
      },
    ],
    checklist: [
      "AY2027 second-round official guideline",
      "SSFS nationality/residence eligibility",
      "TAO pre-consultation completion",
      "Supervisor interview and acceptance",
      "CV and previous-research summary",
      "Bachelor’s degree/expected-degree certificate",
      "Full transcript with GPA/grading information",
      "One-page English reason for application",
      "About two-page English research plan and schedule",
      "Accepted English score or official MOI proof",
      "Recommendation letter for non-SIT applicant",
      "Passport and residence card if applicable",
      "Required translations/verification documents",
      "¥35,000 examination-fee receipt",
      "Oral-presentation slides and technical Q&A bank",
      "Self-funded two-year academic and living-cost plan",
    ],
    afterSubmission: [
      "TAO, registered email এবং spam folder monitor করুন; examinee number ও online-exam instructions সাধারণত exam-এর আগে প্রকাশ হবে।",
      "Supervisor-এর feedback দিয়ে research plan refine করুন, কিন্তু submitted facts বা records inconsistent করবেন না।",
      "27 January exam-এর Zoom link, JST time, ID requirement ও screen-share rules official notice থেকে confirm করুন।",
      "Scholarship search চালিয়ে যান, তবে written award না পাওয়া পর্যন্ত visa financial proof এবং full self-funded backup বজায় রাখুন।",
    ],
    cautions: [
      "এটিকে fully funded scholarship, active opening বা guaranteed waiver লিখবেন না; এটি upcoming SSFS admission route।",
      "First-round oral format ও document list second round-এ একই থাকবে ধরে নেবেন না—mid-September guideline recheck বাধ্যতামূলক।",
      "Published numerical IELTS cutoff নেই মানে English দুর্বল হলেও admission সহজ নয়; research discussion ও oral examination English-এ করতে হবে।",
      "Alternative qualification screening low GPA compensate করার route নয়; এটি non-standard educational qualification-এর equivalency যাচাই করে।",
      "Published AY2027 institutional Master’s scholarships current/former SIT bachelor students-এর জন্য restricted; guide-এর JASSO Type 1/2 loans Japanese nationals only। International students-এর post-enrollment external foundation/company awards competitive ও uncertain।",
      "¥2.81m হলো 2026 reference university-related total (¥2.77m admission/tuition/maintenance + প্রায় ¥40k association fees); application, living, housing, computer, insurance ও travel এতে নেই।",
      "Suggested supervisors verified research matches, advertised funded vacancies নয়; 2027 capacity ও willingness TAO-তে নিশ্চিত করতে হবে।",
      "Japanese admission requirement না হলেও daily life, internship ও চাকরির জন্য Japanese skill practical advantage দেয়।",
    ],
    officialLinks: [
      {
        label: "AY2027 admission schedule",
        href: "https://www.shibaura-it.ac.jp/en/study/graduate/schedule.html",
        description: "Second-round pre-consultation, application, exam ও result dates verify করুন।",
      },
      {
        label: "Application guideline hub",
        href: "https://www.shibaura-it.ac.jp/en/study/graduate/guideline.html",
        description: "Mid-September থেকে second-round PDF ও scholarship restrictions recheck করুন।",
      },
      {
        label: "AY2027 first-round reference guide",
        href: "https://www.shibaura-it.ac.jp/assets/EN2027_1st%20Application%20Guideline_General%EF%BC%86SSFS_v2.pdf",
        description: "Eligibility, documents, EECS oral format ও 2026 reference fees পড়ুন; second-round rules হিসেবে assume করবেন না।",
      },
      {
        label: "Special Selection for Foreign Students",
        href: "https://www.shibaura-it.ac.jp/en/study/graduate/ssfs.html",
        description: "SSFS nationality, residence, education ও English-study eligibility বুঝুন।",
      },
      {
        label: "How to apply",
        href: "https://www.shibaura-it.ac.jp/en/study/graduate/info.html",
        description: "Supervisor search, pre-consultation এবং formal application-এর sequence দেখুন।",
      },
      {
        label: "TAO pre-consultation instructions",
        href: "https://www.shibaura-it.ac.jp/en/study/graduate/Pre-consultation.html",
        description: "Upload documents, supervisor-choice flow ও mandatory pre-application process follow করুন।",
      },
      {
        label: "Graduate admission FAQ",
        href: "https://www.shibaura-it.ac.jp/en/study/graduate/faq.html",
        description: "Japanese, English/MOI, online examination ও scholarship answers verify করুন।",
      },
      {
        label: "AY2027 Master’s incentive scholarship",
        href: "https://www.shibaura-it.ac.jp/assets/1_E_shingaku_shorei_shogakukin_2026fall_2027spring.pdf",
        description: "Departmental recommendation ও SIT-student eligibility restriction সরাসরি পড়ুন।",
      },
      {
        label: "AY2027 Global Graduate Scholarship",
        href: "https://www.shibaura-it.ac.jp/assets/2_1_E_global_shogakukin_2027spring.pdf",
        description: "Current/former SIT bachelor student restriction ও award conditions যাচাই করুন।",
      },
      {
        label: "JASSO Honors Scholarship",
        href: "https://www.jasso.go.jp/en/ryugaku/scholarship_j/shoreihi/about.html",
        description: "Post-enrollment competitive support-এর eligibility ও institutional nomination process দেখুন।",
      },
      {
        label: "EECS course",
        href: "https://www.shibaura-it.ac.jp/en/academics/graduate-school/eecs.html",
        description: "Degree, research scope এবং Electrical Engineering and Computer Science course structure দেখুন।",
      },
      {
        label: "Official tuition and fees",
        href: "https://www.shibaura-it.ac.jp/en/study/tuition/index.html",
        description: "Published general fee information দেখুন; AY2027 final amount নতুন admission guide/offer দিয়ে update করুন।",
      },
      {
        label: "AY2027 Master’s supervisor list",
        href: "https://www.shibaura-it.ac.jp/assets/AY2027%20Spring_List%20of%20Academic%20Staff%20for%20Master%20Program_1.pdf",
        description: "Current eligible faculty list দেখুন এবং second-round version প্রকাশ হলে আবার confirm করুন।",
      },
      {
        label: "Yoshiaki Yasumura · Intelligent System Lab",
        href: "https://www.shibaura-it.ac.jp/en/research/laboratory/00186.html",
        description: "AI, ML, NLP, web mining, image recognition ও data-analysis research fit যাচাই করুন।",
      },
      {
        label: "Chinthaka Premachandra · Image Processing and Robotics Lab",
        href: "https://www.shibaura-it.ac.jp/en/research/laboratory/00292.html",
        description: "Computer vision, image processing, UAV ও robotics research fit যাচাই করুন।",
      },
    ],
    reviewedAt: "August 12, 2026",
    reviewedOn: "2026-08-12",
  },
];

export function getScholarshipGuide(slug: string) {
  return scholarshipGuides.find((guide) => guide.slug === slug);
}
