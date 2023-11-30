import ISpecialtyApplicationsCount from '@interfaces/specialtyApplicationsCount';

const items1: ISpecialtyApplicationsCount[] = [
  { header: 'ewq1', num_application: '1' },
  { header: 'ewq2', num_application: '2' },
  { header: 'ewq3', num_application: '11' },
  { header: 'ewq4', num_application: '5' },
  { header: 'ewq5', num_application: '4' },
];

const items2: ISpecialtyApplicationsCount[] = [
  { header: 'qwe1', num_application: '1' },
  { header: 'qwe2', num_application: '13' },
  { header: 'qwe3', num_application: '3' },
  { header: 'qwe4', num_application: '7' },
];

const items3: ISpecialtyApplicationsCount[] = [
  { header: 'www1', num_application: '4' },
  { header: 'www2', num_application: '41' },
  { header: 'www3', num_application: '24' },
  { header: 'www4', num_application: '44' },
  { header: 'www5', num_application: '64' },
];

const allItems = [items1, items2, items3];

export default allItems;
