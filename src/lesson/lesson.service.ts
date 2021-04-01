import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { v4 as uuid } from "uuid";
import { Lesson } from "./lesson.entity";
import { CreateLessonInput } from "./lesson.input";

@Injectable() 
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>
  ) {

  }

  async getLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }

  async getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne({ id: id });
  }

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name: name, startDate: startDate, endDate: endDate } = createLessonInput;

    const lesson = this.lessonRepository.create({
      id: uuid(),
      name: name,
      startDate: startDate,
      endDate: endDate,
      students: [],
    });

    return this.lessonRepository.save(lesson);
  }

  async assignStudentsToLesson(lessonId: string, studentIds: string[]): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOne({ id: lessonId });
    console.log('lesson', lesson);
    lesson.students = [...lesson.students, ...studentIds];
    console.log('lesson.students', lesson.students);
    return this.lessonRepository.save(lesson);
  }
}
