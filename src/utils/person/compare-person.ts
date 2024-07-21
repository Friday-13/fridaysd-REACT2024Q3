import { IPerson } from '@services/api';

export default function isIdEqual(person1: IPerson, person2: IPerson) {
  return person1.id === person2.id;
}
