import { XMLNode } from '../xml-node';
import { BufferBuilder } from '../buffer-builder';

export default class WhiteModeNode extends XMLNode {

  constructor(node: any) {
    super(node);
  }

  public open(bufferBuilder: BufferBuilder): BufferBuilder {
    bufferBuilder.startWhiteMode();
    return bufferBuilder;
  }

  public close(bufferBuilder: BufferBuilder): BufferBuilder {
    bufferBuilder.endWhiteMode();
    return bufferBuilder;
  }

}
