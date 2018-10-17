import bluetoothprintercommand from './bluetoothprintercommand';
import innerprintercommand from './innerprintercommand';
import iposprintercommand  from './iposprintercommand';
import { Command } from './command';

const devices = {
  bluetoothprintercommand,
  innerprintercommand,
  iposprintercommand
}

export function dynamicCommand(deviceName) {
    let printer = devices[`${deviceName.toLowerCase().replace(/ /g,'')}command`];
    if (printer) return new printer();
    return new Command();
}
