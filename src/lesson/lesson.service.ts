import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson)
        private lessonRepository: Repository<Lesson>,
    ) {

    }

    async getLesson(id: string): Promise<Lesson> {
        return this.lessonRepository.findOne({ id: id});
    }

    async createLesson(name, startDate, endDate): Promise<Lesson> {
        const lesson = this.lessonRepository.create({
            id: uuid(),
            name: name, 
            startDate: startDate, 
            endDate: endDate,
        });
        
        return await this.lessonRepository.save(lesson);
    }
}
