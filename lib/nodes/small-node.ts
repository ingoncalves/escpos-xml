import { XMLNode } from '../xml-node';
import { BufferBuilder } from '../buffer-builder';

export default class SmallNode extends XMLNode {

  constructor(node: any) {
    super(node);
  }

  public open(bufferBuilder: BufferBuilder): BufferBuilder {
    bufferBuilder.startCompressedCharacter();
    return bufferBuilder;
  }

  public close(bufferBuilder: BufferBuilder): BufferBuilder {
    bufferBuilder.endCompressedCharacter();
    return bufferBuilder;
  }

}
