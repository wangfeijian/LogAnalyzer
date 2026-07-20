import { AlarmInfo, TopAlarm } from "../model/types.js";

export function getTopAlarms(alarms: AlarmInfo[]): TopAlarm[] {
    const map = new Map<string, number>();

    for (const alarm of alarms) {
        const count = map.get(alarm.action) ?? 0;

        map.set(alarm.action, count + 1);
    }

    const result = Array.from(map)
        .map(([action, count]) => ({
            action,
            count
        }));

    result.sort((a, b) => b.count - a.count);

    return result;
}