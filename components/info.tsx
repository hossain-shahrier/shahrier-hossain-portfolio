import { Award, Check, GraduationCap } from 'lucide-react';
import React from 'react';

const Info = () => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center text-center text-nowrap items-center p-2 space-y-2">
        <Check />
        <h3>Completed</h3>
        <span>15+ projects</span>
      </div>
      <div className="flex flex-col items-center justify-center text-center text-nowrap p-2 space-y-2">
        <Award />
        <h3>Experience</h3>
        <span>2 years working</span>
      </div>
      <div className="flex flex-col justify-center text-center text-nowrap items-center p-2 space-y-2">
        <GraduationCap />
        <h3>Core knowledge</h3>
        <span>8+ technologies</span>
      </div>
    </div>
  );
};

export default Info;
