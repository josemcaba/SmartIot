ESP8266_IoT.iotSwitchEvent(ESP8266_IoT.SmartIotSwitchState.off, function () {
    basic.showIcon(IconNames.Sad)
})
ESP8266_IoT.iotSwitchEvent(ESP8266_IoT.SmartIotSwitchState.on, function () {
    basic.showIcon(IconNames.Happy)
})
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("wiot", "a1b2c3d4")
OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    ESP8266_IoT.connectSmartiot("Vm8N69zewGBV7iNGofTI", "1")
    ESP8266_IoT.setSmartIotUploadData(
    Environment.ReadLightIntensity(AnalogPin.P1),
    Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C)
    )
    ESP8266_IoT.uploadSmartIotData()
    OLED.writeString("Luminosidad: ")
    OLED.writeNumNewLine(Environment.ReadLightIntensity(AnalogPin.P1))
    OLED.writeString("Temperatura: ")
    OLED.writeNumNewLine(Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C))
    basic.pause(120000)
})
