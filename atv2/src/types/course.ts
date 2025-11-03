export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  totalLessons: number;
}

export interface Question {
  id: string;
  question: string;
  code: string;
  options: string[];
  correctAnswer: number;
}

export interface Lesson {
  id: string;
  courseId: string;
  description: string;
  title: string;
  order: number;
  questions: Question[];
}
