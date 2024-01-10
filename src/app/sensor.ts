export interface Sensor{
    id: number,
    dht_sensor_name: string,
    dev_eui: string,
    current_temperature: number,
    current_humidity: number,
    current_battery: number
}