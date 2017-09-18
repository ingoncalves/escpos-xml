import { XMLNode } from '../xml-node';
import { BufferBuilder } from '../buffer-builder';

export default class LineFeedNode extends XMLNode {

  constructor(node: any) {
    super(node);
  }

  public open(bufferBuilder: BufferBuilder): BufferBuilder {
    return bufferBuilder.lineFeed();
  }

  public close(bufferBuilder: BufferBuilder): BufferBuilder {
    return bufferBuilder;
  }
}
