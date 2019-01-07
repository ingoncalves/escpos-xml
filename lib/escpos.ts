import { TemplateParser } from './template-parser';
import { XMLParser } from './xml-parser';
import { BufferBuilder } from './buffer-builder';
import { definePrinter } from './define-printer';

export class EscPos {

  private builder: BufferBuilder;

  constructor(deviceName: string) {
    this.builder = this.getBuilderFromDeviceName(deviceName);
  }

  private getBuilderFromDeviceName(name: string) {
    return definePrinter(name);
  }

  public getBufferFromTemplate(template: string, data: any): number[] {
    let templateParser = new TemplateParser(this.builder.command);
    return templateParser.parser(template, data).build();
  }

  public getBufferFromXML(xml: string): number[] {
    let xmlParser = new XMLParser(this.builder.command);
    return xmlParser.parser(xml).build();
  }

  public getBufferBuilder(): BufferBuilder {
    return new BufferBuilder(this.builder.command);
  }

}
