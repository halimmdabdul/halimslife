export type WorkedSentence = {
  japanese: string;
  reading: string;
  bengali: string;
  breakdown: string[];
  teachingPoint: string;
};

export type PracticeScaffold = {
  task: string;
  hint: string;
  model: string;
};

export type UnitDeepDive = {
  coreIdea: string;
  mentalModel: string[];
  buildSteps: string[];
  contrasts: string[];
  workedSentences: WorkedSentence[];
  dialogue: Array<{
    speaker: string;
    japanese: string;
    reading: string;
    bengali: string;
  }>;
  practiceScaffolds: PracticeScaffold[];
  answerExplanation: string;
};
