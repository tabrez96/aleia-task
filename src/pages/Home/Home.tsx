import { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import type { RootState } from "../../store";

import Text from "../../components/Text";
import Flex from "../../components/Flex";
import Tile from "../../components/Tile";
import Button from "../../components/Button";

import { useBreakpoint } from "../../hooks/useBreakpoint";

import { loadProperties, loadFavorites } from "./slice";

import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const breakpoint = useBreakpoint();

  const properties = useSelector((state: RootState) => state.home.properties);
  const favorites = useSelector((state: RootState) => state.home.favorites);

  const propertyColumns = useMemo(() => {
    if (breakpoint === "mobile") {
      return [properties];
    }

    const totalProperties = properties.length;

    const columns = [
      properties.slice(0, Math.round(totalProperties / 3)),
      properties.slice(
        Math.round(totalProperties / 3),
        Math.round(totalProperties / 3) * 2
      ),
      properties.slice(Math.round(totalProperties / 3) * 2),
    ];

    return columns;
  }, [properties, breakpoint]);

  useEffect(() => {
    dispatch(loadProperties());
    dispatch(loadFavorites());
  }, []);

  return (
    <div className="home">
      <Flex justify="space-between" className="title">
        <Text size="x-large" className="text-bold-700">
          We are an award winning interior design Agency
        </Text>
        <Button>
          <Text className="text-bold-600">View all properties</Text>
          <i className="fa-solid fa-arrow-right-long"></i>
        </Button>
      </Flex>

      <div className="properties-tiles">
        {propertyColumns.map((column) => (
          <Flex direction="column" className="properties-tiles-column">
            {column.map(({ id, ...property }) => (
              <Tile {...property} isFavorite={favorites.includes(id)} />
            ))}
          </Flex>
        ))}
      </div>
    </div>
  );
};

export default Home;
