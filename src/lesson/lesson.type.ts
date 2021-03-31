import { Field, ID, ObjectType } from "@nestjs/graphql";
import { StudentType } from "src/student/student.type";

@ObjectType("Lesson")
export class LessonType {
  @Field(type => ID) // bo type => ID di van hoat dong binh thuong
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field(type => [StudentType])
  students: string[];
}