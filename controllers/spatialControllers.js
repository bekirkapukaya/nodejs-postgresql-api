import { Client } from 'pg';
import GeoJSON from 'geojson';

export const getPoints = async (req, res) => {
  const { QUERY_POINTS } = process.env;

  const client = new Client();
  await client.connect();
  const { rows } = await client.query(QUERY_POINTS);
  await client.end();

  let geojsonData = GeoJSON.parse(rows, {
    Point: 'data',
    include: ['name'],
  });

  res.status(200).json({
    geojsonData,
  });
};

export const getLines = async (req, res) => {
  const { QUERY_LINES } = process.env;
  const client = new Client();
  await client.connect();
  const { rows } = await client.query(QUERY_LINES);
  await client.end();

  let geojsonData = GeoJSON.parse(rows, {
    MultiLineString: 'data',
    include: ['name'],
  });

  res.status(200).json({
    geojsonData,
  });
};

export const getPolygons = async (req, res) => {
  const { QUERY_POLYGONS } = process.env;
  const client = new Client();
  await client.connect();
  const { rows } = await client.query(QUERY_POLYGONS);
  await client.end();

  let geojsonData = GeoJSON.parse(rows, {
    MultiPolygon: 'data',
    include: ['name'],
  });

  res.status(200).json({
    geojsonData,
  });
};
