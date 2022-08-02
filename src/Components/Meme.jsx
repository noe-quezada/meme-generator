import data from "../Data/memesData";

const Meme = () => {
  function handleClick() {
    const randomNumber = Math.floor(Math.random() * data.data.memes.length);
    const element = data.data.memes[randomNumber].url;
    return element;
  }

  return (
    <main className="meme--component">
      <div className="form">
        <input className="meme--inputs" placeholder="Top text" type="text" />
        <input className="meme--inputs" placeholder="Bottom text" type="text" />
        <button onClick={handleClick} className="meme--button">
          Get a new meme image
        </button>
      </div>
    </main>
  );
};

export { Meme };
