export type DirectoryItem = {
  slug: string;
  type: string;
  title: string;
  body: string;
  org: string;
  state: string;
  date: string;
  officialLink: string;
  actionText: string;
  summary: string;
  details: string[];
  steps: string[];
};

export const schemes: DirectoryItem[] = [
  {
    slug: "up-scholarship-2026-demo",
    type: "Sarkari Yojna",
    title: "UP Scholarship Yojna 2026",
    body: "Demo update for Uttar Pradesh scholarship application and renewal.",
    org: "Uttar Pradesh Scholarship Portal",
    state: "UP",
    date: "Application open",
    officialLink: "https://scholarship.up.gov.in",
    actionText: "Apply on UP Scholarship official website",
    summary: "Students can apply or renew scholarship form through the official UP portal.",
    details: [
      "Eligible students can submit fresh or renewal scholarship application.",
      "Income certificate, caste certificate, bank details and education documents may be required.",
      "Application status should be checked regularly after form submission."
    ],
    steps: [
      "Open the official yojna website.",
      "Register or login with student details.",
      "Fill personal, academic and bank information carefully.",
      "Upload documents, submit form and save final printout."
    ]
  },
  {
    slug: "bihar-student-credit-card-2026-demo",
    type: "Sarkari Yojna",
    title: "Bihar Student Credit Card Yojna 2026",
    body: "Demo Bihar yojna update for higher education financial support.",
    org: "Bihar Education Finance Corporation",
    state: "Bihar",
    date: "Application open",
    officialLink: "https://www.7nishchay-yuvaupmission.bihar.gov.in",
    actionText: "Apply on Bihar yojna official website",
    summary: "Students can apply for education loan assistance through the official Bihar portal.",
    details: [
      "Yojna is for eligible students pursuing higher education.",
      "Admission proof, identity proof, residence details and bank information may be required.",
      "Application verification is completed through the official process."
    ],
    steps: [
      "Visit the official yojna portal.",
      "Create applicant login and select student credit card yojna.",
      "Fill education, course and document details.",
      "Submit application and track status online."
    ]
  },
  {
    slug: "mp-ladli-behna-yojana-2026-demo",
    type: "Sarkari Yojna",
    title: "MP Ladli Behna Yojana 2026",
    body: "Demo Madhya Pradesh yojna update for eligible women beneficiaries.",
    org: "Government of Madhya Pradesh",
    state: "Madhya Pradesh",
    date: "Status active",
    officialLink: "https://cmladlibahna.mp.gov.in",
    actionText: "Apply on MP yojna official website",
    summary: "Eligible applicants can check yojna status and application updates online.",
    details: [
      "Applicant eligibility should be verified from the latest official notice.",
      "Samagra ID, Aadhaar and bank account details may be needed.",
      "Payment or application status can be checked through official portal."
    ],
    steps: [
      "Open the official yojna website.",
      "Check application or beneficiary status section.",
      "Enter required ID or registration details.",
      "Submit and save the confirmation/status page."
    ]
  },
  {
    slug: "haryana-chirayu-ayushman-2026-demo",
    type: "Sarkari Yojna",
    title: "Haryana Chirayu Ayushman Yojna 2026",
    body: "Demo Haryana health yojna update for eligible families.",
    org: "Government of Haryana",
    state: "Haryana",
    date: "Status active",
    officialLink: "https://chirayuayushmanharyana.in",
    actionText: "Check on Haryana yojna official website",
    summary: "Eligible families can check health benefit status from the official portal.",
    details: [
      "Family eligibility and beneficiary details are verified through official records.",
      "Aadhaar, family ID and mobile number may be required.",
      "Use only official portal for card/status related steps."
    ],
    steps: [
      "Visit the official yojna portal.",
      "Open beneficiary or card status option.",
      "Enter family ID or required details.",
      "Check status and follow official instructions."
    ]
  },
  {
    slug: "rajasthan-anuprati-coaching-yojana-2026-demo",
    type: "Sarkari Yojna",
    title: "Rajasthan Anuprati Coaching Yojana 2026",
    body: "Demo Rajasthan yojna update for free coaching assistance.",
    org: "Government of Rajasthan",
    state: "Rajasthan",
    date: "Application soon",
    officialLink: "https://sje.rajasthan.gov.in",
    actionText: "Apply on Rajasthan yojna official website",
    summary: "Eligible candidates can apply for coaching support as per official schedule.",
    details: [
      "Yojna supports eligible candidates for competitive exam coaching.",
      "Income, category, residence and education documents may be required.",
      "Selection and merit details should be verified from official notice."
    ],
    steps: [
      "Open the official Rajasthan yojna website.",
      "Find Anuprati Coaching Yojana notice or apply link.",
      "Fill applicant details and upload documents.",
      "Submit application and keep acknowledgement safe."
    ]
  }
];

export const results: DirectoryItem[] = [
  {
    slug: "ssc-chsl-result-2026-demo",
    type: "Result",
    title: "SSC CHSL Result 2026",
    body: "Demo result update for SSC CHSL recruitment exam.",
    org: "Staff Selection Commission",
    state: "UP",
    date: "Result soon",
    officialLink: "https://ssc.gov.in",
    actionText: "Check on SSC official website",
    summary: "SSC CHSL result will be released with roll number wise shortlist details.",
    details: [
      "Result PDF may include roll numbers of shortlisted candidates.",
      "Cut off and marks can be published separately by the commission.",
      "Candidates should keep registration details ready for scorecard."
    ],
    steps: [
      "Open SSC official website.",
      "Go to result section.",
      "Select CHSL result link.",
      "Download PDF or login to view marks."
    ]
  },
  {
    slug: "bihar-board-12th-result-2026-demo",
    type: "Board Result",
    title: "Bihar Board 12th Result 2026",
    body: "Demo Bihar board result update for intermediate annual exam.",
    org: "Bihar School Examination Board",
    state: "Bihar",
    date: "Result soon",
    officialLink: "https://results.biharboardonline.com",
    actionText: "Check on Bihar Board official website",
    summary: "Students can check result using roll code and roll number.",
    details: [
      "Result page may ask for roll code, roll number and captcha.",
      "Original marksheet will be available from school after official release.",
      "Students should verify subject wise marks after result."
    ],
    steps: [
      "Open Bihar Board result website.",
      "Select intermediate result link.",
      "Enter roll code and roll number.",
      "View result and save a copy."
    ]
  },
  {
    slug: "mp-patwari-result-2026-demo",
    type: "Result",
    title: "MP Patwari Result 2026",
    body: "Demo Madhya Pradesh result update for patwari recruitment.",
    org: "Madhya Pradesh Employee Selection Board",
    state: "Madhya Pradesh",
    date: "Result soon",
    officialLink: "https://esb.mp.gov.in",
    actionText: "Check on MPESB official website",
    summary: "MP Patwari result will show shortlisted candidates for next stage.",
    details: [
      "Result and scorecard can be published separately.",
      "Candidates should check marks, category and qualifying status carefully.",
      "Document verification details may be released after result."
    ],
    steps: [
      "Visit MPESB official website.",
      "Open result section.",
      "Select patwari recruitment result.",
      "Enter application details and check result."
    ]
  },
  {
    slug: "rajasthan-board-10th-result-2026-demo",
    type: "Board Result",
    title: "Rajasthan Board 10th Result 2026",
    body: "Demo Rajasthan board result update for class 10 students.",
    org: "Board of Secondary Education Rajasthan",
    state: "Rajasthan",
    date: "Result soon",
    officialLink: "https://rajeduboard.rajasthan.gov.in",
    actionText: "Check on RBSE official website",
    summary: "RBSE 10th result can be checked by roll number after official announcement.",
    details: [
      "Students should keep roll number ready before checking result.",
      "Online result is provisional and original marksheet comes from school.",
      "Check name, roll number and subject marks carefully."
    ],
    steps: [
      "Open RBSE official website.",
      "Select class 10 result link.",
      "Enter roll number.",
      "Download or print the provisional result."
    ]
  },
  {
    slug: "haryana-police-result-2026-demo",
    type: "Result",
    title: "Haryana Police Constable Result 2026",
    body: "Demo Haryana police constable result update.",
    org: "Haryana Staff Selection Commission",
    state: "Haryana",
    date: "Result soon",
    officialLink: "https://hssc.gov.in",
    actionText: "Check on HSSC official website",
    summary: "HSSC result will include shortlisted candidates for next recruitment stage.",
    details: [
      "Result may be released as PDF or login-based scorecard.",
      "Candidates should check roll number, category and stage status.",
      "Next stage details will be notified by HSSC separately."
    ],
    steps: [
      "Visit HSSC official website.",
      "Open result section.",
      "Select police constable result notification.",
      "Download PDF or login to check status."
    ]
  }
];

export function getSchemeBySlug(slug: string) {
  return schemes.find((item) => item.slug === slug);
}

export function getResultBySlug(slug: string) {
  return results.find((item) => item.slug === slug);
}
