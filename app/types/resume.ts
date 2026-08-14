export type ResumeLocale = "en" | "es";

export interface ResumeJob {
  employer: string;
  position: string;
  start: string;
  end?: string;
  summary: string;
  highlights: string[];
  keywords: string[];
}

export interface Resume {
  employment: {
    history: ResumeJob[];
  };
}
