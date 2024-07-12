export interface Dependency {
    id: number;
    icon: string;
    name: string;
    currentVersion: string;
    latestVersionUsed: string;
    latestRelease: string;
    use_count: string;
    versions?: Version[];
  }

  export interface Version {
    version: string;
    repositories: string[];
  }