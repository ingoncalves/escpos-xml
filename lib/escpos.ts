import { TemplateParser } from './template-parser';
import { XMLParser } from './xml-parser';
import { BufferBuilder } from './buffer-builder';
import { Command } from './commands/command';
import { dynamicCommand } from './commands';

export class EscPos {

  private command: Command;

  constructor(deviceName: string) {
    this.command = this.getCommandFromDeviceName(deviceName);
  }

  private getCommandFromDeviceName(name: string) {
    return dynamicCommand(name);
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
