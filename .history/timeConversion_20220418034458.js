const timeConversion = (s) => {
  const [h, m, s] = s.split(':');
  const [h1, h2] = h.split(' ');
  const [m1, m2] = m.split(' ');
  const [s1, s2] = s.split(' ');
  const hh = h1 === '12' ? '00' : h1;
  const mm = m1 === '00' ? '00' : m1;
  const ss = s1 === '00' ? '00' : s1;
  const time = `${hh}:${mm}:${ss}`;
  const ampm = h2 === 'PM' ? 'PM' : 'AM';
  return `${time} ${ampm}`;
}