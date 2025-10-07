import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: any) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const parsedValue = this.schema.safeParse(value);
    
    if (parsedValue.success) {
      return parsedValue.data;
    }

    throw new BadRequestException(parsedValue.error.format());
  }
}
  