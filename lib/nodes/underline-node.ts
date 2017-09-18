import { XMLNode } from '../xml-node';
import { BufferBuilder, UNDERLINE_MODE } from '../buffer-builder';

export default class UnderlineNode extends XMLNode {

  constructor(node: any) {
    super(node);
  }

  public open(bufferBuilder: BufferBuilder): BufferBuilder {
    switch (this.attributes.mode) {
      case 'one-point':
        bufferBuilder.startUnderline(UNDERLINE_MODE.ONE_POINT_OF_COARSE); break;
      case 'two-points':
        bufferBuilder.startUnderline(UNDERLINE_MODE.TWO_POINTS_OF_COARSE); break;
      default:
        bufferBuilder.startUnderline();
    }
    return bufferBuilder;
  }

  public close(bufferBuilder: BufferBuilder): BufferBuilder {
    bufferBuilder.endUnderline();
    return bufferBuilder;
  }

}
