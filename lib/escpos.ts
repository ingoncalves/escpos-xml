import { TemplateParser } from './template-parser';
import { XMLParser } from './xml-parser';
import { BufferBuilder } from './buffer-builder';

export class EscPos {

  public static getBufferFromTemplate(template: string, data: any): number[] {
    let templateParser = new TemplateParser();
    return templateParser.parser(template, data).build();
  }

  public static getBufferFromXML(xml: string): number[] {
    let xmlParser = new XMLParser();
    return xmlParser.parser(xml).build();
  }

  public static getBufferBuilder(): BufferBuilder {
    return new BufferBuilder();
  }

}
