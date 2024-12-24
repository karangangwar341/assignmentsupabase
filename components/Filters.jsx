import CohortsDropdown from './CohortsDropdown';

export default function Filters({ onSelect }) {
  return (
    <div className="flex justify-between items-center mb-4">
      {/* Filters */}
      <div className="flex space-x-4">
        <CohortsDropdown onSelect={onSelect} />
        <button className="px-4 py-2 bg-blue-500 text-white rounded">CBSE 9</button>
      </div>
      {/* Add Student Button */}
      <button className="px-4 py-2 bg-blue-500 text-white rounded">+ Add new Student</button>
    </div>
  );
}
