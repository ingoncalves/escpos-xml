import { TemplateParser } from './template-parser';
import { XMLParser } from './xml-parser';
import { BufferBuilder } from './buffer-builder';

export class EscPos {

  constructor(private command: any) {

  }

  public getBufferFromTemplate(template: string, data: any): number[] {
    let templateParser = new TemplateParser(this.command);
    return templateParser.parser(template, data).build();
  }

  public getBufferFromXML(xml: string): number[] {
    let xmlParser = new XMLParser(this.command);
    return xmlParser.parser(xml).build();
  }

  public getBufferBuilder(): BufferBuilder {
    return new BufferBuilder(this.command);
  }

}
