import { memo } from "react";

const Weather = ({ city, country, temp, humidity, description, error }) => {
  return (
    <div className="info">
      {city && (
        <p className="info_key">
          City : <span className="info_value">{city}</span>
        </p>
      )}
      {country && (
        <p className="info_key">
          Country :<span className="info_value">{country}</span>
        </p>
      )}
      {temp && (
        <p className="info_key">
          Temperature :<span className="info_value">{temp}</span>
        </p>
      )}
      {humidity && (
        <p className="info_key">
          Humidity : <span className="info_value">{humidity}</span>
        </p>
      )}
      {description && (
        <p className="info_key">
          Description : <span className="info_value">{description}</span>
        </p>
      )}
      {error && (
        <p className="info_key">
          Error : <span className="info_value">{error}</span>
        </p>
      )}
    </div>
  );
};

export default memo(Weather);
