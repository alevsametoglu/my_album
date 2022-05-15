const getArtistsFromItems = (items) => {
  return items.map((item) => ({ name: item.name, image: item?.images?.[0]?.url, id: item.id }));
};
const getTracksFromItems = (items) => {
  console.log(items);
  return items.map((item) => ({
    id: item.id,
    name: item.name,
    duration: msToMinuteString(item.duration_ms),
    artistName: item?.artists.map((x) => x.name).join(", ") || "",
    albumImage: item?.album?.images?.[0]?.url || "",
    albumName: item?.album?.name || "",
    uri: item.uri,
  }));
};

const getAlbumsFromItems = (items) => {
  console.log("albums", items);
  return items.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.images?.[0]?.url || "",
    date: item.release_date,
  }));
};

const scrollFunction = (element, event) => {
  event.preventDefault();
  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
  });
};

const addScrollXEventListener = () => {
  const element = document.querySelector("#scroll-x");
  element?.addEventListener("wheel", (event) => scrollFunction(element, event));
};
const removeScrollXEventListener = () => {
  const element = document.querySelector("#scroll-x");
  element?.removeEventListener("wheel", (event) => scrollFunction(element, event));
};

export const util = {
  getAlbumsFromItems,
  getArtistsFromItems,
  getTracksFromItems,
  addScrollXEventListener,
  removeScrollXEventListener,
};

const msToMinuteString = (valueMs) => {
  const valueSecond = Math.round((Math.round(valueMs / 1000) / 60) * 100) / 100;
  const timeArray = valueSecond.toString().split(".");
  const minuteString = timeArray[0].padStart(2, "0");
  const secondString = Math.floor(Number(timeArray[1]) * 0.6)
    .toString()
    .padStart(2, "0");
  return `${minuteString}:${secondString}`;
};
