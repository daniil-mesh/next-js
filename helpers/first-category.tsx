import IconCourses from '@/components/menu/icons/courses.svg';
import IconServices from '@/components/menu/icons/services.svg';
import IconBooks from '@/components/menu/icons/books.svg';
import IconProducts from '@/components/menu/icons/products.svg';
import { ECategory } from '@/enums/category';
import { IFirstLevelMenuItem } from '@/interfaces/menu.interface';

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

export function getFirstCategoryByString(data: string): ECategory {
  switch (data) {
    case ECategory.Books.toString():
      return ECategory.Books;
    case ECategory.Products.toString():
      return ECategory.Products;
    case ECategory.Services.toString():
      return ECategory.Products;
    default:
      return ECategory.Courses;
  }
}
