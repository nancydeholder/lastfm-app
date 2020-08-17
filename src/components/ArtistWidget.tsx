import React from "react";
import { Link } from "react-router-dom";

export interface ArtistWidgetProps {
  name: string;
}

export const ArtistWidget: React.FC<ArtistWidgetProps> = ({ name }) => {
  return (
    <div>
      <Link
        to={{
          pathname: `/artist/${name}`,
          state: {
            name: name,
          },
        }}
      >
        <h3>{name}</h3>
      </Link>
    </div>
  );
};
