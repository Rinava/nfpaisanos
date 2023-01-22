const playSound = (...urls: string[]) => {
  const audio = new Audio(urls[Math.floor(Math.random() * urls.length)]);
  audio.play();
};

export default playSound;
