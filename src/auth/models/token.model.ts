export interface PayloadToken {
  status: number;
  id: string;
  group: string;
}

export interface PayloadCompanyToken {
  client_id: string;
  client_secret: string;
  grant_type: string;
  group: string;
}
