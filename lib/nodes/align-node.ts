import { XMLNode } from '../xml-node';
import { BufferBuilder, ALIGNMENT } from '../buffer-builder';

export default class AlignNode extends XMLNode {

  constructor(node: any) {
    super(node);
  }

  public open(bufferBuilder: BufferBuilder): BufferBuilder {
    switch (this.attributes.mode) {
      case 'center':
        bufferBuilder.startAlign(ALIGNMENT.CENTER); break;
      case 'left':
        bufferBuilder.startAlign(ALIGNMENT.LEFT); break;
      case 'right':
        bufferBuilder.startAlign(ALIGNMENT.RIGHT); break;
    }
    return bufferBuilder;
  }

  public close(bufferBuilder: BufferBuilder): BufferBuilder {
    bufferBuilder.resetAlign();
    return bufferBuilder;
  }

}
