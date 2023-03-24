export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in-progress',
  DONE = 'done',
}

export class Task {
  id?: string;
  title = '';
  description = '';
  status: TaskStatus = TaskStatus.TODO;

  constructor(props: Task) {
    /**
     * https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-expression
     */
    Object.entries(props).forEach(
      ([key, value]) => (this[key as keyof typeof this] = value)
    );
  }
}
