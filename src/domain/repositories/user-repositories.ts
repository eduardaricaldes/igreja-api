import { User } from "../entities/User";

export interface UserRepository {
  createUser(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}
