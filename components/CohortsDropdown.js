import React, { useEffect, useState } from 'react';

export default function CohortsDropdown({ onSelect }) {
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    const fetchCohorts = async () => {
      const response = await fetch('/api/cohorts');
      const data = await response.json();
      setCohorts(data);
    };
    fetchCohorts();
  }, []);

  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="p-2 border rounded-md"
    >
      <option value="">Select Cohort</option>
      {cohorts.map((cohort) => (
        <option key={cohort.id} value={cohort.id}>
          {cohort.name}
        </option>
      ))}
    </select>
  );
}
