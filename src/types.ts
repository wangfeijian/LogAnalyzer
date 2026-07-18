export interface LogEntry{
    time: string;
    level: string;
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