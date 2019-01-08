import { TemplateParser } from './template-parser';
import { XMLParser } from './xml-parser';
import { definePrinter } from './define-printer';
import { BufferBuilder } from './buffer-builder';

export class EscPos {

  private builder: BufferBuilder;

  constructor(deviceName: string) {
    this.builder = this.getBuilderFromPrinter(deviceName);
  }

  private getBuilderFromPrinter(name: string) {
    return definePrinter(name);
  }

  public getBufferFromTemplate(template: string, data: any): number[] {
    let templateParser = new TemplateParser(this.builder);
    return templateParser.parser(template, data).build();
  }

  public getBufferFromXML(xml: string): number[] {
    let xmlParser = new XMLParser(this.builder);
    return xmlParser.parser(xml).build();
  }

  public getBufferBuilder() {
    return this.builder;
  }

}
