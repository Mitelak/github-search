import * as React from 'react';

import Loader from 'components/Loader';

import styles from './List.module.css';

interface ListProps<T> {
  items?: T[];
  renderItem: (props: T) => React.ReactNode;
  isLoading?: boolean;
  error?: string | null;
}

const List = <T extends { id: string | number }>({
  items,
  renderItem,
  isLoading,
  error,
}: ListProps<T>) => {
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <ul className={styles.list}>
        {items?.map((item) => (
          <li key={item.id} className={styles.item}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
