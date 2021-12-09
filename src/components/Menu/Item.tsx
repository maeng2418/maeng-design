/** @jsxImportSource @emotion/react */
import React, { MouseEvent, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface ItemProps {
  mode?: 'horizontal' | 'vertical';
  key?: React.Key;
  groupKey?: React.Key;
  children: React.ReactNode;
  href: string;
  disabled?: boolean;
  onSelectKey?: (key: React.Key[]) => (event: MouseEvent<HTMLElement>) => void;
  isSelected?: boolean;
  onClick?: (e: MouseEvent, title?: React.ReactNode, key?: React.Key) => void;
  selectKeys?: React.Key[];
  collapsed?: boolean;
  icon?: React.ReactNode;
}
const Item: React.FC<ItemProps> = ({
  mode,
  key,
  children,
  href,
  disabled,
  onSelectKey,
  isSelected,
  onClick,
  groupKey,
  selectKeys,
  collapsed,
  icon,
}) => {
  const itemKey = useMemo(() => key || uuidv4(), [key]);
  const mergedKey = useMemo(() => {
    const keys = [itemKey];
    if (groupKey) keys.push(groupKey);
    return keys;
  }, [groupKey, itemKey]);

  const onClickItem = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      onSelectKey && onSelectKey(mergedKey);
      if (disabled) {
        e.preventDefault();
        return;
      }
      onClick && onClick(e, children, itemKey);
    },
    [children, disabled, itemKey, mergedKey, onClick, onSelectKey],
  );

  return (
    <li
      className={`
        ${selectKeys?.includes(itemKey) || isSelected ? 'item selected' : 'item'}
        ${disabled ? 'disabled' : ''}
      `}
      key={itemKey}
      onClick={onClickItem}
    >
      <a href={href}>
        {icon}
        {mode === 'vertical' && !collapsed && children}
        {mode === 'vertical' && collapsed && !icon && typeof children === 'string' && children[0]}
        {mode === 'horizontal' && children}
      </a>
    </li>
  );
};

export default Item;
