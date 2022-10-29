import Text from "../Text";

import { TileProps } from "./Tile.types";

import "./Tile.scss";

const Tile = ({ thumbnail, address, price, isFavorite, name }: TileProps) => {
  return (
    <div className="aleia-tile">
      <i
        className={`aleia-tile-favorite-icon fa-${
          isFavorite ? "solid" : "regular"
        } fa-heart`}
      ></i>
      <img
        loading="lazy"
        className="aleia-tile-image"
        src={thumbnail}
        alt={name}
      />
      <Text className="aleia-tile-price">{price}</Text>
      <Text className="aleia-tile-address">{address}</Text>
    </div>
  );
};

export default Tile;
