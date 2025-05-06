import { User } from "../../../domain/entities/User";
import { UserRepository } from "../../../domain/repositories/user-repositories";
import { PrismaClient, Prisma } from "@prisma/client";

export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaClient) {}
  findById(id: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  findByEmail(email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }

  async createUser(user: User): Promise<void> {
    await this.prisma.users.create({
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
      },
    });
  }
  async getUserById(id: string): Promise<User | null> {
    const user = await this.prisma.users.findUnique({
      where: { id },
    });

    if (!user) return null;

    return new User(
      user.id,
      user.firstName,
      user.lastName,
      user.email,
      user.password,
      user.createdAt
    );
  }
}
