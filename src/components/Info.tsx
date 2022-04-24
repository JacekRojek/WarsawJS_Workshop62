import React from 'react';

const Info = ({
  text,
  heading = 'default value',
}: {
  heading?: string;
  text: string;
}) => (
  <div>
    <h1 className="text-red-900">{heading}</h1>
    <p className="text-red-700">{text}</p>
  </div>
);

export default Info;
