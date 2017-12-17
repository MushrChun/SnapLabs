export const NOTIFICATION_DESCRIPTOR = "00002902-0000-1000-8000-00805f9b34fb";

export const DEVICEINFO_SERVICE = "0000180a-0000-1000-8000-00805f9b34fb";
export const FIRMWARE_DATA = "00002a26-0000-1000-8000-00805f9b34fb";
export const MODELNUMBER_DATA = "00002a24-0000-1000-8000-00805f9b34fb";
export const SYSTEM_ID = "00002a23-0000-1000-8000-00805f9b34fb";

export const Temperature = {
  UUID: "f000aa00-0451-4000-b000-000000000000",
  DATA: "f000aa01-0451-4000-b000-000000000000",
  CONFIG: "f000aa02-0451-4000-b000-000000000000",
  // Missing in HW rev. 1.2 (FW rev. 1.5)
  PERIOD: "f000aa03-0451-4000-b000-000000000000"
};

export const Humidity = {
  UUID: "f000aa20-0451-4000-b000-000000000000",
  DATA: "f000aa21-0451-4000-b000-000000000000",
  CONFIG: "f000aa22-0451-4000-b000-000000000000",
  PERIOD: "f000aa23-0451-4000-b000-000000000000"
};

export const Accelerometer = {
  UUID: "F000AA80-0451-4000-B000-000000000000",
  DATA: "F000AA81-0451-4000-B000-000000000000", // read/notify 3 bytes X : Y : Z
  CONFIG: "F000AA82-0451-4000-B000-000000000000", // read/write 1 byte
  PERIOD: "F000AA83-0451-4000-B000-000000000000" // read/write 1 byte Period = [Input*10]ms
};

export const Barometer = {
  UUID: "F000AA40-0451-4000-B000-000000000000",
  DATA: "F000AA41-0451-4000-B000-000000000000",
  CONFIG: "F000AA42-0451-4000-B000-000000000000",
  CALIBRATION: "f000aa43-0451-4000-b000-000000000000",
  PERIOD: "F000AA44-0451-4000-B000-000000000000"
};

// Only in SensorTag CC2650.
export const Luxometer = {
  UUID: "f000aa70-0451-4000-b000-000000000000",
  DATA: "f000aa71-0451-4000-b000-000000000000",
  CONFIG: "f000aa72-0451-4000-b000-000000000000",
  PERIOD: "f000aa73-0451-4000-b000-000000000000"
};

// Only in SensorTag CC2650.
export const Movement = {
  UUID: "f000aa80-0451-4000-b000-000000000000",
  DATA: "f000aa81-0451-4000-b000-000000000000",
  CONFIG: "f000aa82-0451-4000-b000-000000000000",
  PERIOD: "f000aa83-0451-4000-b000-000000000000"
};

export const Keypress = {
  UUID: "0000ffe0-0000-1000-8000-00805f9b34fb",
  DATA: "0000ffe1-0000-1000-8000-00805f9b34fb"
};

// To buzz the device
export const BUZZER = {
  UUID: "f000aa64-0451-4000-b000-000000000000",
  CONFIG: "f000aa66-0451-4000-b000-000000000000",
  DATA: "f000aa65-0451-4000-b000-000000000000"
};

// To read button press
export const IOBUTTON = {
  UUID: "ffe0",
  CONFIG: "ffe1",
  DATA: "ffe1"
};

// To read battery information
export const BATTERY = {
  UUID: "180f",
  CONFIG: "2a19",
  DATA: "2a19"
};
