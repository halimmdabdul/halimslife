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
    title: "IUJ Master’s + Scholarships: September 2027 Guide",
    summary:
      "MBA, Digital Transformation, Economics, International Development ও Public Management applicants-এর জন্য three-round admission, scholarship selection এবং realistic budget plan.",
    label: "Business, economics & digital transformation",
    funding:
      "Competitive IUJ, MEXT, ADB-JSP and partner scholarships range from tuition reduction to full support.",
    duration: "1- or 2-year master’s · program-specific",
    audience: "Applicants combining business, policy, economics or management with technology experience",
    realityCheck:
      "IUJ scholarship-এর জন্য আলাদা guaranteed award নেই। Admission application-এর Phase 2 scholarship section-এ apply করতে হয় এবং award competitive। Scholarship না পেলে published first-year estimate 2-year program-এর জন্য প্রায় ¥4.50–4.65 million, তাই funding result ও personal budget admission decision-এর কেন্দ্রীয় অংশ।",
    highlights: [
      "International master’s deadlines: 10 December 2026, 11 February 2027 এবং 14 April 2027।",
      "GSIM-এর DXP interview dates fixed; GMAT/GRE score submit করলে official schedule অনুযায়ী interview exemption হতে পারে।",
      "IUJ Nakayama awards 30%–100% tuition reduction দিতে পারে; Premium award-এ stipend-ও থাকতে পারে।",
      "ADB-JSP eligible 2-year master’s ও DXP applicants-এর জন্য tuition, stipend, airfare ও allowances cover করতে পারে।",
      "MEXT University Recommendation, ADB-JSP ও partner awards-এর eligibility nationality, age, work history ও program অনুযায়ী আলাদা।",
      "English-medium degree-এর official evidence দিলে TOEFL/IELTS/TOEIC exemption বিবেচিত হতে পারে।",
    ],
    fit: [
      "CSE/software experience-কে digital transformation, information systems বা technology-enabled management-এর সঙ্গে connect করতে চান।",
      "Business, economics, public management, development বা international relations-এর clear career goal আছে।",
      "Scholarship না পেলে partial funding ও full-cost scenario দুটিই আগে থেকে evaluate করতে প্রস্তুত।",
      "MBA/DXP-এর quantitative readiness GMAT, GRE, IUJ Math Test বা interview-এর মাধ্যমে দেখাতে পারবেন।",
    ],
    quickStart: [
      "GSIM-এর MBA/DXP এবং GSIR-এর economics/development/policy program-এর মধ্যে একটি primary program বাছুন।",
      "10 December first-round deadline ধরে reverse calendar বানান; later round-কে default plan করবেন না।",
      "IUJ scholarship matching tool-এ nationality, program, age ও work-experience filter করে eligible awards লিখুন।",
      "English-medium instruction certificate এবং two referees-এর availability এখনই confirm করুন।",
    ],
    steps: [
      {
        title: "Program ও career outcome compare করুন",
        timing: "August–September 2026",
        description:
          "একই university-তে MBA, DXP, economics ও policy program-এর curriculum এবং scholarship eligibility আলাদা।",
        actions: [
          "MBA বাছুন leadership/general management-এর জন্য; DXP বাছুন technology-driven organizational change-এর জন্য।",
          "Economics, International Development, PMPP বা International Relations বাছলে quantitative/research focus compare করুন।",
          "Current role থেকে graduation-এর পর target role পর্যন্ত 3–4 sentence career bridge লিখুন।",
          "Yingying Zhang Zhang-এর cross-cultural management/innovation এবং Mihoko Sakurai-এর digital transformation fit official faculty material থেকে যাচাই করুন।",
        ],
        readyWhen:
          "একটি primary program এবং evidence-based academic/career reason final।",
      },
      {
        title: "Scholarship shortlist ও full-cost budget বানান",
        timing: "Before starting the application",
        description:
          "Scholarship preference ভুল নির্বাচন করলে relevant consideration miss হতে পারে; আবার award না পাওয়ার scenario-ও হিসাব করতে হবে।",
        actions: [
          "Nakayama, MEXT University Recommendation, ADB-JSP ও nationality-specific partner awards compare করুন।",
          "ADB-JSP-এর developing-member-country, work-experience এবং existing-master’s restrictions carefully check করুন।",
          "Admission fee, tuition, dormitory, utilities, food, insurance ও personal cost দিয়ে first-year budget লিখুন।",
          "Minimum acceptable award নির্ধারণ করুন—full funding, tuition waiver, অথবা partial reduction।",
        ],
        readyWhen:
          "Eligible scholarship shortlist ও scholarship না পাওয়ার realistic financial decision rule আছে।",
      },
      {
        title: "Academic ও professional evidence প্রস্তুত করুন",
        timing: "September–October 2026",
        description:
          "IUJ application-এ grades-এর পাশাপাশি career clarity, leadership, quantitative readiness ও international perspective গুরুত্বপূর্ণ।",
        actions: [
          "Degree certificate, complete transcript, CV, employment evidence এবং official translations সংগ্রহ করুন।",
          "Essays/SOP-তে problem, past evidence, IUJ curriculum, Japan context এবং measurable post-degree goal connect করুন।",
          "Recommendation writers-কে program, deadline, CV, essays ও concrete achievements দিন।",
          "English-medium degree থাকলে transcript-এ language clear কি না দেখুন; না হলে separate official certificate নিন।",
        ],
        readyWhen:
          "Documents complete এবং essays program-specific, evidence-rich ও scholarship narrative-এর সঙ্গে consistent।",
      },
      {
        title: "Test ও interview route final করুন",
        timing: "October–November 2026",
        description:
          "GSIM selection route score submission ও program অনুযায়ী বদলায়; fixed interview date miss করা যাবে না।",
        actions: [
          "TOEFL, IELTS বা TOEIC প্রয়োজন কি না official exemption policy দিয়ে নির্ধারণ করুন।",
          "MBA/DXP-এর জন্য GMAT/GRE score submit করবেন নাকি IUJ assessment/interview route নেবেন ঠিক করুন।",
          "DXP হলে digital transformation case, quantitative reasoning ও career-goal answers practice করুন।",
          "First-round applicant হলে 24 December 2026 interview window calendar-এ block করুন।",
        ],
        readyWhen:
          "Accepted English evidence এবং applicable GSIM test/interview plan ready।",
      },
      {
        title: "Online application ও scholarship section submit করুন",
        timing: "Target · 10 December 2026",
        description:
          "Scholarship consideration admission form-এর ভেতরেই হয়; registration-এ sponsorship status ও Phase 2 choices সঠিক হওয়া দরকার।",
        actions: [
          "Online account খুলে sponsorship status হিসেবে applicable হলে Non-Sponsored select করুন।",
          "Admission sections complete করে Phase 2 Scholarship Section-এ eligible choices দিন।",
          "Final files preview করে names, dates, program ও scholarship preference cross-check করুন।",
          "10 December-এর কয়েক দিন আগে submit করুন; miss হলে 11 February বা 14 April round-এর updated availability check করুন।",
        ],
        readyWhen:
          "Admission ও scholarship sections submitted এবং confirmation/application ID saved।",
      },
      {
        title: "Offer ও scholarship package evaluate করুন",
        timing: "Results · 29 January / 18 March / 21 May 2027",
        description:
          "Admission result এবং scholarship coverage একসঙ্গে পড়ে net cost ও acceptance deadline বুঝতে হবে।",
        actions: [
          "Award-এ tuition percentage, admission fee, monthly stipend, airfare ও conditions আলাদা করে লিখুন।",
          "First-round offer হলে 19 February 2027 admission-procedure deadline note করুন।",
          "Unfunded gap-এর সঙ্গে dormitory ও living cost যোগ করে total funding gap হিসাব করুন।",
          "JASSO post-enrollment award-কে guaranteed primary funding ধরে decision নেবেন না।",
        ],
        readyWhen:
          "Written offer-এর funding, net cost ও deadline বুঝে informed accept/decline decision নেওয়া হয়েছে।",
      },
    ],
    checklist: [
      "Exact IUJ program selected",
      "Scholarship eligibility matrix",
      "Bachelor’s degree certificate and transcript",
      "Program-specific CV and essays/SOP",
      "Recommendation letters",
      "English test or official exemption evidence",
      "GMAT/GRE or IUJ assessment plan where applicable",
      "Employment and leadership evidence",
      "Full-cost and minimum-funding budget",
      "Phase 2 Scholarship Section completed",
    ],
    afterSubmission: [
      "Portal, email ও fixed interview schedule monitor করুন; dates change করা যায় না বলে travel/work conflict আগেই সরান।",
      "Scholarship interview-এর জন্য career impact, leadership, financial need ও home-country contribution explain করতে প্রস্তুত থাকুন।",
      "Offer পেলে tuition reduction-এর বাইরে admission fee, stipend duration ও renewal terms লিখিতভাবে verify করুন।",
      "Enrollment-এর পরে IUJ-administered JASSO ও foundation awards available হলে Student Services-এর notice অনুসরণ করুন।",
    ],
    cautions: [
      "IUJ admission মানেই scholarship নয়; awards competitive এবং provider-specific।",
      "ADB-JSP-এ existing master’s degree ও work-experience restrictions থাকতে পারে—profile না মিললে apply করবেন না।",
      "DXP interview exemption wording current round-এর guideline দিয়ে পুনরায় check করুন।",
      "English-medium claim-এর জন্য transcript যথেষ্ট নয় যদি language of instruction স্পষ্ট না থাকে।",
      "JASSO ¥48,000/month university nomination-based এবং guaranteed নয়।",
    ],
    officialLinks: [
      {
        label: "IUJ admissions schedule",
        href: "https://www.iuj.ac.jp/admissions/",
        description: "2027 rounds, interview dates, results এবং English exemption policy দেখুন।",
      },
      {
        label: "IUJ tuition and scholarships",
        href: "https://www.iuj.ac.jp/admissions/cost/",
        description: "Current tuition, living budget, awards এবং application flow compare করুন।",
      },
      {
        label: "Admissions materials",
        href: "https://www.iuj.ac.jp/admissions/download-materials/",
        description: "Current admissions ও scholarship guidelines download করুন।",
      },
      {
        label: "IUJ research fellows",
        href: "https://www.iuj.ac.jp/research/institute/about/fellows/",
        description: "Yingying Zhang Zhang, Mihoko Sakurai ও other faculty affiliation verify করুন।",
      },
      {
        label: "JASSO Honors Scholarship",
        href: "https://www.jasso.go.jp/en/ryugaku/scholarship_j/shoreihi/about.html",
        description: "Post-enrollment nomination, stipend ও eligibility rules পড়ুন।",
      },
    ],
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
    title: "Meiji Governance Studies Master's: 2027 Verification Guide",
    summary:
      "English public-policy/governance master's option-এর verified language threshold, degree-level confusion এবং 2027 guide প্রকাশ না হওয়া পর্যন্ত safe planning process।",
    label: "Watchlist · IELTS 6.0 & master's guide pending",
    funding: "University/external aid may exist, but no full scholarship should be assumed before a written 2027 award.",
    duration: "Usually 2 years · master's intake must be verified",
    audience: "Applicants targeting governance, public policy, development or international affairs",
    realityCheck:
      "Attachment-এর IELTS 5.5 claim verified current material-এর সঙ্গে মেলে না। Latest verified English-track master's material-এ IELTS 6.0 বা TOEFL iBT 79 ছিল। Spring 2027 page যেটি পাওয়া গেছে সেটি Global Governance doctoral admission—Governance Studies master's নয়। তাই এটিকে active low-English master's option না ধরে watchlist রাখুন।",
    highlights: [
      "Governance Studies master's এবং Global Governance doctoral আলাদা program/degree।",
      "Latest verified master's English benchmark IELTS 6.0 / TOEFL iBT 79।",
      "2027 master's guide প্রকাশ না হওয়া পর্যন্ত deadlines ও requirements pending।",
      "Policy/governance fit শক্তিশালী করতে professional impact, regional issue ও analytical method দেখাতে হবে।",
      "Funding availability admission eligibility-এর আলাদা প্রশ্ন।",
    ],
    fit: [
      "Public policy, governance, development বা international relations-এ clear career goal আছে।",
      "IELTS 6.0/TOEFL 79 level meet করতে পারবেন।",
      "CS background থেকে policy-tech, digital governance বা data-for-policy bridge explain করতে পারবেন।",
      "2027 master's guide প্রকাশ না হওয়া পর্যন্ত alternative applications চালু রাখবেন।",
    ],
    quickStart: [
      "Program name ও degree level সব notes-এ স্পষ্ট লিখুন।",
      "IELTS 6.0+ target করুন; 5.5 ধরে application plan করবেন না।",
      "2027 master's admissions page publication alert রাখুন।",
      "Digital governance/data policy angle থাকলে দুই পাতার focused concept note লিখুন।",
    ],
    steps: [
      {
        title: "Correct program verify করুন",
        timing: "Application শুরু করার আগে",
        description: "Doctoral page, master's page এবং graduate school name আলাদা করে মিলান।",
        actions: [
          "Degree field-এ Master's লেখা আছে কি না check করুন।",
          "Intake, teaching language ও applicant category official PDF থেকে নিন।",
          "2027 master's guide না থাকলে admissions office-কে expected publication date জিজ্ঞাসা করুন।",
          "Search-result summary বা third-party table-কে final source করবেন না।",
        ],
        readyWhen: "Official 2027 master's PDF হাতে আছে।",
      },
      {
        title: "English ও academic eligibility পূরণ করুন",
        timing: "Guideline-এর অপেক্ষায়",
        description: "Verified past threshold-এর নিচে score থাকলে test retake plan করুন।",
        actions: [
          "IELTS 6.0 বা TOEFL 79 benchmark ধরে প্রস্তুতি নিন।",
          "2027 guide-এ score validity, home edition ও waiver rules পড়ুন।",
          "Degree/transcript এবং grading explanation সংগ্রহ করুন।",
          "Policy coursework কম হলে relevant evidence/coursework যোগ করুন।",
        ],
        readyWhen: "Published threshold এবং academic rules পূরণ করেন।",
      },
      {
        title: "Governance-focused application লিখুন",
        timing: "Eligibility confirm হলে",
        description: "Generic international-interest statement-এর বদলে একটি solvable governance problem নিন।",
        actions: [
          "Problem, stakeholders, evidence gap ও proposed analysis লিখুন।",
          "Technical background থাকলে digital government, AI policy বা data governance connection দিন।",
          "Meiji curriculum/faculty fit concreteভাবে দেখান।",
          "Career outcome ও country/community impact যুক্ত করুন।",
        ],
        readyWhen: "SOP master's program-specific এবং evidence-based।",
      },
      {
        title: "Funding আলাদাভাবে verify করুন",
        timing: "2027 guide ও offer stage",
        description: "Admission information থেকে scholarship availability infer করবেন না।",
        actions: [
          "University, JASSO ও external options-এর application timing লিখুন।",
          "Pre-admission এবং post-enrollment awards আলাদা করুন।",
          "Tokyo cost সহ unfunded budget বানান।",
          "Written terms ছাড়া aid amount ধরে offer accept করবেন না।",
        ],
        readyWhen: "Confirmed net cost আপনার budget-এর মধ্যে।",
      },
    ],
    checklist: [
      "Official 2027 master's guide", "Correct graduate school and degree", "IELTS 6.0/TOEFL 79 plan",
      "Degree and transcript", "Governance-focused SOP", "CV", "Recommendations",
      "Program/faculty evidence", "Scholarship matrix", "Tokyo cost plan",
    ],
    afterSubmission: [
      "Interview-এ chosen governance problem ও analytical approach explain করুন।",
      "Doctoral-program emails/documents ভুল করে নিজের master's file-এ ব্যবহার করবেন না।",
      "Scholarship result এবং admission result আলাদাভাবে track করুন।",
    ],
    cautions: [
      "IELTS 5.5 claim ব্যবহার করবেন না; latest verified master's reference 6.0।",
      "Spring 2027 Global Governance page doctoral—Governance Studies master's নয়।",
      "2027 master's deadline official guide ছাড়া অনুমান করা হয়েছে এমন কোনো date অনুসরণ করবেন না।",
    ],
    officialLinks: [
      { label: "Meiji graduate admissions", href: "https://www.meiji.ac.jp/cip/english/graduate/", description: "Correct school, degree ও current application guide খুঁজুন।" },
      { label: "Graduate School of Governance Studies", href: "https://www.meiji.ac.jp/mugs2/english/", description: "Program curriculum ও official notices দেখুন।" },
    ],
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
];

export function getScholarshipGuide(slug: string) {
  return scholarshipGuides.find((guide) => guide.slug === slug);
}
