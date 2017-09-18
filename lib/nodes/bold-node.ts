import { XMLNode } from '../xml-node';
import { BufferBuilder } from '../buffer-builder';

export default class BoldNode extends XMLNode {

  constructor(node: any) {
    super(node);
  }

  public open(bufferBuilder: BufferBuilder): BufferBuilder {
    bufferBuilder.startBold();
    return bufferBuilder;
  }

  public close(bufferBuilder: BufferBuilder): BufferBuilder {
    bufferBuilder.endBold();
    return bufferBuilder;
  }

}
