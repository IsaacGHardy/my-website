import React, { useEffect, useState } from 'react';
import './MainContent.css';
import { InfoWidget } from '..';
import { homeWidgets, workWidgets, travelWidgets, aboutWidgets } from '../../data';
import ResumePreview from '../ResumePreview/ResumePreview';

function MainContent({ selected }) {
  let widgets = [];
  if (selected === 'home') widgets = homeWidgets;
  if (selected === 'work') widgets = workWidgets;
  if (selected === 'travel') widgets = travelWidgets;
  if (selected === 'about') widgets = aboutWidgets;

  const [visible, setVisible] = useState(0);

  useEffect(() => {
    setVisible(0);
    if (widgets && widgets.length > 0) {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setVisible(i);
        if (i >= widgets.length) clearInterval(interval);
      }, 150);
      return () => clearInterval(interval);
    }
  }, [selected]);

  if (selected === 'resume') {
    return (
      <main className="MainContent">
        <ResumePreview />
      </main>
    );
  }

  return (
    <main className="MainContent">
      {widgets && widgets.slice(0, visible).map((w, idx) => (
        <InfoWidget key={idx} {...w}/>
      ))}
    </main>
  );
}

export default MainContent;
