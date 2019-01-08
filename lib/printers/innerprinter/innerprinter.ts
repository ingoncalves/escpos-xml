import { BufferBuilder } from "../../buffer-builder";
import innerprintercommand from "./innerprintercommand";

export default class InnerPrinter extends BufferBuilder {
    command: innerprintercommand;

    constructor() {
        super(new innerprintercommand());
    }

    printBarcode(data: string, barcodeSystem: number, width: number = this.command.BARCODE_WIDTH, height: number = 162, labelFont: number = this.command.BARCODE_LABEL_FONT, labelPosition: number = this.command.BARCODE_LABEL_POSITION, leftSpacing: number = 0): InnerPrinter {
        this.buffer.write(this.command.GS_w(width)); // width
        this.buffer.write(this.command.GS_h(100)); // height
        this.buffer.write(this.command.GS_L(60, 0)); // left spacing
        this.buffer.write(this.command.GS_f(labelFont)); // HRI font
        this.buffer.write(this.command.GS_H(labelPosition)); // HRI font
        this.buffer.write(this.command.GS_K(barcodeSystem, data.length)); // data is a string in UTF-8
        this.buffer.write(data, 'ascii');
        this.lineFeed();
        this.buffer.write(this.command.GS_L(0, 0)); // left spacing
        return this;
    }
}