export abstract class Command {

  public static ESC: number;
  public static FF: number;
  public static FS: number;
  public static GS: number;
  public static DC1: number;
  public static DC4: number;
  public static DLE: number;
  public static NL: number;
  public static SP: number;
  public static US: number;
  public static ESC_init: number[]; //ESC@
  public static FS_and: number[]; //ESC@
  public static LF: number[];
  abstract DLE_EOT(n: number): number[]; // DLEEOTn
  abstract ESC_exclamation(n: number): number[]; // ESC!n
  abstract ESC_minus(n: number): number[]; // ESC-n
  abstract ESC_rev(n: number): number[]; // ESC{n
  abstract ESC_a(n: number): number[]; // ESCan
  abstract ESC_d(n: number): number[]; // ESCdn
  abstract ESC_E(n: number): number[]; // ESCEn
  abstract ESC_G(n: number): number[]; // ESCGn
  abstract ESC_J(n: number): number[]; // ESCJn
  abstract ESC_M(n: number): number[]; // ESCMn
  abstract ESC_t(n: number): number[]; // ESCtn
  abstract GS_exclamation(n: number): number[]; // ESC!n
  abstract GS_B(n: number): number[]; // GSBn
  abstract GS_f(n: number): number[]; // GSfn
  abstract GS_h(n: number): number[]; // GShn
  abstract GS_H(n: number): number[]; // GSHn
  abstract GS_w(n: number): number[]; // GSwn
  abstract GS_x(n: number): number[]; // GSxn
  abstract GS_v(n: number): number[]; // GSv
  abstract GS_v0(m: number): number[]; // GSv0m
  abstract ESC_Z(m: number, n: number, k: number): number[]; // ESCZmnk
  abstract GS_K(m: number, n: number): number[]; // GSKmn
  public UNDERLINE_MODE: UNDERLINE_MODE = UNDERLINE_MODE.TWO_POINTS_OF_COARSE;
  public ALIGNMENT: ALIGNMENT = ALIGNMENT.LEFT;
  public BARCODE_SYSTEM: BARCODE_SYSTEM;
  public BARCODE_WIDTH: BARCODE_WIDTH = BARCODE_WIDTH.DOT_560;
  public BARCODE_LABEL_FONT: BARCODE_LABEL_FONT = BARCODE_LABEL_FONT.FONT_A;
  public BARCODE_LABEL_POSITION: BARCODE_LABEL_POSITION = BARCODE_LABEL_POSITION.BOTTOM;
  public QR_EC_LEVEL: QR_EC_LEVEL = QR_EC_LEVEL.H;
  public BITMAP_SCALE: BITMAP_SCALE = BITMAP_SCALE.NORMAL;
  public STATUS_TYPE: STATUS_TYPE;
}

export enum UNDERLINE_MODE {
  ONE_POINT_OF_COARSE = 49,
  TWO_POINTS_OF_COARSE = 50
}

export enum ALIGNMENT {
  LEFT = 48,
  CENTER = 49,
  RIGHT = 50
}

export enum BARCODE_SYSTEM {
  UPC_A = 65,
  UPC_E = 66,
  EAN_13 = 67,
  EAN_8 = 68,
  CODE_39 = 69,
  ITF = 70,
  CODABAR = 71,
  CODE_93 = 72,
  CODE_128 = 73
}

export enum BARCODE_WIDTH {
  DOT_250 = 2,
  DOT_375 = 3,
  DOT_560 = 4,
  DOT_625 = 5,
  DOT_750 = 6
}

export enum BARCODE_LABEL_FONT {
  FONT_A = 48,
  FONT_B = 49
}

export enum BARCODE_LABEL_POSITION {
  NOT_PRINT = 48,
  ABOVE = 49,
  BOTTOM = 50,
  ABOVE_BOTTOM = 51
}

export enum QR_EC_LEVEL {
  L = 0,
  M = 1,
  Q = 2,
  H = 3
}

export enum BITMAP_SCALE {
  NORMAL = 48,
  DOUBLE_WIDTH = 49,
  DOUBLE_HEIGHT = 50,
  FOUR_TIMES = 51
}

export enum STATUS_TYPE {
  PRINTER_STATUS = 1,
  OFFLINE_STATUS = 2,
  ERROR_STATUS = 3,
  PAPER_ROLL_SENSOR_STATUS = 4
}
