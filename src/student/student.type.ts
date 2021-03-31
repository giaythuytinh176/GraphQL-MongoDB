import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType("Student")
export class StudentType {

  @Field(type => ID) // bo type => ID di van hoat dong binh thuong
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
