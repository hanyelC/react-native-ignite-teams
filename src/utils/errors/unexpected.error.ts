import { AppError } from './app.error'

export class UnexpectedError extends AppError {
  constructor() {
    super('Algo de errado aconteceu. Tente novamente em breve.')
    this.name = 'UnexpectedError'
  }
}
