import { CurrentVersion } from "./currentVersion.model";

export interface Plugin {
    id: number;
    icon: string;
    name: string;
    currentVersions?: CurrentVersion[];
    latestVersionUsed: string;
    latestRelease: string;
    use_count: string;
  }