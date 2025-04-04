export type Auth = {
  id: string;
  email: string;
  password: string;
  totp_key: Uint8Array;
  last_login?: Date;
  updated_at?: Date;
  created_at: Date;
  deleted_at?: Date;
};
