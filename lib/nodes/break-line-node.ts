import { XMLNode } from '../xml-node';
import { BufferBuilder } from '../buffer-builder';

export default class BreakLineNode extends XMLNode {

  constructor(node: any) {
    super(node);
  }

  public open(bufferBuilder: BufferBuilder): BufferBuilder {
    let lines: number = 0;
    if (/\d+/.test(this.attributes.lines))
      lines = parseInt(this.attributes.lines) - 1;

    return bufferBuilder.breakLine(lines);
  }

  public close(bufferBuilder: BufferBuilder): BufferBuilder {
    return bufferBuilder;
  }
}
