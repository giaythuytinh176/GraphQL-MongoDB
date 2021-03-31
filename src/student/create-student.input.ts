import { Field, InputType } from "@nestjs/graphql";
import { IsString, MaxLength, MinLength } from "class-validator";

@InputType()
export class CreateStudentInput {

  @MaxLength(100)
  @MinLength(1)
  @IsString()
  @Field()
  firstName: string;

  @MaxLength(100)
  @MinLength(1)
  @IsString()
  @Field()
  lastName: string;
}
