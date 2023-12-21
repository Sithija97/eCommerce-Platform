import avatar from "../assets/avatar.png";

export const PostForm = () => {
  return (
    <div className="bg-dark px-6 py-4 text-gray-400">
      <div className="flex bg-dark-brighter_gray border border-gray-700 p-2 rounded-md">
        <div className="rounded-full bg-gray-600 overflow-hidden w-10 h-10">
          <img src={avatar} alt="avatar" style={{ filter: "invert(100%)" }} />
        </div>
        <form
          action=""
          className="flex-grow bg-dark-brighter_gray border border-gray-700 t_border ml-4 mr-2 ro"
        >
          <input
            type="text"
            placeholder="New post"
            className="bg-dark-brightest_gray p-2 px-3 text-sm block w-full rounded-md"
          />
        </form>
      </div>
    </div>
  );
};
