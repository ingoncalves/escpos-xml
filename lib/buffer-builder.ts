import { Command } from './command';
import { MutableBuffer } from 'mutable-buffer';
import bluetoothprintercommand from './printers/bluetoothprinter/bluetoothprintercommand';

export class BufferBuilder {

  protected buffer: MutableBuffer;

  constructor(public command: Command = new bluetoothprintercommand, protected defaultSettings: boolean = true) {
    this.buffer = new MutableBuffer();

    if (this.defaultSettings) {
      this.resetCharacterSize();
      this.resetCharacterCodeTable();
    }

  }

  public end(): BufferBuilder {
    return this;
  }

  public resetCharacterCodeTable(): BufferBuilder {
    this.buffer.write(this.command.ESC_t(0));
    return this;
  }

  public setCharacterSize(width: number = 0, height: number = 0): BufferBuilder {
    let size = (width << 4) + height;
    this.buffer.write(this.command.GS_exclamation(size));
    return this;
  }

  public resetCharacterSize(): BufferBuilder {
    this.buffer.write(this.command.GS_exclamation(0));
    return this;
  }

  public startCompressedCharacter(): BufferBuilder {
    this.buffer.write(this.command.ESC_M(1));
    return this;
  }

  public endCompressedCharacter(): BufferBuilder {
    this.buffer.write(this.command.ESC_M(0));
    return this;
  }

  public startBold(): BufferBuilder {
    this.buffer.write(this.command.ESC_E(1));
    return this;
  }

  public endBold(): BufferBuilder {
    this.buffer.write(this.command.ESC_E(0));
    return this;
  }

  public startUnderline(underlineMode: number = this.command.UNDERLINE_MODE): BufferBuilder {
    this.buffer.write(this.command.ESC_minus(underlineMode));
    return this;
  }

  public endUnderline(): BufferBuilder {
    this.buffer.write(this.command.ESC_minus(48));
    return this;
  }

  public startAlign(alignment: number): BufferBuilder {
    this.buffer.write(this.command.ESC_a(alignment));
    return this;
  }

  public resetAlign(): BufferBuilder {
    return this.startAlign(this.command.ALIGNMENT);
  }

  public startWhiteMode(): BufferBuilder {
    this.buffer.write(this.command.GS_B(1));
    return this;
  }

  public endWhiteMode(): BufferBuilder {
    this.buffer.write(this.command.GS_B(0));
    return this;
  }

  public startReverseMode(): BufferBuilder {
    this.buffer.write(this.command.ESC_rev(1));
    return this;
  }

  public endReverseMode(): BufferBuilder {
    this.buffer.write(this.command.ESC_rev(0));
    return this;
  }

  public printBarcode(data: string, barcodeSystem: number, width: number = this.command.BARCODE_WIDTH, height: number = 162, labelFont: number = this.command.BARCODE_LABEL_FONT, labelPosition: number = this.command.BARCODE_LABEL_POSITION, leftSpacing: number = 0): BufferBuilder {
    this.buffer.write(this.command.GS_w(width)); // width
    this.buffer.write(this.command.GS_h(height)); // height
    this.buffer.write(this.command.GS_x(leftSpacing)); // left spacing
    this.buffer.write(this.command.GS_f(labelFont)); // HRI font
    this.buffer.write(this.command.GS_H(labelPosition)); // HRI font
    this.buffer.write(this.command.GS_K(barcodeSystem, data.length)); // data is a string in UTF-8
    this.buffer.write(data, 'ascii');
    return this;
  }

  public printQRcode(data: string, version: number = 1, errorCorrectionLevel: number = this.command.QR_EC_LEVEL, componentTypes: number = 8): BufferBuilder {
    this.buffer.write(this.command.ESC_Z(version, errorCorrectionLevel, componentTypes));
    this.buffer.writeUInt16LE(data.length); // data is a string in UTF-8
    this.buffer.write(data, 'ascii');
    return this;
  }

  public printBitmap(image: number[], width: number, height: number, scale: number = this.command.BITMAP_SCALE): BufferBuilder {
    //TODO
    return this;
  }

  public printText(text: string): BufferBuilder {
    this.buffer.write(text, 'ascii');
    return this;
  }

  public printTextLine(text: string): BufferBuilder {
    return this.printText(text).breakLine();
  }

  public breakLine(lines: number = 0): BufferBuilder {
    this.buffer.write(this.command.ESC_d(lines));
    return this;
  }

  public lineFeed(): BufferBuilder {
    this.buffer.write(this.command.LF);
    return this;
  }

  public transmitStatus(statusType: number): BufferBuilder {
    this.buffer.write(this.command.DLE_EOT(statusType));
    return this;
  }

  public build(): number[] {
    if (this.defaultSettings) {
      this.lineFeed();
      this.buffer.write(this.command.ESC_init);
    }

    return this.buffer.flush();
  }

  /**
   * Register Paper Cut Action
   * @return BufferBuilder
   */
  public paperCut(): BufferBuilder {
    this.buffer.write(this.command.GS_v(1));
    return this;
  }

 }
