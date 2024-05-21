import { cn } from '@/helpers/class-names';
import { ECategory } from '@/enums/category';
import { getMenu } from '@/api/menu';
import { HTMLAttributes } from 'react';
import styles from './sidebar.module.css';

export default async function Sidebar({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const menu = await getMenu(ECategory.Courses);
  return (
    <div className={cn([className, styles.sidebar])} {...props}>
      <nav>
        <ul>
          {menu?.map((m) => (
            <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
