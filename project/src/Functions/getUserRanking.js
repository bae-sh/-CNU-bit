const getUserRanking = () => {
  const userRanking = [
    { stock: 500000000, name: "bae" },
    { stock: 600000000, name: "bae2" },
    { stock: 700000000, name: "bae3" },
    { stock: 800000000, name: "bae4" },
    { stock: 900000000, name: "bae5" },
  ];
  const sortUserRanking = userRanking.sort((a, b) => {
    return b.stock - a.stock;
  });
  return sortUserRanking;
};
export default getUserRanking;
