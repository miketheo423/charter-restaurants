import React, { FC, useState, useEffect, useCallback } from 'react';
import './Select.scss';

// Icons
import { CheckIcon, CaretIcon } from '../Icons';

interface Props {
  className?: string;
  items: any[];
  name: string;
  label: string;
  value?: any;
  required?: boolean;
  onSelect: (item: string) => void;
  // option-* used when passing in objects that don't have generic "label" and "field" props
  optionLabel?: string;
  optionValue?: string;
}

const Select: FC<Props> = (props) => {
  const { className = '', items, name, label, value, onSelect, optionLabel, optionValue } = props;
  const [expanded, setExpanded] = useState<boolean>(false);
  const [node, setNode] = useState<HTMLDivElement | any>(null); // for handling click outside to close

  const onOptionSelcted = (item: any = '') => {
    // if no item passed in, assume the "all" was selected
    item ? onSelect(optionValue ? item[optionValue] : item.value) : onSelect('');
    setExpanded(false);
  };

  const renderOptions = () => {
    return (
      <ul
        tabIndex={-1}
        role='listbox'
        aria-labelledby='select__options'
        className='select__options'
      >
        {renderItems(items)}
      </ul>
    );
  };

  const renderItems = (items: any[]) => {
    return [
      <li
        key={'all'}
        onClick={onOptionSelcted}
        onKeyPress={onOptionSelcted}
        role='option'
        aria-selected={!value}
        tabIndex={0}
        className='option'
      >
        <span className='option__text'>All</span>
        {!value ? <CheckIcon /> : null}
      </li>,
      ...items.map((item, i) => (
        <li
          key={i}
          onClick={() => onOptionSelcted(item)}
          onKeyPress={() => onOptionSelcted(item)}
          role='option'
          aria-selected={isSelected(value, item, optionValue)}
          tabIndex={0}
          className='option'
        >
          <span className='option__text'>{optionLabel ? item[optionLabel] : item.label}</span>
          {isSelected(value, item, optionValue) ? <CheckIcon /> : null}
        </li>
      )),
    ];
  };

  // handle checkmark rendering / active styling
  const isSelected = (value: any, item: any, optionValue: string | undefined) => {
    return optionValue ? value === item[optionValue] : value === item.value;
  };

  // closes the select menu when clicking outside of it
  const handleClickOutside = useCallback(
    (event: any) => {
      if (node?.contains(event.target)) return;
      setExpanded(false);
    },
    [node]
  );

  useEffect(() => {
    if (expanded) document.addEventListener('mousedown', handleClickOutside, false);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, false);
    };
  }, [expanded, handleClickOutside]);

  return (
    <div className={`select ${className}`} ref={(node: HTMLDivElement) => setNode(node)}>
      <label htmlFor={name} className='select__label'>
        {label}
      </label>
      <button
        aria-haspopup='listbox'
        aria-labelledby={name}
        id={name}
        className='select__input'
        onClick={() => setExpanded(!expanded)}
        type='button'
      >
        <span className='selected'>{value || 'All'}</span>
        <CaretIcon direction='down' className={expanded ? 'icon-caret--up' : ''} />
      </button>
      {expanded ? renderOptions() : null}
    </div>
  );
};

export default Select;
