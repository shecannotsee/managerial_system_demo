const baseUrl = () => {
  const host = window.location.hostname;
  const port = "9703";
  const protocol = window.location.protocol;
  return protocol + "//" + host + ":" + port;
};

export default baseUrl();