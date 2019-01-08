import bluetoothprinter from './printers/bluetoothprinter/bluetoothprinter';
import innerprinter from './printers/innerprinter/innerprinter';
import iposprinter  from './printers/iposprinter/iposprinter';
import { BufferBuilder } from './buffer-builder';

const devices = {
  bluetoothprinter,
  innerprinter,
  iposprinter
}

export function definePrinter(deviceName) {
    let printer = devices[`${deviceName.toLowerCase().replace(/ /g,'')}`];
    if (printer) return new printer();
    return new BufferBuilder();
}
