export const sliceDataForPage = (data, currentPage, postsPerPage) => {
  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const slicedData = data.slice(firstIndex, lastIndex);
  return slicedData;
};
