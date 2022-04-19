const timeConversion = (time) => {
  const [h, m, s] = time.split(':');
  const [h1, h2] = h.split(' ');
  const [m1, m2] = m.split(' ');
  const [s1, s2] = time.split(' ');
  const hh = h1 === '12' ? '00' : h1;
  const mm = m1 === '00' ? '00' : m1;
  const ss = s1 === '00' ? '00' : s1;
  const time = `${hh}:${mm}:${ss}`;
  const ampm = h2 === 'PM' ? 'PM' : 'AM';
  return `${time} ${ampm}`;
}

timeConversion('04:59:59AM');