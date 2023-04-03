import { AppError } from './app.error'

export class GroupNameInUseError extends AppError {
  constructor() {
    super('Esse nome já está em uso')
    this.name = 'GroupNameInUseError'
  }
}
