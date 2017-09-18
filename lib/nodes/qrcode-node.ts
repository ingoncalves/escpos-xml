import { XMLNode } from '../xml-node';
import { BufferBuilder, QR_EC_LEVEL } from '../buffer-builder';

export default class QRcodeNode extends XMLNode {

  constructor(node: any) {
    super(node);
  }

  public open(bufferBuilder: BufferBuilder): BufferBuilder {
    let version, errorCorrectionLevel, componentTypes;

    if (/\d+/.test(this.attributes.version)) {
      version = parseInt(this.attributes.version);
    } else {
      version = 1;
    }

    switch (this.attributes.ecl) {
      case 'L':
        errorCorrectionLevel = QR_EC_LEVEL.L; break;
      case 'M':
        errorCorrectionLevel = QR_EC_LEVEL.M; break;
      case 'Q':
        errorCorrectionLevel = QR_EC_LEVEL.Q; break;
      case 'H':
        errorCorrectionLevel = QR_EC_LEVEL.H; break;
      default:
        errorCorrectionLevel = QR_EC_LEVEL.H;
    }

    if (/\d+/.test(this.attributes.componentTypes)) {
      componentTypes = parseInt(this.attributes.componentTypes);
    } else {
      componentTypes = 8;
    }

    if (this.content) {
      bufferBuilder.printQRcode(this.content, version, errorCorrectionLevel, componentTypes);
    }

    return bufferBuilder;
  }

  public close(bufferBuilder: BufferBuilder): BufferBuilder {
    return bufferBuilder;
  }

}
