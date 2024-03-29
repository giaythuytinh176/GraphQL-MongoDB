import { Query, Resolver } from "@nestjs/graphql";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";
import { Args, Mutation } from "@nestjs/graphql";
import { CreateStudentInput } from "./create-student.input";

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(
    private studentService: StudentService
  ) {

  }

  @Query(returns => [StudentType])
  async students() {
    return this.studentService.getStudents();
  }

  @Query(returns => StudentType)
  async student(
    @Args("id") id: string
  ) {
    return this.studentService.getStudent(id);
  }

  @Mutation(returns => StudentType)
  async createStudent(
    @Args("createStudentInput") createStudentInput: CreateStudentInput
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
