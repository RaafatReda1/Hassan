export interface CredentialItem {
  label: string;
  value: string;
}

export interface ActionItem {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}

export interface Profile {
  id: number;
  created_at: string;
  name: string;
  profession: string;
  bio: string;
  img_url: string;
  location: string;
  birth_year: number;
  clan_title?: string;
  credentials: CredentialItem[];
  actions: ActionItem[];
  links: Record<string, string>;
}
