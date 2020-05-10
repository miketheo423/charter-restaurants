import React, { FC } from 'react';

interface Props {
  className?: string;
}

const TagsIcon: FC<Props> = (props) => {
  const { className = '' } = props;
  return (
    <svg
      className={`icon icon-filter ${className}`}
      width='16px'
      height='16px'
      x='0px'
      y='0px'
      viewBox='0 0 426.667 426.667'
    >
      <g>
        <g>
          <path d='M414.08,204.373L222.187,12.48C214.4,4.8,203.733,0,192,0H42.667C19.093,0,0,19.093,0,42.667V192    c0,11.84,4.8,22.507,12.587,30.187l192,192c7.68,7.68,18.347,12.48,30.08,12.48s22.507-4.8,30.187-12.48l149.333-149.333    c7.68-7.787,12.48-18.453,12.48-30.187C426.667,222.827,421.867,212.16,414.08,204.373z M74.667,106.667    c-17.707,0-32-14.293-32-32s14.293-32,32-32s32,14.293,32,32S92.373,106.667,74.667,106.667z' />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

export { TagsIcon };
