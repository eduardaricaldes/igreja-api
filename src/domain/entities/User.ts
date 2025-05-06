export class User {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
    public findById: any = null,
    public findByEmail: any = null
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
