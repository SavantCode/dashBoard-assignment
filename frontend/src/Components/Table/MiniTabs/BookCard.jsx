// src/components/BookCard.jsx
import React from 'react';

export default function BookCard({ book }) {
  if (!book) return null;

  return (
    <div className="border rounded-lg shadow p-4 bg-white text-gray-800">
      <h2 className="text-xl font-semibold mb-2">{book.title || 'Untitled'}</h2>

      <p><strong>Date & Time:</strong> {book.dateTime || '-'}</p>
      <p><strong>Status:</strong> {book.status || '-'}</p>
      <p><strong>Type:</strong> {book.type || '-'}</p>

      <p>
        <strong>Buyer:</strong>{' '}
        {book.buyer?.url ? (
          <a
            href={book.buyer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {book.buyer.name}
          </a>
        ) : (
          book.buyer?.name || '-'
        )}
      </p>

      <p><strong>Brand:</strong> {book.brand || '-'}</p>
      <p><strong>Dept:</strong> {book.dept || '-'}</p>
      <p><strong>Meeting Date:</strong> {book.meetingDate || '-'}</p>

      <div className="mt-2">
        <strong>Participants:</strong>
        {book.participants && book.participants.length > 0 ? (
          <ul className="list-disc list-inside">
            {book.participants.map((p, idx) => (
              <li key={idx}>
                {p.name} ({p.role})
              </li>
            ))}
          </ul>
        ) : (
          <span> None</span>
        )}
      </div>
    </div>
  );
}
