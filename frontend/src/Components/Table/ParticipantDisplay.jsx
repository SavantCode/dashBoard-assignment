import React from 'react';

export default function ParticipantDisplay({ participants = [] }) {
  if (!participants.length) return null;

  const first = participants[0];
  const roles = 'Buyer, Sales'; // Hardcoded, can be dynamic

  return (
    <div className="flex items-center gap-2 w-[138px] h-6">
      <div className="w-5 h-5 rounded-full bg-[#32B245] flex items-center justify-center text-white text-xs font-semibold">
        {first.charAt(0)}
      </div>
      <div className="leading-tight">
        <div className="text-gray-800 text-sm font-medium">
          {participants.length > 1 ? `${first} +${participants.length - 1}` : first}
        </div>
        <div className="text-gray-500 text-xs">Buyer, Sales</div>
      </div>
    </div>
  );
}
