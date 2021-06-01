import { AppError } from "../../../../shared/errors/AppError";
import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

let usersInMemoryRepository: InMemoryUsersRepository;
let createUsersUseCase: CreateUserUseCase;

describe('Create User Test', () => {
  beforeEach(() => {
    usersInMemoryRepository = new InMemoryUsersRepository();
    createUsersUseCase = new CreateUserUseCase(usersInMemoryRepository);
  });

  it('should create a new user', async () => {
    const user = await createUsersUseCase.execute({
      name: 'user',
      email: 'user@email.com',
      password: '123'
    });
    expect(user).not.toBeNull();
  });

  it('should not create a new user with same email', async () => {
    const user = await createUsersUseCase.execute({
      name: 'user2',
      email: 'user@email.com',
      password: '123'
    });
    expect(user).toBeInstanceOf(AppError);
  });
});
