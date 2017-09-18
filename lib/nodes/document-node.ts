import { XMLNode } from '../xml-node';
import { BufferBuilder } from '../buffer-builder';

export default class DocumentNode extends XMLNode {

  constructor(node: any) {
    super(node);
  }

  public open(bufferBuilder: BufferBuilder): BufferBuilder {
    if (this.attributes.reverse)
      bufferBuilder.startReverseMode();

    return bufferBuilder;
  }

  public close(bufferBuilder: BufferBuilder): BufferBuilder {
    bufferBuilder.endReverseMode();
    return bufferBuilder;
  }
}
