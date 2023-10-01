import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, error, loading } = useFetch(
    "/hotels/countByCity?cities=Accra,Kumasi,CapeCoast"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b6/A_drone_footage_of_Accra_central%2C_Ghana.jpg"
              alt="Accra image"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Accra</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.myjoyonline.com/wp-content/uploads/2022/01/Kumasi-Ghana.webp"
              alt="Kumasi image"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kumasi</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://i.pinimg.com/736x/65/c7/e5/65c7e5c56d3b6e2cca4ca9f6fb8d54bb--ghana-capes.jpg"
              alt="Capecoast image"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Cape Coast</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
