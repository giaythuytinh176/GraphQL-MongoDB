import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateStudentInput } from "./create-student.input";
import { Student } from "./student.entity";
import { v4 as uuid } from "uuid";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>
  ) {

  }

  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async getStudent(id: string): Promise<Student> {
    return this.studentRepository.findOne({ id: id });
  }

  createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
    const { firstName: firstName, lastName: lastName } = createStudentInput;

    const student = this.studentRepository.create({
      id: uuid(),
      firstName: firstName,
      lastName: lastName
    });

    return this.studentRepository.save(student);
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.studentRepository.find({
      where: {
        id: {
          $in: studentIds,
        }
      }
    });
  }
}
