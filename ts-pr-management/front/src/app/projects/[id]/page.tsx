'use client';

import React, { useState } from 'react';
import ProjectHeader from '../ProjectHeader';
import BoardView from '../BoardView';

type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const [activeTab, setActiveTab] = useState('Board');
  const { id } = params;
  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'Board' && <BoardView id={id} />}
    </div>
  );
};

export default Project;
