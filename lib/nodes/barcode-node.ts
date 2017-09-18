import { XMLNode } from '../xml-node';
import { BufferBuilder, BARCODE_SYSTEM, BARCODE_WIDTH, BARCODE_LABEL_FONT, BARCODE_LABEL_POSITION } from '../buffer-builder';

export default class BarcodeNode extends XMLNode {

  constructor(node: any) {
    super(node);
  }

  public open(bufferBuilder: BufferBuilder): BufferBuilder {
    let system, width, height, labelFont, labelPosition, leftSpacing;

    switch (this.attributes.system) {
      case 'UPC_A':
        system = BARCODE_SYSTEM.UPC_A; break;
      case 'UPC_E':
        system = BARCODE_SYSTEM.UPC_E; break;
      case 'EAN_13':
        system = BARCODE_SYSTEM.EAN_13; break;
      case 'EAN_8':
        system = BARCODE_SYSTEM.EAN_8; break;
      case 'CODE_39':
        system = BARCODE_SYSTEM.CODE_39; break;
      case 'ITF':
        system = BARCODE_SYSTEM.ITF; break;
      case 'CODABAR':
        system = BARCODE_SYSTEM.CODABAR; break;
      case 'CODE_93':
        system = BARCODE_SYSTEM.CODE_93; break;
      case 'CODE_128':
        system = BARCODE_SYSTEM.CODE_128; break;
    }

    switch (this.attributes.width) {
      case 'DOT_250':
        width = BARCODE_WIDTH.DOT_250; break;
      case 'DOT_375':
        width = BARCODE_WIDTH.DOT_375; break;
      case 'DOT_560':
        width = BARCODE_WIDTH.DOT_560; break;
      case 'DOT_625':
        width = BARCODE_WIDTH.DOT_625; break;
      case 'DOT_750':
        width = BARCODE_WIDTH.DOT_750; break;
      default:
        width = BARCODE_WIDTH.DOT_375;
    }

    switch (this.attributes.labelFont) {
      case 'FONT_A':
        labelFont = BARCODE_LABEL_FONT.FONT_A; break;
      case 'FONT_B':
        labelFont = BARCODE_LABEL_FONT.FONT_B; break;
      default:
        labelFont = BARCODE_LABEL_FONT.FONT_A;
    }

    switch (this.attributes.labelPosition) {
      case 'NOT_PRINT':
        labelPosition = BARCODE_LABEL_POSITION.NOT_PRINT; break;
      case 'ABOVE':
        labelPosition = BARCODE_LABEL_POSITION.ABOVE; break;
      case 'BOTTOM':
        labelPosition = BARCODE_LABEL_POSITION.BOTTOM; break;
      case 'ABOVE_BOTTOM':
        labelPosition = BARCODE_LABEL_POSITION.ABOVE_BOTTOM; break;
      default:
        labelPosition = BARCODE_LABEL_POSITION.BOTTOM;
    }

    if (/\d+/.test(this.attributes.height)) {
      height = parseInt(this.attributes.height);
    } else {
      height = 162;
    }

    if (/\d+/.test(this.attributes.leftSpacing)) {
      leftSpacing = parseInt(this.attributes.leftSpacing);
    } else {
      leftSpacing = 0;
    }

    if (system && this.content) {
      bufferBuilder.printBarcode(this.content, system, width, height, labelFont, labelPosition, leftSpacing);
    }

    return bufferBuilder;
  }

  public close(bufferBuilder: BufferBuilder): BufferBuilder {
    return bufferBuilder;
  }

}
