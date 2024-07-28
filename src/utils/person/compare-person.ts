import { IPerson } from '@services/api-types';

export default function isUrlEqual(person1: IPerson, person2: IPerson) {
  return person1.url === person2.url;
}
