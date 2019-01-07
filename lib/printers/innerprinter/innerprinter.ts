import { BufferBuilder } from "../../buffer-builder";
import innerprintercommand from "./innerprintercommand";

export default class InnerPrinter extends BufferBuilder {

    constructor(command: innerprintercommand) {
        super(command);
    }
}