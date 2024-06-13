import { ECategory } from '@/enums/category';
import { IFirstLevelMenuItem } from '@/interfaces/menu.interface';
import IconBooks from '@/layout/menu/icons/books.svg';
import IconCourses from '@/layout/menu/icons/courses.svg';
import IconProducts from '@/layout/menu/icons/products.svg';
import IconServices from '@/layout/menu/icons/services.svg';

export const firstLevelMenu: IFirstLevelMenuItem[] = [
  {
    route: 'course',
    name: 'Курсы',
    icon: <IconCourses />,
    id: ECategory.Courses,
  },
  {
    route: 'service',
    name: 'Сервисы',
    icon: <IconServices />,
    id: ECategory.Services,
  },
  {
    route: 'book',
    name: 'Книги',
    icon: <IconBooks />,
    id: ECategory.Books,
  },
  {
    route: 'product',
    name: 'Продукты',
    icon: <IconProducts />,
    id: ECategory.Products,
  },
];
