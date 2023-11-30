type Role = 'admin' | 'user';

export interface IAdmin {
  login?: string;
  password: string;
  role: Role;
}

export const admins: IAdmin[] = [
  {
    login: 'root',
    password: 'root',
    role: 'admin',
  },
  {
    login: 'user',
    password: 'pas',
    role: 'user',
  },
];

const adm = new Map<string, IAdmin>([
  ['root', { password: 'root', role: 'admin' }],
  ['user', { password: 'pas', role: 'user' }],
]);

export default adm;
