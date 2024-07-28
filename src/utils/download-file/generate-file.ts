import { IPerson } from '@services/api-types';

const SEPARATOR = ',';

function personToCSVString(person: IPerson) {
  const str = [person.name, person.birth_year, person.gender, person.eye_color, person.height, person.url].join(
    SEPARATOR
  );
  return str;
}

function generateSelectedPeopleFile(people: Array<IPerson>) {
  const headers = ['name', 'birth_year', 'gender', 'eye_color', 'height', 'url'];
  let content = headers.join(SEPARATOR) + '\n';
  content += people.map((person) => personToCSVString(person)).join('\n');
  return content + '\n';
}

export default generateSelectedPeopleFile;
