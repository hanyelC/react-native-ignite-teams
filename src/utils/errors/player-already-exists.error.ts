import { AppError } from './app.error'

export class PlayerAlreadyExistsError extends AppError {
  constructor() {
    super('Essa pessoa já está em um time')
    this.name = 'PlayerAlreadyExistsError'
  }
}
