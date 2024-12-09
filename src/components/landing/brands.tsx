const Brands = () => {
  const images = [
    { id: 2, src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" },
    { id: 3, src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" },
    { id: 4, src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" },
    { id: 5, src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" },
    { id: 6, src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" },
    {
      id: 10,
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    },
    {
      id: 11,
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    },
    {
      id: 12,
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    },
    {
      id: 13,
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
    },
  ];
  return (
    <div className="slider-container bg-white dark:bg-black grayscale">
      <div className="slider bg-white dark:bg-black">
        <div className="slide-track bg-white dark:bg-black">
          {images.map((image) => (
            <div key={image.id} className="slide">
              <img
                src={image.src}
                height="100"
                width="250"
                alt=""
                className="bg-white dark:bg-black"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
