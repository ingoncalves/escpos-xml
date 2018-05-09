import { XMLNode } from '../xml-node';
import { BufferBuilder } from '../buffer-builder';

export default class PaperCutNode extends XMLNode {

  constructor(node: any) {
    super(node);
  }

  public open(bufferBuilder: BufferBuilder): BufferBuilder {
    return bufferBuilder.paperCut();
  }

  public close(bufferBuilder: BufferBuilder): BufferBuilder {
    return bufferBuilder;
  }

}