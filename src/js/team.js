class Team {
  constructor() {
    this.members = new Set();
  }

  add(user) {
    if (this.members.has(user)) throw new Error('Персонаж уже существует!');
    this.members.add(user);
  }

  addAll(userAll) {
    this.members = new Set([...this.members, ...userAll]);
  }

  toArray() {
    return [...this.members];
  }

  * [Symbol.iterator]() {
    for (const person of this.members) {
      yield person;
    }
  }
}

export default Team;
