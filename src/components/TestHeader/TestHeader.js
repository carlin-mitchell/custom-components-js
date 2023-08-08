const TestHeader = (content) => {
  const h1 = Object.assign(document.createElement("h1"), {
    className: "test-header container text-primary bg-info p-1 mb-1 bw-2 br",
    innerText: `${content}`,
  });

  return h1;
};

export default TestHeader;
