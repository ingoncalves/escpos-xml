import { BufferBuilder } from "../../buffer-builder";
import iposprintercommand from "./iposprintercommand";

export default class IposPrinter extends BufferBuilder {

    constructor() {
        super(new iposprintercommand());
    }


    lineFeed(): BufferBuilder {
        this.buffer.write('', 'ascii');
        return this;
    }

    breakLine(n: number): BufferBuilder {
        for(let i=0; i<=n; i++) this.lineFeed();
        return this;
    }
}