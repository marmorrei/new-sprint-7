export const fetchUsers = async () => {
  const res = await fetch('http://localhost:3000/users', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();
  return data;
};
