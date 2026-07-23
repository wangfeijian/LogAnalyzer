export interface LogEntry{
    time: string;
    level: LogLevel;
    message: string;
}

export interface StatisticsResult {
    total: number;
    levels: Map<string, number>;
}

export interface CliOptions {
    file: string;
    level?: string;
}

export interface AlarmInfo {
    device: string;
    action: string;
}

export interface TopAlarm {
    action: string;
    count: number;
}

export type LogLevel =
    "INFO"
    | "WARN"
    | "ERROR";